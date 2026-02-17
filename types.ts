export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  icon: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Emoji
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum PageView {
  HOME = 'HOME',
  PROJECTS = 'PROJECTS',
  WRITING = 'WRITING',
  CONTACT = 'CONTACT'
}