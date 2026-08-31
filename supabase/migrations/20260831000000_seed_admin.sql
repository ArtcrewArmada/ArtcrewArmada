-- Seed Admin User (armada.th2025@gmail.com)
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
