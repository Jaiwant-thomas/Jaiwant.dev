import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export interface NavLink {
  label: string;
  href: string;
}

export interface RoleTitle {
  text: string;
}

export interface TimelineItem {
  id: string;
  type: "education" | "experience";
  title: string;
  organization: string;
  location: string;
  period: string;
  points: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon: IconType | LucideIcon;
  level: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon | IconType;
}
