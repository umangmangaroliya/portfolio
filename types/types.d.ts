export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  repoUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}
