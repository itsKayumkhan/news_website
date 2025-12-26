export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  category: NewsCategory;
  image: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
  readTime: number;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
}

export type NewsCategory =
  | 'All News'
  | 'Politics'
  | 'Business'
  | 'Technology'
  | 'Sports'
  | 'Entertainment'
  | 'Health';

export interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  avatar?: string;
}
