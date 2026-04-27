import type { IconType } from "react-icons";

export interface MenuItem {
  id: string;
  name: string;
  url: string;
}

export interface ExperienceItem {
  tab: string;
  company: string;
  position: string;
  type: string;
  duration: string;
  description: string;
  technologies: string;
}

export interface SkillItem {
  name: string;
  icon: IconType;
}

export interface SkillSection {
  title: string;
  skills: SkillItem[];
  index: number;
}
