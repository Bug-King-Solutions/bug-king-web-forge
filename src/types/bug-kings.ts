export interface BugKing {
  id: string;
  name: string;
  title: string;
  image_url?: string;
  skills: string[];
  description: string;
  bio?: string;
  achievements?: string[];
  projects?: string[];
  featured: boolean;
  created_at: string;
  updated_at: string;
}