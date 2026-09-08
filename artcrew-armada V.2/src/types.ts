export type Language = 'TH' | 'EN' | 'FR';

export type SectionId = 
  | 'home'
  | 'about'
  | 'creation'
  | 'upcycling'
  | 'primitive'
  | 'shop'
  | 'learning'
  | 'journal'
  | 'awareness'
  | 'contact';

export interface NavItemConfig {
  id: SectionId;
  labelKey: string;
  icon: string;
}

export interface ProductItem {
  id: string;
  title: Record<Language, string>;
  category: string;
  price: {
    USD: number;
    THB: number;
    EUR: number;
  };
  image: string;
  materials: Record<Language, string>;
  description: Record<Language, string>;
  artisanNote?: Record<Language, string>;
  dimensions?: string;
  year?: string;
}

export interface CategoryCard {
  id: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  image: string;
  actionText: Record<Language, string>;
  categoryFilter: string;
  isWide?: boolean;
}

export interface WorkshopItem {
  id: string;
  title: Record<Language, string>;
  instructor: Record<Language, string>;
  date: string;
  time: string;
  duration: string;
  level: Record<Language, string>;
  price: {
    USD: number;
    THB: number;
    EUR: number;
  };
  spotsLeft: number;
  image: string;
  description: Record<Language, string>;
  includes: Record<Language, string[]>;
}

export interface JournalPost {
  id: string;
  title: Record<Language, string>;
  category: Record<Language, string>;
  date: string;
  readTime: Record<Language, string>;
  excerpt: Record<Language, string>;
  content: Record<Language, string[]>;
  image: string;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
}
