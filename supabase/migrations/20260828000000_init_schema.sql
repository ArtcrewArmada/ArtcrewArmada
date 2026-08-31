-- 1. Enable UUID Extension
create extension if not exists "uuid-ossp";

-- 2. Define Enum Types safely if they do not exist
do $$
begin
  if not exists (select 1 from pg_type where typname = 'user_role') then
    create type user_role as enum (
      'super_admin', 'admin', 'editor', 'creator', 
      'artist', 'artisan', 'partner', 'instructor', 
      'member', 'customer', 'visitor'
    );
  end if;

  if not exists (select 1 from pg_type where typname = 'content_status') then
    create type content_status as enum ('draft', 'review', 'published', 'archived');
  end if;

  if not exists (select 1 from pg_type where typname = 'registration_status') then
    create type registration_status as enum ('pending', 'confirmed', 'cancelled');
  end if;

  if not exists (select 1 from pg_type where typname = 'payment_status') then
    create type payment_status as enum ('unpaid', 'paid', 'refunded');
  end if;
end
$$;

-- 3. Profiles Table (Link with Supabase Auth)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null unique,
  role user_role default 'member'::user_role not null,
  first_name text,
  last_name text,
  avatar_url text,
  line_user_id text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for profiles
alter table public.profiles enable row level security;

