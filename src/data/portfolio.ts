export interface ProjectFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectOverlay {
  clientSector: string;
  metric: string;
  cta: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  href: string;
  github?: string;
  isHighlighted?: boolean;
  highlightLabel?: string;
  isComingSoon?: boolean;
  /** Case study data for detail page */
  image?: string;
  problem?: string;
  features?: ProjectFeature[];
  challenge?: {
    title: string;
    description: string;
  };
  /** Featured card with image + overlay (Premium Heritage aesthetic) */
  overlay?: ProjectOverlay;
  /** Use brand styling (--maroon, --ink, --r-lg, --sh-lg) */
  useBrandStyling?: boolean;
  /** Filter category for Bento grid */
  category?: 'residential' | 'commercial' | 'industrial';
}

export const projects: Project[] = [
  {
    id: 'solarsol',
    title: 'SolarSol',
    category: 'residential',
    description: 'Solar energy solutions website with clean design and informative content.',
    techStack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    href: 'https://solarsol.vercel.app/',
    problem: 'Businesses and homeowners seeking sustainable energy solutions lacked a clear, trustworthy platform to explore solar options and generate qualified leads. The market needed a digital presence that balanced environmental messaging with conversion-focused design.',
    features: [
      { title: 'Lead Generation', description: 'Contact forms and CTA optimization for capturing solar inquiry leads.', icon: 'Target' },
      { title: 'Sustainability Focus', description: 'Content strategy highlighting environmental impact and ROI.', icon: 'Leaf' },
      { title: 'Service Showcase', description: 'Clear presentation of solar installation and consultation services.', icon: 'Sun' },
      { title: 'Responsive Design', description: 'Mobile-first layout for on-the-go research and inquiries.', icon: 'Smartphone' },
    ],
    challenge: {
      title: 'Responsive Data Tables & Form Validation',
      description: 'Implementing complex lead capture forms with real-time validation and ensuring data tables displaying solar specifications remained readable across all breakpoints. Solved with Bootstrap grid overrides and custom JavaScript validation logic that provided immediate feedback without page reloads.',
    },
  },
  {
    id: 'thegracebaker',
    title: 'TheGraceBaker',
    category: 'commercial',
    description: 'Baking and culinary website showcasing confectionery services and gallery.',
    techStack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    href: 'https://thegracebakercul.vercel.app/',
    problem: 'A local bakery needed to elevate its online presence to match the premium quality of its products. The business gap was a lack of visual menu presentation and cohesive branding that could attract event planners and walk-in customers alike.',
    features: [
      { title: 'Visual Menu', description: 'High-quality imagery showcasing cakes, pastries, and platters.', icon: 'Image' },
      { title: 'Brand Identity', description: 'Consistent typography, color palette, and tone across all pages.', icon: 'Palette' },
      { title: 'Order Flow', description: 'Streamlined path from browsing to order placement.', icon: 'ShoppingCart' },
      { title: 'Gallery Showcase', description: 'Organized gallery for events and custom orders.', icon: 'LayoutGrid' },
    ],
    challenge: {
      title: 'Image Optimization & Gallery Performance',
      description: 'Balancing high-resolution food photography with fast load times. Implemented lazy loading, responsive image srcset, and a lightweight lightbox using vanilla JavaScript to maintain visual quality while keeping the site performant on mobile networks.',
    },
  },
  {
    id: 'nelshop',
    title: 'NelShop',
    description: 'Highly functional multi-vendor e-commerce platform built for the Asaba, Nigeria market. Features a triple-tier dashboard system for Customers, Brand Owners (Vendors), and Super Admin.',
    techStack: ['HTML5', 'JavaScript (ES6+)', 'Tailwind CSS'],
    href: 'https://nelshop.vercel.app/',
    isHighlighted: true,
    highlightLabel: '3-Tier Dashboard Architecture',
    useBrandStyling: true,
    category: 'commercial',
    overlay: {
      clientSector: 'NelShop — Multi-Vendor E-Commerce (Asaba)',
      metric: '3-Tier Dashboard Architecture',
      cta: 'Explore Functional Demo',
    },
    image: '/nelshop-mockup.jpg',
    problem: 'Local businesses in Asaba needed a unified e-commerce platform that could serve multiple stakeholders—customers browsing products, vendors managing inventory, and administrators overseeing the entire marketplace. The solution required role-based access control, localized delivery logic, and a responsive experience across devices.',
    features: [
      { title: 'Super Admin Dashboard', description: 'Full oversight of vendors, orders, and platform analytics. User management, approval workflows, and system-wide configuration.', icon: 'LayoutDashboard' },
      { title: 'Vendor Portal', description: 'Brand owners manage products, inventory, and orders. Independent dashboards with multi-vendor filtering and localized fulfillment.', icon: 'Store' },
      { title: 'Customer Experience', description: 'Responsive storefront with Asaba-specific delivery options, product discovery, and seamless checkout flow.', icon: 'ShoppingBag' },
      { title: 'Localized Delivery', description: 'Delivery logic and filtering optimized for the Asaba region, serving local market needs.', icon: 'MapPin' },
    ],
    challenge: {
      title: 'Role-Based State Management & Multi-Portal Architecture',
      description: 'Implementing three fully functional, independent dashboards (Customer, Vendor, Super Admin) with vanilla JavaScript required careful state isolation and permission-based UI rendering. Solved with a modular architecture using closure-based role context, localStorage for session persistence, and DOM-based view switching. The Asaba-specific delivery logic was built with configurable zones and vendor-to-region mapping, enabling scalable localization without framework overhead.',
    },
  },
  {
    id: 'medicare',
    title: 'MediCare',
    category: 'residential',
    description: 'Hospital website with Electronic Medical Records for storing and managing patient data.',
    techStack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    href: 'https://medicaredr.vercel.app/',
    isHighlighted: true,
    highlightLabel: 'Complex EMR System',
    problem: 'Healthcare facilities required a secure, accessible system for electronic medical records. The user need centered on data security, patient record management, and staff workflows that reduced administrative burden while maintaining compliance.',
    features: [
      { title: 'Patient Records', description: 'Secure storage and retrieval of patient medical history.', icon: 'FileText' },
      { title: 'Data Security', description: 'Access controls and encryption for sensitive health data.', icon: 'Shield' },
      { title: 'Appointments', description: 'Scheduling and management of patient appointments.', icon: 'Calendar' },
      { title: 'Staff Workflows', description: 'Streamlined interfaces for doctors and administrative staff.', icon: 'Users' },
    ],
    challenge: {
      title: 'Complex State Management & Data Tables',
      description: 'Managing nested patient data, appointment states, and searchable/filterable data tables without a framework. Solved with a modular JavaScript architecture using closure-based state containers and DOM diffing for efficient updates. Implemented debounced search and pagination for large record sets.',
    },
  },
  {
    id: 'kabashimagery',
    title: 'KabashImagery',
    category: 'commercial',
    description: 'Photography portfolio showcasing visual artistry and creative work.',
    techStack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    href: '#',
    isComingSoon: true,
    problem: 'A photography business needed a portfolio that could showcase work at full visual fidelity while remaining fast and engaging. The focus was on high-performance image loading and masonry layouts that adapt to varying image aspect ratios.',
    features: [
      { title: 'Masonry Layout', description: 'Pinterest-style grid that adapts to image dimensions.', icon: 'LayoutGrid' },
      { title: 'Image Loading', description: 'Progressive loading and blur-up placeholders for performance.', icon: 'Image' },
      { title: 'Category Filter', description: 'Filter galleries by shoot type, event, or style.', icon: 'Filter' },
      { title: 'Lightbox', description: 'Full-screen viewing with smooth transitions.', icon: 'Maximize2' },
    ],
    challenge: {
      title: 'High-Performance Image Loading & Masonry',
      description: 'Implementing a performant masonry layout with lazy-loaded images that didn\'t cause layout thrashing. Used Intersection Observer for viewport-based loading, CSS columns for a lightweight masonry fallback, and requestIdleCallback for non-blocking image decoding to keep the UI responsive during heavy loads.',
    },
  },
];

export interface TechItem {
  name: string;
  icon: string;
}

export const techStackItems: TechItem[] = [
  { name: 'React', icon: 'react' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'Git', icon: 'git' },
  { name: 'APIs', icon: 'api' },
];

export interface ContactInfo {
  name: string;
  email: string;
  github: string; // Full URL
  linkedIn: string; // Full URL
  phones: string[];
  profileImage?: string; // Path to profile photo, e.g. /profile.jpg
}

export const contactInfo: ContactInfo = {
  name: 'Marvelous Oghenetejiri Agbroko',
  email: 'Mo.agbroko@outlook.com',
  github: 'https://github.com/magbroko',
  linkedIn: 'https://www.linkedin.com/in/marvelous-agbroko-27989b278/',
  phones: ['+2347054387836', '+2348109053538'],
  profileImage: '/profile.png',
};
