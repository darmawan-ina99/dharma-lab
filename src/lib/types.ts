export interface Portfolio {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDesc: string;
  content: string;
  imageUrl: string;
  client: string | null;
  year: string | null;
  technologies: string[];
  liveUrl: string | null;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  order: number;
}

export interface SiteSettings {
  id: string;
  whatsappNumber: string;
  email: string;
  phoneDisplay: string;
  address: string;
}

export type ViewType = 
  | "home" 
  | "portfolio-detail" 
  | "admin-login" 
  | "admin-dashboard";

export interface AppState {
  currentView: ViewType;
  selectedPortfolioSlug: string | null;
  isAdmin: boolean;
  selectedCategory: string;
  setView: (view: ViewType) => void;
  setSelectedPortfolio: (slug: string | null) => void;
  setIsAdmin: (isAdmin: boolean) => void;
  setCategory: (category: string) => void;
}
