export interface Post {
  imgSrc?: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  authorAvatar: string;
  date: string;
  featured?: boolean;
}

export interface Course {
  imgSrc: string;
  title: string;
  description: string;
  price: number;
  category: string;
}

export interface Resource {
  type: 'Template' | 'Ebook';
  title: string;
  description?: string;
  category: string;
  imgSrc: string;
  author?: string;
}

export interface Podcast {
  imgSrc: string;
  title: string;
  author: string;
  duration: string;
  category?: string;
}