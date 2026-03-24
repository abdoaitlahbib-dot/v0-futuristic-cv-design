// Mock data structure - easy to connect to Sanity CMS later
// Each type corresponds to a Sanity schema

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price?: string;
  category: "design" | "development" | "marketing" | "ai";
  featured: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  type: "work" | "project";
}

// Services data
export const services: Service[] = [
  {
    id: "1",
    title: "Creative Design",
    description: "Stunning visual designs that capture your brand essence and engage your audience.",
    features: ["Brand Identity", "Logo Design", "Marketing Materials", "Social Media Graphics"],
    category: "design",
    featured: true,
  },
  {
    id: "2",
    title: "Web Development",
    description: "Full-stack web solutions built with modern technologies and best practices.",
    features: ["Responsive Websites", "E-commerce", "Web Applications", "API Integration"],
    category: "development",
    featured: true,
  },
  {
    id: "3",
    title: "SEO & Growth",
    description: "Data-driven strategies to increase visibility and drive organic growth.",
    features: ["Technical SEO", "Content Strategy", "Marketplace Optimization", "Analytics"],
    category: "marketing",
    featured: true,
  },
  {
    id: "4",
    title: "AI Orchestration",
    description: "Leveraging AI tools to automate workflows and enhance productivity.",
    features: ["AI Integration", "Workflow Automation", "Prompt Engineering", "Custom Solutions"],
    category: "ai",
    featured: false,
  },
];

// Projects data
export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with modern UI",
    image: "/projects/ecommerce.jpg",
    category: "Development",
    tags: ["Next.js", "TypeScript", "Stripe"],
  },
  {
    id: "2",
    title: "Brand Identity Design",
    description: "Complete brand overhaul for luxury jewelry brand",
    image: "/projects/branding.jpg",
    category: "Design",
    tags: ["Branding", "Logo", "Print"],
  },
  {
    id: "3",
    title: "Marketing Campaign",
    description: "Multi-platform marketing strategy and execution",
    image: "/projects/marketing.jpg",
    category: "Marketing",
    tags: ["SEO", "Content", "Social"],
  },
];

// Experiences data
export const experiences: Experience[] = [
  {
    id: "1",
    company: "Energie Gravure",
    role: "Jewelry Model Engraver",
    period: "2009 - 2015",
    description: "Mastered the art of precision engraving, translating intricate designs into tangible masterpieces.",
    achievements: [
      "Led complex jewelry model projects",
      "Developed expertise in precision craftsmanship",
      "Built foundation for digital design transition",
    ],
    type: "work",
  },
  {
    id: "2",
    company: "Star Garniture",
    role: "Jewelry Garniture Specialist",
    period: "2015 - 2020",
    description: "Advanced from engraving to comprehensive garniture work, expanding creative capabilities.",
    achievements: [
      "Managed high-value client projects",
      "Introduced digital tools to traditional workflow",
      "Mentored junior artisans",
    ],
    type: "work",
  },
  {
    id: "3",
    company: "AityZin Platform",
    role: "Digital Artisan & Founder",
    period: "2020 - Present",
    description: "Bridging traditional craftsmanship with cutting-edge digital solutions.",
    achievements: [
      "Launched successful Fiverr presence",
      "Built comprehensive service platform",
      "Integrated AI into workflow automation",
    ],
    type: "project",
  },
];

// Navigation links
export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// Social links
export const socialLinks = [
  { name: "Fiverr", href: "https://fiverr.com", icon: "fiverr" },
  { name: "Etsy", href: "https://etsy.com", icon: "etsy" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { name: "GitHub", href: "https://github.com", icon: "github" },
];

// Contact form fields for n8n integration
export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
  budget?: string;
}