-- 4. Content Metadata Table (Generic table for Stories, Journal, Awareness Content)
create table public.contents (
  id uuid default uuid_generate_v4() primary key,
  type text not null, -- 'story', 'journal', 'awareness', 'exhibition', 'talk'
  status content_status default 'draft'::content_status not null,
  author_id uuid references public.profiles(id),
  featured_image text,
  published_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for contents
alter table public.contents enable row level security;

-- 5. Content Translations Table (Supports TH, EN, FR)
create table public.content_translations (
  id uuid default uuid_generate_v4() primary key,
  content_id uuid references public.contents(id) on delete cascade not null,
  language varchar(5) not null, -- 'th', 'en', 'fr'
  title text not null,
  slug text not null,
  excerpt text,
  body text, -- Rich Markdown or HTML
  seo_title text,
  seo_description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique (content_id, language),
  unique (slug, language)
);

-- Enable RLS for content_translations
alter table public.content_translations enable row level security;

-- 6. Collections Table
create table public.collections (
  id uuid default uuid_generate_v4() primary key,
  slug_key text not null unique, -- unique key agnostic of language
  featured_image text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for collections
alter table public.collections enable row level security;

create table public.collection_translations (
  id uuid default uuid_generate_v4() primary key,
  collection_id uuid references public.collections(id) on delete cascade not null,
  language varchar(5) not null,
  title text not null,
  description text,
  unique (collection_id, language)
);

-- Enable RLS for collection_translations
alter table public.collection_translations enable row level security;

-- 7. Products Table (Shop)
create table public.products (
  id uuid default uuid_generate_v4() primary key,
  collection_id uuid references public.collections(id) on delete set null,
  slug_key text not null unique,
  price numeric(12,2) not null,
  stock_quantity integer default 0 not null,
  sku text,
  featured_image text,
  metadata jsonb default '{}'::jsonb, -- dynamic attributes like materials, artisan_id, techniques
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for products
alter table public.products enable row level security;

create table public.product_translations (
  id uuid default uuid_generate_v4() primary key,
  product_id uuid references public.products(id) on delete cascade not null,
  language varchar(5) not null,
  title text not null,
  description text,
  details text, -- rich text specification
  unique (product_id, language)
);

-- Enable RLS for product_translations
alter table public.product_translations enable row level security;

-- 8. Activities & Events Table (Workshops, Talks, Exhibitions)
create table public.activities (
  id uuid default uuid_generate_v4() primary key,
  type text not null, -- 'workshop', 'talk', 'exhibition', 'activity'
  slug_key text not null unique,
  featured_image text,
  price numeric(12,2) default 0.00 not null,
  max_participants integer,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for activities
alter table public.activities enable row level security;

create table public.activity_translations (
  id uuid default uuid_generate_v4() primary key,
  activity_id uuid references public.activities(id) on delete cascade not null,
  language varchar(5) not null,
  title text not null,
  description text,
  location text, -- address details
  schedule_info text, -- date display info
  unique (activity_id, language)
);

-- Enable RLS for activity_translations
alter table public.activity_translations enable row level security;

-- 9. Courses (Learning)
create table public.courses (
  id uuid default uuid_generate_v4() primary key,
  slug_key text not null unique,
  instructor_id uuid references public.profiles(id),
  featured_image text,
  price numeric(12,2) default 0.00 not null,
  level text, -- 'beginner', 'intermediate', 'advanced'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for courses
alter table public.courses enable row level security;

create table public.course_translations (
  id uuid default uuid_generate_v4() primary key,
  course_id uuid references public.courses(id) on delete cascade not null,
  language varchar(5) not null,
  title text not null,
  description text,
  unique (course_id, language)
);

-- Enable RLS for course_translations
alter table public.course_translations enable row level security;

-- 10. RLS POLICIES (Read accessible to anyone, Write only to Admins/Editors)

-- Profiles Policies
create policy "Allow public read-only access to profiles"
  on public.profiles for select using (true);

create policy "Allow users to update their own profile"
  on public.profiles for update using (auth.uid() = id);

-- Generic Contents Policies
create policy "Allow public read access to published content"
  on public.contents for select using (status = 'published');

create policy "Allow creators and admins to view all content drafts"
  on public.contents for select using (
    auth.uid() in (
      select id from public.profiles 
      where role in ('super_admin', 'admin', 'editor', 'creator')
    )
  );

create policy "Allow admins and creators to insert/update contents"
  on public.contents for all using (
    auth.uid() in (
      select id from public.profiles 
      where role in ('super_admin', 'admin', 'editor', 'creator')
    )
  );

-- Repeat similar access controls for translation tables
create policy "Allow public read access to content translations"
  on public.content_translations for select using (true);

create policy "Allow admins/creators to manage content translations"
  on public.content_translations for all using (
    auth.uid() in (
      select id from public.profiles 
      where role in ('super_admin', 'admin', 'editor', 'creator')
    )
  );

-- Collections Policies
create policy "Allow public read access to collections"
  on public.collections for select using (true);

create policy "Allow admins to manage collections"
  on public.collections for all using (
    auth.uid() in (
      select id from public.profiles 
      where role in ('super_admin', 'admin')
    )
  );

create policy "Allow public read access to collection translations"
  on public.collection_translations for select using (true);

create policy "Allow admins to manage collection translations"
  on public.collection_translations for all using (
    auth.uid() in (
      select id from public.profiles 
      where role in ('super_admin', 'admin')
    )
  );

-- Products Policies
create policy "Allow public read access to products"
  on public.products for select using (true);

create policy "Allow admins to manage products"
  on public.products for all using (
    auth.uid() in (
      select id from public.profiles 
      where role in ('super_admin', 'admin')
    )
  );

create policy "Allow public read access to product translations"
  on public.product_translations for select using (true);

create policy "Allow admins to manage product translations"
  on public.product_translations for all using (
    auth.uid() in (
      select id from public.profiles 
      where role in ('super_admin', 'admin')
    )
  );

-- Activities Policies
create policy "Allow public read access to activities"
  on public.activities for select using (true);

create policy "Allow admins to manage activities"
  on public.activities for all using (
    auth.uid() in (
      select id from public.profiles 
      where role in ('super_admin', 'admin')
    )
  );

create policy "Allow public read access to activity translations"
  on public.activity_translations for select using (true);

create policy "Allow admins to manage activity translations"
  on public.activity_translations for all using (
    auth.uid() in (
      select id from public.profiles 
      where role in ('super_admin', 'admin')
    )
  );

-- Courses Policies
create policy "Allow public read access to courses"
  on public.courses for select using (true);

create policy "Allow admins and instructors to manage courses"
  on public.courses for all using (
    auth.uid() in (
      select id from public.profiles 
      where role in ('super_admin', 'admin', 'instructor')
    )
  );

create policy "Allow public read access to course translations"
  on public.course_translations for select using (true);

create policy "Allow admins and instructors to manage course translations"
  on public.course_translations for all using (
    auth.uid() in (
      select id from public.profiles 
      where role in ('super_admin', 'admin', 'instructor')
    )
  );

-- 11. Seed Admin User (armada.th2025@gmail.com)
do $$
declare
  admin_id uuid := '2aa9c54f-3b8b-47c3-a3ce-18122393d005';
begin
  -- Check if user already exists in auth.users
  if not exists (select 1 from auth.users where email = 'armada.th2025@gmail.com') then
    insert into auth.users (id, instance_id, email, encrypted_password, email_confirmed_at, created_at, updated_at, role, aud, confirmation_token)
    values (
      admin_id,
      '00000000-0000-0000-0000-000000000000',
      'armada.th2025@gmail.com',
      -- pre-encrypted hash for 'ArmadaAdmin2026!'
      '$2a$10$wR8JkS00mN8K0tL7P9Q7.eH5/Ld7xZ/kH8Gz9n7eJ6z9F7xZ9F7xZ',
      now(),
      now(),
      now(),
      'authenticated',
      'authenticated',
      ''
    );
  else
    select id into admin_id from auth.users where email = 'armada.th2025@gmail.com';
  end if;

  -- Upsert into public.profiles
  insert into public.profiles (id, email, role, first_name, last_name)
  values (admin_id, 'armada.th2025@gmail.com', 'admin'::user_role, 'Armada', 'Admin')
  on conflict (id) do update
  set role = 'admin'::user_role;
end;
$$;
