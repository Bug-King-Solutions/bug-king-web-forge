export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  category: string;
  technologies: string[];
  client_name: string;
  completion_date: string;
  project_url?: string;
  case_study_url?: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  client_title: string;
  client_company: string;
  content: string;
  rating: number;
  image_url?: string;
  project_id?: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface DatabaseTables {
  projects: Project;
  testimonials: Testimonial;
}