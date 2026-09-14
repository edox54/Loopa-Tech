// Bilingual content field — pickLang() (src/lib/i18nData.ts) selects es/en at render time.
export interface Localized<T> {
  es: T;
  en: T;
}

export interface Service {
  id: string;
  title: Localized<string>;
  shortDesc: Localized<string>;
  longDesc: Localized<string>;
  iconName: string; // Used to lookup in lucide icons
  features: Localized<string[]>;
  benefits: Localized<string[]>;
  forWho: Localized<string>;
  metrics: Localized<string[]>;
  comingSoon?: boolean;
}

export interface ProjectCase {
  id: string;
  title: Localized<string>;
  client: string;
  industry: Localized<string>;
  shortDesc: Localized<string>;
  challenge: Localized<string>;
  solution: Localized<string>;
  results: Localized<string[]>;
  metrics: { value: string; label: Localized<string> }[];
  tag: Localized<string>;
  date: string;
  coverImage?: string; // TODO: real asset pending — placeholder rendered until set
}

export interface BlogPost {
  id: string;
  title: Localized<string>;
  excerpt: Localized<string>;
  content: Localized<string>; // Markdown or simple HTML-capable text
  category: 'Data Science' | 'Inteligencia Artificial' | 'Comercial';
  readTime: Localized<string>;
  author: {
    name: string;
    role: Localized<string>;
    avatar: string;
  };
  date: string;
  tags: string[];
  coverImage?: string; // TODO: real asset pending — placeholder rendered until set
}

export interface TeamMember {
  name: string;
  role: Localized<string>;
  bio: Localized<string>;
  avatarSeed: string; // For generating stylish initial/avatar
}

export interface FAQItem {
  question: Localized<string>;
  answer: Localized<string>;
}
