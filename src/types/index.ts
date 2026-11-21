export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  architecture: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  type: 'web' | 'mobile';
  color: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Proficient", "Familiar", "Active"
    iconName: string;
    description: string;
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  university?: string;
  location: string;
  period: string;
  status: 'In Progress' | 'Completed';
  grade: string;
  details: string[];
  icon: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerLogoText: string;
  description: string;
  skillsLearned: string[];
  link?: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  instagram?: string;
  facebook?: string;
  statusMessage: string;
}
