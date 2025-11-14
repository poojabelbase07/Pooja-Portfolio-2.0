// Type definitions for the portfolio

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  description: string;
  resumeLink: string;
  email: string;
  linkedin: string;
  github: string;
  twitter?: string;
}

export interface Experience {
  id: string;
  period: string;
  title: string;
  company: string;
  description: string[];
  skills: string[];
  link?: string;
}

export interface Project {
  id: string;
  period: string;
  title: string;
  description: string;
  skills: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  link: string;
  date?: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}