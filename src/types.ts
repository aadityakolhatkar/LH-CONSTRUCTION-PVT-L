export interface ServiceItem {
  id: string;
  title: string;
  category: 'structural' | 'interiors' | 'technical';
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  image: string;
  tag: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'structural' | 'kitchens' | 'carpentry' | 'technical';
  categoryLabel: string;
  image: string;
  aspect: 'landscape' | 'portrait' | 'square';
  description: string;
  verifiedDetails: string[];
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  projectType: string;
  timeline: string;
  message: string;
}
