import { PersonalInfo, Experience, Project, BlogPost, NavItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Your Name",
  role: "Frontend Developer", // This will have the cursor effect!
  tagline: "Building Software for Scale",
  description: "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.",
  resumeLink: "https://drive.google.com/your-resume-link",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourprofile",
  twitter: "https://twitter.com/yourhandle"
};

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' }
];

export const experiences: Experience[] = [
  {
    id: "exp1",
    period: "Jan 2024 - Present",
    title: "Senior Software Engineer",
    company: "Tech Company Inc.",
    description: [
      "Developing scalable web applications using Next.js and TypeScript",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews"
    ],
    skills: ["Next.js", "TypeScript", "React", "Node.js", "AWS"],
    link: "https://company-website.com"
  }
];

export const projects: Project[] = [
  {
    id: "proj1",
    period: "Jan 2024 - Present",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management and payment integration.",
    skills: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    githubLink: "https://github.com/yourusername/project1",
    liveLink: "https://project1-demo.com"
  },
  {
    id: "proj2",
    period: "Aug 2023 - Dec 2023",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    skills: ["TypeScript", "Next.js", "Prisma", "WebSocket"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    githubLink: "https://github.com/yourusername/project2",
    liveLink: "https://project2-demo.com"
  },
  {
    id: "proj3",
    period: "Mar 2023 - Jul 2023",
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with beautiful data visualizations and exportable reports.",
    skills: ["React", "TypeScript", "D3.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    githubLink: "https://github.com/yourusername/project3"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog1",
    title: "Building Scalable Next.js Applications",
    description: "A comprehensive guide to building performant and scalable Next.js applications with TypeScript.",
    link: "https://medium.com/@yourprofile/article-1",
    date: "Oct 15, 2024"
  },
  {
    id: "blog2",
    title: "Modern State Management in React",
    description: "Exploring different state management solutions and when to use each approach.",
    link: "https://medium.com/@yourprofile/article-2",
    date: "Sep 22, 2024"
  },
  {
    id: "blog3",
    title: "TypeScript Best Practices",
    description: "Essential TypeScript patterns that will make your code more maintainable and type-safe.",
    link: "https://medium.com/@yourprofile/article-3",
    date: "Aug 10, 2024"
  }
];