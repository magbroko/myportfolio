export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  tech: string[];
  summary: string;
  highlights: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "teemcollege",
    title: "Teemcollege",
    subtitle: "School Management System",
    category: "EdTech Platform",
    year: "2026",
    tech: ["TypeScript", "React", "Tailwind CSS", "Framer Motion", "Lucide"],
    summary: "A comprehensive school management platform with modules for student records, class scheduling, and administrative workflows.",
    highlights: [
      "Built a comprehensive school management platform with modules for student records, class scheduling, and administrative workflows.",
      "Implemented animated transitions and interactive UI components using Framer Motion for a polished, modern experience.",
      "Designed role-based dashboards for administrators, teachers, and students with dynamic data rendering."
    ],
    githubUrl: "https://github.com/magbroko/teemcollege",
    liveUrl: "https://teemcollege.vercel.app/",
    featured: true,
  },
  {
    id: "teemshealth",
    title: "Teemshealth",
    subtitle: "Electronic Medical Records",
    category: "HealthTech Platform",
    year: "2026",
    tech: ["TypeScript", "React", "Tailwind CSS", "Framer Motion", "Lucide"],
    summary: "A healthcare appointment booking system with real-time availability, scheduling functionality, and secure patient record management.",
    highlights: [
      "Developed a healthcare appointment booking system with real-time availability and scheduling functionality.",
      "Built intuitive booking flows with form validation, confirmation states, and smooth animated feedback using Framer Motion.",
      "Designed a healthcare data interface for patient record management and appointment scheduling.",
      "Implemented secure authentication and dynamic data filtering for medical staff.",
      "Optimized for mobile and tablet, ensuring accessibility and cross-device consistency."
    ],
    githubUrl: "https://github.com/magbroko/teemshealth",
    liveUrl: "https://teemshealth.vercel.app/",
    featured: true,
  },
  {
    id: "kabashimagery",
    title: "Kabashimagery",
    subtitle: "Photography Portfolio & Gallery",
    category: "Creative Portfolio",
    year: "2026",
    tech: ["TypeScript", "React", "Tailwind CSS", "Framer Motion", "Lucide"],
    summary: "A visually immersive photography portfolio with dynamic image galleries, lazy loading, and cinematic lightbox experiences.",
    highlights: [
      "Created a visually immersive photography portfolio with dynamic image galleries and smooth transitions.",
      "Implemented lazy loading and optimized image rendering for fast performance across devices.",
      "Designed fluid layout animations and lightbox experiences using Framer Motion."
    ],
    githubUrl: "https://github.com/magbroko/kabashimagery",
    liveUrl: "https://kabashimagery.vercel.app/",
    featured: true,
  },
  {
    id: "solarsol",
    title: "SolarSol",
    subtitle: "Solar Energy Monitoring Platform",
    category: "CleanTech Dashboard",
    year: "2026",
    tech: ["React", "JavaScript", "CSS3"],
    summary: "A responsive dashboard to monitor solar energy output and system performance in real time, with an energy load calculator.",
    highlights: [
      "Built a responsive dashboard to monitor solar energy output and system performance in real time.",
      "Implemented an energy load calculator and panel recommendation engine.",
      "Designed interactive UI to visualize battery performance and energy usage trends."
    ],
    githubUrl: "https://github.com/magbroko/solarsol",
    liveUrl: "https://solarsol.vercel.app/",
    featured: false,
  },
  {
    id: "nelshop",
    title: "Nelshop",
    subtitle: "E-Commerce Web Application",
    category: "E-Commerce",
    year: "2026",
    tech: ["React", "JavaScript", "CSS3"],
    summary: "A responsive e-commerce storefront with a full product catalog, shopping cart system, and optimized mobile performance.",
    highlights: [
      "Developed a responsive e-commerce storefront with a full product catalog and shopping cart system.",
      "Implemented state management for cart functionality and user interaction flow.",
      "Optimized UI performance for mobile and tablet devices."
    ],
    githubUrl: "https://github.com/magbroko/nel-shop",
    liveUrl: "https://nel-shop-dlkb.vercel.app/",
    featured: false,
  },
  {
    id: "thegracebaker",
    title: "The Grace Baker",
    subtitle: "Culinary Portfolio Platform",
    category: "Creative Portfolio",
    year: "2026",
    tech: ["React", "JavaScript", "CSS3"],
    summary: "A visually rich frontend interface showcasing recipes and culinary portfolio content with optimized image loading.",
    highlights: [
      "Developed a visually rich frontend interface showcasing recipes and culinary portfolio content.",
      "Optimized image loading and responsive layouts for improved mobile performance."
    ],
    githubUrl: "https://github.com/magbroko/thegracebaker",
    liveUrl: "https://thegracebakercul.vercel.app/",
    featured: false,
  },
];

export interface ContactInfo {
  name: string;
  email: string;
  github: string;
  linkedIn: string;
  phones: string[];
}

export const contactInfo: ContactInfo = {
  name: 'Marvelous Oghenetejiri Agbroko',
  email: 'Mo.agbroko@outlook.com',
  github: 'https://github.com/magbroko',
  linkedIn: 'https://www.linkedin.com/in/marvelous-agbroko-27989b278/',
  phones: ['+2347054387836', '+2348109053538'],
};
