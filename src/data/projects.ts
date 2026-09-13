export interface Project {
  id: string;
  category: 'software' | 'photography';
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies?: string[];
  image?: string;
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
  period?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  // Software Projects
  {
    id: "datawarehouse",
    category: "software",
    title: "DataWarehouse Depok",
    shortDescription: "Data warehousing solution with forecasting capabilities",
    fullDescription: "Data warehouse implementation for Depok city data with integrated forecasting models. Aggregates multiple data sources, performs ETL operations, and provides predictive analytics for urban planning and decision-making.",
    technologies: ["MySQL", "Data Warehousing", "Laravel"],
    image: "/images/projects/dw.jpeg",
    period: "2025",
    highlights: [
      "ETL pipeline implementation",
      "Multi-source data integration",
      "Forecasting model integration",
      "Interactive analytics dashboard"
    ]
  },
  {
    id: "healthcare-workforce",
    category: "software",
    title: "Ciptalife",
    shortDescription: "Comprehensive healthcare staff management system with scheduling and reporting",
    fullDescription: "Full-stack healthcare workforce management application built during my internship at PT. Ciptadra Softindo. Implements complex staff scheduling algorithms, real-time availability tracking, and comprehensive reporting features for healthcare facilities.",
    technologies: ["Next.js", "Golang", "MySQL", "RESTful API", "JWT"],
    image: "/images/projects/ciptalife.png",
    period: "June 2025 - October 2025",
    highlights: [
      "Built 20+ RESTful API endpoints for staff management",
      "Implemented JWT-based authentication system",
      "Developed real-time scheduling dashboard",
      "Created comprehensive reporting module"
    ]
  },
  {
    id: "posyandu-system",
    category: "software",
    title: "Posyandu Information System",
    shortDescription: "Community health service management platform",
    fullDescription: "Information system for managing Posyandu (integrated healthcare post) services in Indonesia. Tracks maternal and child health records, immunization schedules, and nutritional monitoring for community health programs.",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    image: "/images/projects/posy.jpeg",
    period: "2025",
    highlights: [
      "Patient health record management",
      "Immunization tracking system",
      "Nutritional monitoring dashboard",
      "Community health reporting"
    ]
  },
  {
    id: "asset-management",
    category: "software",
    title: "Asset Management System",
    shortDescription: "Enterprise asset tracking and management solution",
    fullDescription: "Comprehensive asset management system for tracking organizational resources. Features include asset registration, location tracking, depreciation calculations, and maintenance scheduling across multiple departments.",
    technologies: ["Next.js", "Golang", "Laravel", "MySQL"],
    image: "/images/projects/assetmaagament.png",
    period: "2025",
    highlights: [
      "Multi-department asset tracking",
      "Automated depreciation calculations",
      "QR code-based asset identification",
      "Maintenance scheduling system"
    ]
  },
  {
    id: "cms",
    category: "software",
    title: "Content Management System (CMS)",
    shortDescription: "Enterprise content management solution",
    fullDescription: "Comprehensive CMS for managing digital content across multiple platforms. Features include content versioning, role-based access control, and multi-language support.",
    technologies: ["Next.js", "Golang", "MySQL"],
    image: "/images/projects/hainick.png",
    period: "2025",
    highlights: [
      "Content versioning and history",
      "Role-based access control",
      "Multi-language support",
      "SEO optimization tools"
    ]
  },
  {
    id: "langkahmu",
    category: "software",
    title: "LangkahMu",
    shortDescription: "Social media platform for sharing moments and connecting people",
    fullDescription: "Social media application similar to Twitter and Instagram, built for connecting people and sharing life moments. Features include posts, stories, real-time feeds, likes, comments, and direct messaging.",
    technologies: ["Next.js", "Golang", "MySQL", "RESTful API", "WebSocket"],
    image: "/images/projects/langkahmuw.png",
    period: "2025",
    highlights: [
      "Real-time feed and notifications",
      "Story feature with 24-hour expiry",
      "Direct messaging system",
      "Like, comment, and share functionality",
      "User profiles and following system"
    ]
  },

  // Photography Projects
  {
    id: "portrait-series-1",
    category: "photography",
    title: "Urban Portraits",
    shortDescription: "Portrait photography capturing authentic moments",
    fullDescription: "A collection of portrait photography focusing on natural expressions and authentic moments. Shot in various urban settings with emphasis on lighting and composition.",
    image: "/images/WhatsApp Image 2025-08-19 at 18.24.59_c2c4ad8e.jpg",
    period: "2025"
  },
  {
    id: "portrait-series-2",
    category: "photography",
    title: "Natural Light Portraits",
    shortDescription: "Portrait series utilizing natural lighting",
    fullDescription: "Portrait photography series exploring natural light techniques. Captures the interplay of light and shadow to create depth and emotion in portraiture.",
    image: "/images/WhatsApp Image 2025-08-19 at 18.25.04_589ae38d.jpg",
    period: "2025"
  },
  {
    id: "portrait-series-3",
    category: "photography",
    title: "Street Portraits",
    shortDescription: "Candid street portrait photography",
    fullDescription: "Street portrait collection capturing genuine moments and expressions in urban environments. Focus on storytelling through environmental portraits.",
    image: "/images/WhatsApp Image 2025-08-19 at 18.25.04_6b4d43fc.jpg",
    period: "2025"
  },
  {
    id: "portrait-series-4",
    category: "photography",
    title: "Minimalist Portraits",
    shortDescription: "Clean, minimalist portrait compositions",
    fullDescription: "Portrait series emphasizing minimalist composition and clean backgrounds. Focuses attention on subject expression and form.",
    image: "/images/WhatsApp Image 2025-08-19 at 18.25.04_a9eef057.jpg",
    period: "2025"
  },
  {
    id: "portrait-series-5",
    category: "photography",
    title: "Environmental Portraits",
    shortDescription: "Portraits in their natural environment",
    fullDescription: "Portrait photography capturing subjects within their natural environments, telling stories through context and setting.",
    image: "/images/WhatsApp Image 2025-08-19 at 18.25.05_ba6891d3.jpg",
    period: "2025"
  },
  {
    id: "portrait-series-6",
    category: "photography",
    title: "Lifestyle Portraits",
    shortDescription: "Lifestyle and documentary-style portraits",
    fullDescription: "Lifestyle portrait series documenting everyday moments and authentic expressions. Combines documentary and portrait techniques.",
    image: "/images/WhatsApp Image 2025-08-19 at 18.25.05_cf5763b9.jpg",
    period: "2025"
  },
  {
    id: "landscape-series-1",
    category: "photography",
    title: "Natural Landscapes",
    shortDescription: "Landscape photography exploring natural beauty",
    fullDescription: "Landscape photography series capturing the beauty of natural environments. Focus on composition, light, and the grandeur of nature.",
    image: "/images/DSC_0049.jpg",
    period: "2025"
  },
  {
    id: "landscape-series-2",
    category: "photography",
    title: "Scenic Vistas",
    shortDescription: "Wide-angle landscape compositions",
    fullDescription: "Wide-angle landscape photography showcasing scenic vistas and expansive natural views. Emphasis on depth and scale.",
    image: "/images/IMG_6638.jpg",
    period: "2025"
  }
];

export const softwareProjects = projects.filter(p => p.category === 'software');
export const photographyProjects = projects.filter(p => p.category === 'photography');
