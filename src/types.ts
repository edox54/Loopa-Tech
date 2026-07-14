export type ActivePage =
  | 'home'
  | 'servicios'
  | 'servicio-social-listening'
  | 'servicio-llm'
  | 'casos'
  | 'caso-detalle'
  | 'blog'
  | 'blog-post-detalle'
  | 'nosotros'
  | 'contacto'
  | 'datalab';

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string; // Used to lookup in lucide icons
  features: string[];
  benefits: string[];
  forWho: string;
  metrics: string[];
}

export interface ProjectCase {
  id: string;
  title: string;
  client: string;
  industry: string;
  shortDesc: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { value: string; label: string }[];
  tag: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Markdown or simple HTML-capable text
  category: 'Data Science' | 'Inteligencia Artificial' | 'Comercial';
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  tags: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatarSeed: string; // For generating stylish initial/avatar
}

export interface FAQItem {
  question: string;
  answer: string;
}
