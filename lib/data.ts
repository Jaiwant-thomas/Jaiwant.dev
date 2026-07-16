import {
  Code2,
  Layers,
  ShoppingBag,
  Wrench,
  Search,
  Smartphone,
  Rocket,
  Gauge,
  Wand2,
  ShieldCheck,
  MessageCircle,
  Github,
  Linkedin,
  Mail,
  LayoutTemplate,
  Globe,
  Zap,
  Settings,
  Boxes,
} from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiShopify, SiBootstrap, SiVercel, SiTypescript } from "react-icons/si";
import type {
  NavLink,
  TimelineItem,
  SkillCategory,
  Service,
  StatItem,
  ValueProp,
  SocialLink,
} from "@/types";

export const SITE = {
  name: "Jaiwant Thomas",
  role: "Frontend Developer",
  statusTagline: "Engineering premium web experiences, one pixel at a time.",
  email: "jaiwantthomas69@gmail.com",
  phone: "+91 7973535159",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  resumeUrl: "/resume.pdf",
  tagline:
    "Crafting fast, elegant, and conversion-focused web experiences with Next.js, WordPress and Shopify.",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const ROLE_TITLES = [
  "Frontend Developer",
  "Next.js Developer",
  "WordPress Developer",
  "Shopify Developer",
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "amrsoftec",
    type: "experience",
    title: "Frontend Developer",
    organization: "Amrsoftec",
    location: "Mohali, Punjab",
    period: "2024 — Present",
    points: [
      "Converted UI/UX designs into responsive, interactive websites using Next.js, WordPress, Shopify, and Tailwind CSS.",
      "Built reusable UI components and mobile-first layouts with strong cross-browser compatibility.",
      "Deployed and maintained production websites using Vercel, GitHub, and modern CI/CD workflows.",
      "Customized WordPress and Shopify themes, improving functionality and user experience.",
      "Partnered with designers to translate Figma files into pixel-accurate, production-ready UI.",
      "Integrated APIs and dynamic content to enhance site interactivity and performance.",
    ],
  },
  {
    id: "education",
    type: "education",
    title: "B.Sc. Non-Medical",
    organization: "Government College Gurdaspur",
    location: "Gurdaspur, Punjab",
    period: "2021 — 2024",
    points: [
      "Built a strong foundation in analytical thinking, mathematics, and problem-solving.",
      "Self-directed study in modern web technologies alongside formal coursework.",
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "HTML5", icon: FaHtml5, level: 95 },
      { name: "CSS3", icon: FaCss3Alt, level: 92 },
      { name: "JavaScript", icon: FaJs, level: 90 },
      { name: "TypeScript", icon: SiTypescript, level: 82 },
      { name: "React", icon: FaReact, level: 88 },
      { name: "Next.js", icon: SiNextdotjs, level: 90 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 93 },
      { name: "Bootstrap", icon: SiBootstrap, level: 85 },
    ],
  },
  {
    id: "cms",
    title: "CMS",
    icon: Layers,
    skills: [
      { name: "WordPress", icon: FaWordpress, level: 90 },
      { name: "Shopify", icon: SiShopify, level: 85 },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "GitHub", icon: FaGithub, level: 90 },
      { name: "Vercel", icon: SiVercel, level: 88 },
      { name: "Chrome DevTools", icon: Search, level: 85 },
      { name: "SEO", icon: Globe, level: 82 },
      { name: "Responsive Design", icon: Smartphone, level: 95 },
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: "frontend-dev",
    title: "Frontend Development",
    description:
      "Modern, performant interfaces built with clean, maintainable code and pixel-accurate design implementation.",
    icon: Code2,
  },
  {
    id: "nextjs-dev",
    title: "Next.js Development",
    description:
      "Production-grade Next.js applications with server components, SEO, and blazing-fast performance.",
    icon: Boxes,
  },
  {
    id: "wordpress-dev",
    title: "WordPress Development",
    description:
      "Custom WordPress themes and functionality tailored to business goals, built for speed and easy editing.",
    icon: ShoppingBag,
  },
  {
    id: "shopify-dev",
    title: "Shopify Development",
    description:
      "Conversion-focused Shopify storefronts with custom sections, theme editing, and smooth checkout flows.",
    icon: ShoppingBag,
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description:
      "High-converting landing pages engineered for clarity, speed, and measurable results.",
    icon: LayoutTemplate,
  },
  {
    id: "optimization",
    title: "Website Optimization",
    description:
      "Core Web Vitals tuning, image optimization, and code-splitting for consistently fast experiences.",
    icon: Gauge,
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description:
      "Deep performance audits and fixes across rendering, bundle size, and network waterfalls.",
    icon: Zap,
  },
  {
    id: "responsive",
    title: "Responsive Design",
    description:
      "Interfaces that feel native on every device, from ultra-wide monitors to compact mobile screens.",
    icon: Smartphone,
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    description:
      "Ongoing support, updates, and monitoring to keep sites secure, fast, and up to date.",
    icon: Settings,
  },
  {
    id: "api-integration",
    title: "API Integration",
    description:
      "Seamless integration of third-party and custom APIs for dynamic, data-driven experiences.",
    icon: Wand2,
  },
];

export const STATS: StatItem[] = [
  { id: "experience", value: 2, suffix: "+", label: "Years Experience" },
  { id: "pages", value: 50, suffix: "+", label: "Responsive Pages Built" },
  { id: "responsive", value: 100, suffix: "%", label: "Responsive Design" },
  { id: "clients", value: 20, suffix: "+", label: "Happy Clients" },
];

export const VALUE_PROPS: ValueProp[] = [
  {
    id: "fast-delivery",
    title: "Fast Delivery",
    description: "Efficient workflows that ship polished websites without missing deadlines.",
    icon: Rocket,
  },
  {
    id: "clean-code",
    title: "Clean Code",
    description: "Readable, maintainable, and well-structured code that scales with your product.",
    icon: Code2,
  },
  {
    id: "seo-friendly",
    title: "SEO Friendly",
    description: "Semantic markup and technical SEO best practices baked into every build.",
    icon: Search,
  },
  {
    id: "modern-ui",
    title: "Modern UI",
    description: "Contemporary, elegant interfaces that feel premium and on-brand.",
    icon: Wand2,
  },
  {
    id: "responsive",
    title: "Responsive",
    description: "Flawless experiences across desktop, tablet, and mobile devices.",
    icon: Smartphone,
  },
  {
    id: "performance-optimized",
    title: "Performance Optimized",
    description: "Sites tuned for speed, Core Web Vitals, and smooth interactions.",
    icon: Gauge,
  },
  {
    id: "reliable-communication",
    title: "Reliable Communication",
    description: "Clear, consistent updates from kickoff to launch and beyond.",
    icon: MessageCircle,
  },
  {
    id: "quality-assured",
    title: "Quality Assured",
    description: "Rigorous cross-browser and cross-device testing before every handoff.",
    icon: ShieldCheck,
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: SITE.github, icon: Github },
  { label: "LinkedIn", href: SITE.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${SITE.email}`, icon: Mail },
];
