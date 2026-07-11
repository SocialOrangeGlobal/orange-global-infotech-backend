import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // ─── Admin ───────────────────────────────────────────────────────────────
  const pinHash = await bcrypt.hash('1234', 10);

  const admin = await prisma.admin.upsert({
    where: { id: 'super-admin-seed-id' },
    update: { pinHash },
    create: {
      id: 'super-admin-seed-id',
      name: 'Super Admin',
      pinHash,
      role: 'SUPER_ADMIN',
    },
  });
  console.log('✅ Admin seeded:', admin.name);

  // ─── Services (from data.ts) ──────────────────────────────────────────────
  const services = [
    {
      "title": "Pixel-Perfect Web Development",
      "slug": "web-development",
      "shortDescription": "In today's digital-first world, your website is your most powerful asset. We engineer high-performance, scalable, and visually stunning web applications that convert visitors into loyal customers. We dive deep into your business logic to create custom experiences that align perfectly with your strategic goals.",
      "description": "In today's digital-first world, your website is your most powerful asset. We engineer high-performance, scalable, and visually stunning web applications that convert visitors into loyal customers. We dive deep into your business logic to create custom experiences that align perfectly with your strategic goals.",
      "icon": "Globe",
      "features": [
        "Corporate Websites",
        "Business Websites",
        "Landing Pages",
        "E-Commerce Websites",
        "Web Portals",
        "Custom Web Applications",
        "Progressive Web Apps"
      ],
      "image": null,
      "order": 1,
      "metadata": {
        "techStack": [
          {
            "name": "React.js",
            "icon": "SiReact",
            "color": "#61DAFB"
          },
          {
            "name": "Next.js",
            "icon": "SiNextdotjs",
            "color": "#000000"
          },
          {
            "name": "Node.js",
            "icon": "SiNodedotjs",
            "color": "#339933"
          },
          {
            "name": "Tailwind CSS",
            "icon": "SiTailwindcss",
            "color": "#06B6D4"
          },
          {
            "name": "PostgreSQL",
            "icon": "SiPostgresql",
            "color": "#4169E1"
          },
          {
            "name": "GraphQL",
            "icon": "SiGraphql",
            "color": "#E10098"
          },
          {
            "name": "Vercel",
            "icon": "SiVercel",
            "color": "#000000"
          }
        ],
        "subServices": [
          {
            "title": "Corporate Websites",
            "features": [
              "Premium UI/UX Design",
              "SEO Optimization",
              "CMS Integration"
            ]
          },
          {
            "title": "E-Commerce Solutions",
            "features": [
              "Secure Payment Gateways",
              "Inventory Management",
              "Conversion Optimization"
            ]
          },
          {
            "title": "Custom Web Apps",
            "features": [
              "Scalable Architecture",
              "API Integrations",
              "Real-time Processing"
            ]
          },
          {
            "title": "Web Portals",
            "features": [
              "Role-based Access Control",
              "Secure Authentication",
              "Dashboard Analytics"
            ]
          },
          {
            "title": "UI/UX Design",
            "features": [
              "Wireframing",
              "User Research",
              "Interactive Prototypes"
            ]
          },
          {
            "title": "SEO & Performance",
            "features": [
              "Core Web Vitals",
              "On-page SEO",
              "Lightning Fast Load"
            ]
          }
        ],
        "accentColor": "#f97316",
        "textColor": "text-orange-500",
        "lightBg": "bg-orange-500/10",
        "href": "/contact",
        "buttonText": "Start Web Project",
        "badge": "Web Development",
      }
    },
    {
      "title": "Scalable Software Solutions",
      "slug": "software-development",
      "shortDescription": "Off-the-shelf software often falls short of meeting unique business challenges. We build bespoke software solutions from the ground up, tailored exactly to your operational needs. Our enterprise-grade software is designed for high availability, security, and effortless scaling as your company grows.",
      "description": "Off-the-shelf software often falls short of meeting unique business challenges. We build bespoke software solutions from the ground up, tailored exactly to your operational needs. Our enterprise-grade software is designed for high availability, security, and effortless scaling as your company grows.",
      "icon": "Code2",
      "features": [
        "ERP Solutions",
        "Business Management Systems",
        "SaaS Platforms",
        "Workflow Automation Tools",
        "Legacy Modernization"
      ],
      "image": null,
      "order": 2,
      "metadata": {
        "techStack": [
          {
            "name": "Python",
            "icon": "SiPython",
            "color": "#3776AB"
          },
          {
            "name": "Java",
            "icon": "FaJava",
            "color": "#007396"
          },
          {
            "name": ".NET",
            "icon": "SiDotnet",
            "color": "#512BD4"
          },
          {
            "name": "Docker",
            "icon": "SiDocker",
            "color": "#2496ED"
          },
          {
            "name": "MongoDB",
            "icon": "SiMongodb",
            "color": "#47A248"
          },
          {
            "name": "Redis",
            "icon": "SiRedis",
            "color": "#DC382D"
          },
          {
            "name": "Elasticsearch",
            "icon": "SiElasticsearch",
            "color": "#005571"
          }
        ],
        "subServices": [
          {
            "title": "SaaS Platforms",
            "features": [
              "Multi-tenant Architecture",
              "Subscription Management",
              "High Availability"
            ]
          },
          {
            "title": "ERP Solutions",
            "features": [
              "Centralized Data Hub",
              "Process Automation",
              "Custom Reporting"
            ]
          },
          {
            "title": "Workflow Automation",
            "features": [
              "Task Scheduling",
              "Third-party Integrations",
              "Efficiency Tracking"
            ]
          },
          {
            "title": "Business Management",
            "features": [
              "CRM Integration",
              "Inventory Tracking",
              "Analytics Dashboards"
            ]
          },
          {
            "title": "API Development",
            "features": [
              "RESTful & GraphQL",
              "Rate Limiting",
              "Secure Endpoints"
            ]
          },
          {
            "title": "Legacy Modernization",
            "features": [
              "Code Refactoring",
              "Cloud Migration",
              "Performance Boost"
            ]
          }
        ],
        "accentColor": "#a855f7",
        "textColor": "text-purple-500",
        "lightBg": "bg-purple-500/10",
        "href": "/contact",
        "buttonText": "Build Software",
        "badge": "Software Development",
      }
    },
    {
      "title": "Powerful Mobile Applications",
      "slug": "mobile-app-development",
      "shortDescription": "Reach your users wherever they are. We build intuitive, fast, and feature-rich applications for both iOS and Android — native or cross-platform — that drive engagement and retention. Our apps follow strict design guidelines and utilize device hardware to the fullest.",
      "description": "Reach your users wherever they are. We build intuitive, fast, and feature-rich applications for both iOS and Android — native or cross-platform — that drive engagement and retention. Our apps follow strict design guidelines and utilize device hardware to the fullest.",
      "icon": "Smartphone",
      "features": [
        "Android Applications",
        "Cross-Platform Apps",
        "Progressive Web Apps (PWA)",
        "Enterprise Mobile Solutions",
        "Wearable Tech Apps"
      ],
      "image": null,
      "order": 3,
      "metadata": {
        "techStack": [
          {
            "name": "React Native",
            "icon": "SiReact",
            "color": "#61DAFB"
          },
          {
            "name": "Flutter",
            "icon": "SiFlutter",
            "color": "#02569B"
          },
          {
            "name": "Swift",
            "icon": "SiSwift",
            "color": "#F05138"
          },
          {
            "name": "Kotlin",
            "icon": "SiKotlin",
            "color": "#7F52FF"
          },
          {
            "name": "Firebase",
            "icon": "SiFirebase",
            "color": "#FFCA28"
          },
          {
            "name": "SQLite",
            "icon": "SiSqlite",
            "color": "#003B57"
          }
        ],
        "subServices": [
          {
            "title": "Cross-Platform Apps",
            "features": [
              "Single Codebase",
              "Native-like Performance",
              "Faster Time-to-Market"
            ]
          },
          {
            "title": "Native Android & iOS",
            "features": [
              "Hardware Integration",
              "Maximum Performance",
              "App Store Optimization"
            ]
          },
          {
            "title": "Progressive Web Apps",
            "features": [
              "Offline Capabilities",
              "Push Notifications",
              "Zero Installation"
            ]
          },
          {
            "title": "Enterprise Mobility",
            "features": [
              "Enterprise Security",
              "MDM Integration",
              "Offline Syncing"
            ]
          },
          {
            "title": "UI/UX for Mobile",
            "features": [
              "Touch-friendly Design",
              "Fluid Animations",
              "Dark Mode Support"
            ]
          },
          {
            "title": "App Maintenance",
            "features": [
              "OS Updates",
              "Bug Fixing",
              "Feature Additions"
            ]
          }
        ],
        "accentColor": "#06b6d4",
        "textColor": "text-cyan-500",
        "lightBg": "bg-cyan-500/10",
        "href": "/contact",
        "buttonText": "Build Mobile App",
        "badge": "Mobile App Development",
      }
    },
    {
      "title": "Cloud-Powered Infrastructure",
      "slug": "cloud-devops",
      "shortDescription": "Future-proof your business with a secure, scalable, and highly available cloud infrastructure. We handle everything from architecture planning and migration to 24/7 server management. We ensure you meet compliance standards while reducing operational costs.",
      "description": "Future-proof your business with a secure, scalable, and highly available cloud infrastructure. We handle everything from architecture planning and migration to 24/7 server management. We ensure you meet compliance standards while reducing operational costs.",
      "icon": "Cloud",
      "features": [
        "Cloud Migration",
        "Cloud Hosting",
        "AWS Solutions",
        "DevOps Services",
        "Server Management",
        "Disaster Recovery"
      ],
      "image": null,
      "order": 4,
      "metadata": {
        "techStack": [
          {
            "name": "AWS",
            "icon": "FaAws",
            "color": "#FF9900"
          },
          {
            "name": "Kubernetes",
            "icon": "SiKubernetes",
            "color": "#326CE5"
          },
          {
            "name": "Terraform",
            "icon": "SiTerraform",
            "color": "#844FBA"
          },
          {
            "name": "CI/CD",
            "icon": "SiGithubactions",
            "color": "#2088FF"
          },
          {
            "name": "Linux",
            "icon": "SiLinux",
            "color": "#FCC624"
          },
          {
            "name": "Azure",
            "icon": "FaMicrosoft",
            "color": "#00A4EF"
          },
          {
            "name": "GCP",
            "icon": "SiGooglecloud",
            "color": "#4285F4"
          }
        ],
        "subServices": [
          {
            "title": "Cloud Migration",
            "features": [
              "Zero-Downtime Migration",
              "Data Integrity Checks",
              "Architecture Review"
            ]
          },
          {
            "title": "DevOps & CI/CD",
            "features": [
              "Automated Deployments",
              "Infrastructure as Code",
              "Continuous Integration"
            ]
          },
          {
            "title": "AWS & Azure Solutions",
            "features": [
              "Auto-scaling Architecture",
              "Cost Optimization",
              "High Availability"
            ]
          },
          {
            "title": "24/7 Server Management",
            "features": [
              "Proactive Monitoring",
              "Security Patching",
              "Performance Tuning"
            ]
          },
          {
            "title": "Security & Compliance",
            "features": [
              "DDoS Protection",
              "Data Encryption",
              "Access Management"
            ]
          },
          {
            "title": "Disaster Recovery",
            "features": [
              "Automated Backups",
              "Failover Systems",
              "Rapid Restoration"
            ]
          }
        ],
        "accentColor": "#10b981",
        "textColor": "text-emerald-500",
        "lightBg": "bg-emerald-500/10",
        "href": "/contact",
        "buttonText": "Scale with Cloud",
        "badge": "Cloud Solutions",
      }
    }
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    });
  }
  console.log(`✅ ${services.length} Services seeded`);

  // ─── Projects (real portfolio from data.ts) ───────────────────────────────
  const projects = [
    {
      title: 'Job Ready Experts Platform',
      slug: 'jobreadyexperts',
      description:
        'A comprehensive educational and career advancement platform. It provides learners with industry-aligned courses, real-time mentorship, and automated resume building tools to accelerate their tech careers.',
      image: '/portfolio/jobreadyexperts/jobreadyexperts-web.png',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      projectUrl: 'https://www.jobreadyexperts.com/',
      isFeatured: true,
      metadata: {
        badge: "EdTech Platform",
        badgeIcon: "Globe",
        accentColor: "#f97316",
        textColor: "text-orange-500",
        lightBg: "bg-orange-500/10",
        techStack: [
          { name: 'React.js', icon: 'SiReact', color: '#61DAFB' },
          { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
          { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
          { name: 'Express.js', icon: 'SiExpress', color: '#000000' }
        ],
        images: {
          desktop: "/portfolio/jobreadyexperts/jobreadyexperts-web.png",
          tablet: "/portfolio/jobreadyexperts/jobreadyexperts-tablet.png",
          mobile: "/portfolio/jobreadyexperts/jobreadyexperts-mobile.png",
        }
      }
    },
    {
      title: 'NRI Web Portal',
      slug: 'nri',
      description:
        'A modern, highly optimized corporate web portal for NRI. Featuring a bespoke glassmorphism UI, advanced scroll animations, and a secure content management system for their global client base.',
      image: '/portfolio/nri/nri-web.png',
      technologies: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'AWS'],
      projectUrl: 'https://nri-construction.vercel.app/',
      isFeatured: true,
      metadata: {
        badge: "Corporate Website",
        badgeIcon: "LayoutTemplate",
        accentColor: "#a855f7",
        textColor: "text-purple-500",
        lightBg: "bg-purple-500/10",
        techStack: [
          { name: 'Next.js', icon: 'SiNextdotjs', color: '#000000' },
          { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06B6D4' },
          { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#4169E1' },
          { name: 'AWS', icon: 'FaAws', color: '#FF9900' }
        ],
        images: {
          desktop: "/portfolio/nri/nri-web.png",
          tablet: "/portfolio/nri/nri-tablet.png",
          mobile: "/portfolio/nri/nri-mobile.png",
        }
      }
    },
    {
      title: 'SGSS Enterprise System',
      slug: 'sgss',
      description:
        'A robust enterprise resource planning (ERP) system tailored for SGSS. It centralizes their operations, manages secure client data, and provides real-time analytics through interactive dashboards.',
      image: '/portfolio/sgss/sgss-web.png',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Docker'],
      projectUrl: 'https://sgss-ten.vercel.app/',
      isFeatured: true,
      metadata: {
        badge: "Software Development",
        badgeIcon: "Cpu",
        accentColor: "#06b6d4",
        textColor: "text-cyan-500",
        lightBg: "bg-cyan-500/10",
        techStack: [
          { name: 'Python', icon: 'SiPython', color: '#3776AB' },
          { name: 'Django', icon: 'SiDjango', color: '#092E20' },
          { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#4169E1' },
          { name: 'Docker', icon: 'SiDocker', color: '#2496ED' }
        ],
        images: {
          desktop: "/portfolio/sgss/sgss-web.png",
          tablet: "/portfolio/sgss/sgss-tablet.png",
          mobile: "/portfolio/sgss/sgss-mobile.png",
        }
      }
    },
    {
      title: 'ANL Digital Presence',
      slug: 'anl',
      description:
        'A digital transformation project for ANL, migrating their legacy systems to a blazing-fast, server-side rendered application. It significantly improved their SEO rankings and user engagement.',
      image: '/portfolio/anl/anl-web.png',
      technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Vercel'],
      projectUrl: 'https://anl-ashy.vercel.app/',
      isFeatured: true,
      metadata: {
        badge: "Web Development",
        badgeIcon: "Globe",
        accentColor: "#10b981",
        textColor: "text-emerald-500",
        lightBg: "bg-emerald-500/10",
        techStack: [
          { name: 'Next.js', icon: 'SiNextdotjs', color: '#000000' },
          { name: 'React.js', icon: 'SiReact', color: '#61DAFB' },
          { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06B6D4' },
          { name: 'Vercel', icon: 'SiVercel', color: '#000000' }
        ],
        images: {
          desktop: "/portfolio/anl/anl-web.png",
          tablet: "/portfolio/anl/anl-tablet.png",
          mobile: "/portfolio/anl/anl-mobile.png",
        }
      }
    },
    {
      title: 'Macquarie Engineering & Construction',
      slug: 'macquarie',
      description:
        'A highly robust corporate web platform built for Macquarie Engineering & Construction to showcase their massive global infrastructure portfolio. It features advanced project filtering, interactive maps, and a headless CMS for real-time updates.',
      image: '/portfolio/macquarie/macquarie-web.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS'],
      projectUrl: 'https://www.macquarieec.com/',
      isFeatured: true,
      metadata: {
        badge: "Corporate Portal",
        badgeIcon: "Globe",
        accentColor: "#3b82f6",
        textColor: "text-blue-500",
        lightBg: "bg-blue-500/10",
        techStack: [
          { name: 'Next.js', icon: 'SiNextdotjs', color: '#000000' },
          { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
          { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06B6D4' },
          { name: 'Sanity CMS', icon: 'SiSanity', color: '#F03E2F' }
        ],
        images: {
          desktop: "/portfolio/macquarie/macquarie-web.png",
          tablet: "/portfolio/macquarie/macquarie-tablet.png",
          mobile: "/portfolio/macquarie/macquarie-mobile.png",
        }
      }
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    });
  }
  console.log(`✅ ${projects.length} Projects seeded`);

  // ─── Careers ──────────────────────────────────────────────────────────────
  const careers = [
    {
      title: 'Full Stack Developer',
      location: 'Chandigarh, India',
      type: 'Full-Time',
      description:
        'We are looking for a passionate Full Stack Developer to join our growing team. You will be responsible for designing and implementing robust web applications from front-end to back-end.',
      requirements: [
        '3+ years experience with React.js or Next.js',
        'Proficiency in Node.js / NestJS',
        'Experience with SQL/NoSQL databases',
        'Familiarity with Docker and CI/CD pipelines',
        'Strong problem-solving skills',
      ],
    },
    {
      title: 'UI/UX Designer',
      location: 'Remote',
      type: 'Full-Time',
      description:
        'Join our design team and craft exceptional user experiences. You will collaborate closely with developers and product managers to transform ideas into beautiful, functional designs.',
      requirements: [
        '2+ years UI/UX design experience',
        'Proficiency in Figma',
        'Strong portfolio of digital products',
        'Understanding of design systems',
        'Excellent communication skills',
      ],
    },
    {
      title: 'React Native Developer',
      location: 'Chandigarh, India',
      type: 'Full-Time',
      description:
        'We need an experienced React Native Developer to build and maintain cross-platform mobile applications. You will work in an agile environment delivering high-quality mobile solutions.',
      requirements: [
        '2+ years React Native experience',
        'Published apps on App Store / Play Store',
        'Knowledge of native modules',
        'REST API integration experience',
        'Familiarity with Redux or Zustand',
      ],
    },
    {
      title: 'Digital Marketing Executive',
      location: 'Chandigarh, India',
      type: 'Full-Time',
      description:
        'We are seeking a data-driven Digital Marketing Executive to manage and grow our online presence across multiple channels and drive qualified traffic and leads.',
      requirements: [
        '1-3 years digital marketing experience',
        'Google Ads & Meta Ads proficiency',
        'SEO / SEM expertise',
        'Google Analytics knowledge',
        'Excellent content writing skills',
      ],
    },
  ];

  for (const career of careers) {
    const existing = await prisma.career.findFirst({ where: { title: career.title } });
    if (!existing) {
      await prisma.career.create({ data: career });
    }
  }
  console.log(`✅ ${careers.length} Careers seeded`);

  // ─── Settings (real contact info from data.ts) ────────────────────────────
  const settings = [
    { key: 'site_name', value: 'Orange Global Infotech' },
    { key: 'site_email', value: 'info@orangeglobal.com' },
    { key: 'site_phone', value: '+91 9592290407' },
    {
      key: 'site_address',
      value: 'SCO 3, Level 1, Sector 41-D, Chandigarh, India – 160036',
    },
    { key: 'site_working_hours', value: 'Mon–Sat, 10 AM–6 PM IST' },
    {
      key: 'site_stats',
      value: {
        countries: '100+',
        yearsInBusiness: '8',
        installations: '35000+',
        technologiesSupported: '20+',
      },
    },
    {
      key: 'social_links',
      value: {
        linkedin: 'https://linkedin.com/company/orange-global-infotech',
        twitter: 'https://twitter.com/orangeglobalit',
        facebook: 'https://facebook.com/orangeglobalinfotech',
        instagram: 'https://instagram.com/orangeglobalinfotech',
      },
    },
    {
      key: 'contact_services',
      value: [
        'Web Development',
        'Software Development',
        'Mobile App Development',
        'Cloud Solutions',
        'SaaS Development',
        'Enterprise Solutions',
        'Other',
      ],
    },
    {
      key: 'contact_budgets',
      value: ['Under $5,000', '$5,000 – $15,000', '$15,000 – $50,000', '$50,000+'],
    },
  ];

  for (const setting of settings) {
    await prisma.setting.upsert({
      where: { key: setting.key },
      update: { value: setting.value as any },
      create: setting as any,
    });
  }
  console.log(`✅ ${settings.length} Settings seeded`);

  // ─── Website Content (hero, about, contact, faqs, testimonials) ───────────
  const websiteContents = [
    {
      sectionKey: 'hero',
      title: 'Transforming ideas into scalable digital solutions',
      subtitle: null,
      description:
        'Web development, scalable software solutions, and AI-powered systems',
      content: {
        ctaPrimary: 'Start New Project',
        ctaSecondary: 'Explore Services',
        builtForText: 'Built for:',
        rotatingWords: ['Innovative Businesses', 'Startups & Enterprises', 'Web & Mobile Platforms', 'AI-Driven Systems', 'Scalable Ecosystems'],
        trustedByText: 'Trusted by 3,000+ professionals worldwide'
      },
    },
    {
      sectionKey: 'about',
      title: 'About Orange Global Infotech',
      subtitle: 'Who We Are',
      description:
        'Orange Global Infotech is a full-service digital agency specialising in web development, mobile applications, UI/UX design, and digital marketing. Founded with a vision to bridge the gap between businesses and technology, we deliver tailored solutions that drive real results.',
      content: {
        stats: {
          countries: '100+',
          yearsInBusiness: '8',
          installations: '35000+',
          technologiesSupported: '20+',
        },
      },
    },
    {
      sectionKey: 'contact',
      title: 'Get In Touch',
      subtitle: 'Contact Us',
      description:
        "Have a project in mind or just want to say hello? We'd love to hear from you. Reach out and our team will get back to you within 24 hours.",
      content: {
        email: 'info@orangeglobal.com',
        emailNote: 'We reply within 2 hours',
        phone: '+91 9592290407',
        phoneNote: 'Mon–Sat, 10 AM–6 PM IST',
        address: 'Chandigarh, India',
        addressFull: 'SCO 3, Level 1, Sector 41-D, 160036',
        workingHours: 'Mon–Sat, 10 AM–6 PM',
        workingHoursNote: '24/7 Support Available',
        contactInfo: [
          {
            icon: 'Mail',
            label: 'Email Us',
            value: 'info@orangeglobal.com',
            sub: 'We reply within 2 hours',
            color: '#f97316',
            bg: 'bg-orange-50',
          },
          {
            icon: 'Phone',
            label: 'Call Us',
            value: '+91 9592290407',
            sub: 'Mon–Sat, 10 AM–6 PM IST',
            color: '#06b6d4',
            bg: 'bg-cyan-50',
          },
          {
            icon: 'MapPin',
            label: 'Visit Us',
            value: 'Chandigarh, India',
            sub: 'SCO 3, Level 1, Sector 41-D, 160036',
            color: '#10b981',
            bg: 'bg-emerald-50',
          },
          {
            icon: 'Clock',
            label: 'Working Hours',
            value: 'Mon–Sat, 10 AM–6 PM',
            sub: '24/7 Support Available',
            color: '#a855f7',
            bg: 'bg-purple-50',
          },
        ],
        contactServices: [
          'Web Development',
          'Software Development',
          'Mobile App Development',
          'Cloud Solutions',
          'SaaS Development',
          'Enterprise Solutions',
          'Other',
        ],
        budgets: [
          'Under $5,000',
          '$5,000 – $15,000',
          '$15,000 – $50,000',
          '$50,000+',
        ]
      },
    },
    {
      sectionKey: 'faqs',
      title: 'Frequently Asked Questions',
      subtitle: 'Got Questions?',
      description: 'Find answers to the most common questions about our services, process, and engagement models.',
      content: {
        items: [
          {
            q: 'How long does it take to build a website or application?',
            a: "Project timelines vary based on complexity. A simple business website typically takes 2–4 weeks, while a complex web application or mobile app can take 2–6 months. During our discovery phase, we provide a detailed timeline tailored to your specific requirements.",
          },
          {
            q: 'What technologies do you use for development?',
            a: "We use modern, battle-tested technologies including React, Next.js, TypeScript, Node.js, NestJS, React Native, Flutter, AWS, Azure, GCP, PostgreSQL, MongoDB, and Docker. We choose the right stack based on your project's unique needs and scalability requirements.",
          },
          {
            q: 'Do you provide post-launch support and maintenance?',
            a: 'Yes, absolutely. We offer comprehensive post-launch support packages including 24/7 monitoring, bug fixes, security updates, performance optimizations, and feature enhancements. We become your long-term technology partner.',
          },
          {
            q: 'How do you ensure the quality of your deliverables?',
            a: 'Quality is embedded in every stage of our process. We conduct code reviews, automated testing, manual QA, performance audits, security assessments, and cross-browser/device compatibility checks before any release.',
          },
          {
            q: 'What is your pricing model?',
            a: 'We offer flexible engagement models: fixed-price projects for well-defined scopes, time & material for evolving requirements, and dedicated team models for long-term partnerships. We provide transparent, detailed quotes with no hidden fees.',
          },
          {
            q: 'Can you work with our existing team and codebase?',
            a: 'Yes. We regularly augment existing development teams, modernize legacy codebases, and integrate with existing systems. Our team adapts to your workflows, tools, and communication styles to ensure seamless collaboration.',
          },
          {
            q: 'Do you sign NDAs to protect our intellectual property?',
            a: 'Absolutely. We sign NDA agreements before any project discussion and ensure all intellectual property, code, designs, and data belong exclusively to you upon project completion.',
          },
        ],
      },
    },
    {
      sectionKey: 'testimonials',
      title: 'What our users say',
      subtitle: 'Client Success Stories',
      description: 'Trusted by industry-leading companies around the world.',
      content: {
        items: [
          {
            clientName: 'Google',
            logo: '/logos/google.png',
            quote:
              'Orange Global Infotech transformed our entire digital infrastructure. Their team delivered a scalable cloud solution that reduced our operational costs by 40% while dramatically improving performance.',
            author: 'Rahul Sharma',
            title: 'CTO',
          },
          {
            clientName: 'Microsoft',
            logo: '/logos/microsoft.png',
            quote:
              'Working with Orange Global Infotech was a game-changer. They built our SaaS platform from scratch with exceptional attention to detail, meeting every deadline and exceeding our expectations.',
            author: 'Priya Mehta',
            title: 'Product Director',
          },
          {
            clientName: 'Slack',
            logo: '/logos/slack.png',
            quote:
              'The mobile application they developed has over 50,000 active users and a 4.8-star rating on both app stores. Their understanding of UX and technical execution is world-class.',
            author: 'Amit Patel',
            title: 'Founder & CEO',
          },
          {
            clientName: 'Spotify',
            logo: '/logos/spotify.png',
            quote:
              'They delivered our e-commerce platform in record time. The site handles thousands of concurrent users without any performance issues. Highly recommend their expertise.',
            author: 'Sneha Gupta',
            title: 'Head of Digital',
          },
          {
            clientName: 'Stripe',
            logo: '/logos/stripe.png',
            quote:
              "Orange Global Infotech's team is responsive, professional, and technically outstanding. They became a true extension of our team and delivered beyond what we imagined possible.",
            author: 'Vikram Singh',
            title: 'VP Technology',
          },
        ],
      },
    },
    {
      sectionKey: 'nav',
      title: 'Navigation Links',
      subtitle: null,
      description: null,
      content: {
        links: [
          { label: 'Services', href: '/services' },
          { label: 'Projects', href: '/projects' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    },
    {
      sectionKey: 'stats',
      title: 'Global Impact Stats',
      subtitle: null,
      description: null,
      content: {
        items: [
          { value: '100+', label: 'Countries Worldwide' },
          { value: '8', label: 'Years building for businesses' },
          { value: '35000+', label: 'Installations' },
          { value: '20+', label: 'Technologies supported' },
        ],
      },
    },
    {
      sectionKey: 'footer',
      title: 'Footer Links',
      subtitle: null,
      description: null,
      content: {
        columns: [
          {
            title: 'Explore',
            links: [
              { label: 'About', href: '/about' },
              { label: 'Customer Stories', href: '#testimonials' },
              { label: 'Press Kit', href: '#' },
            ],
          },
          {
            title: 'Services',
            links: [
              { label: 'Web Development', href: '/services' },
              { label: 'Mobile Apps', href: '/services' },
              { label: 'Cloud Solutions', href: '/services' },
              { label: 'UI/UX Design', href: '/services' },
              { label: 'Consulting', href: '/services' },
            ],
          },
          {
            title: 'Help',
            links: [
              { label: 'FAQ', href: '#faq' },
              { label: 'Discord', href: '#' },
              { label: 'Contact Us', href: '/contact' },
              { label: 'Status', href: '#' },
            ],
          },
          {
            title: 'Contact Us',
            links: [
              { label: 'info@orangeglobal.com', href: 'mailto:info@orangeglobal.com' },
              { label: '+91 9592290407', href: 'tel:+91 9592290407' },
              { label: 'SCO 3, Level 1, Sector 41-D,\nChandigarh 160036', href: '/contact' },
            ],
          },
        ],
        socials: [
          { icon: 'FacebookIcon', href: '#', label: 'Facebook' },
          { icon: 'DiscordIcon', href: '#', label: 'Discord' },
          { icon: 'LinkedinIcon', href: '#', label: 'LinkedIn' },
          { icon: 'InstagramIcon', href: '#', label: 'Instagram' },
        ],
      }
    },
    {
      sectionKey: 'clientLogos',
      title: 'Trusted Clients',
      subtitle: null,
      description: null,
      content: {
        items: [
          { src: '/logos/google.png', alt: 'Google' },
          { src: '/logos/microsoft.png', alt: 'Microsoft' },
          { src: '/logos/paypallogo.png', alt: 'PayPal' },
          { src: '/logos/slack.png', alt: 'Slack' },
          { src: '/logos/spotify.png', alt: 'Spotify' },
          { src: '/logos/stripe.png', alt: 'Stripe' },
        ],
      },
    },
    {
      sectionKey: 'homeProjects',
      title: 'Meet the projects',
      subtitle: null,
      description: 'From initial design to final deployment and creative exploration. Pick the solution that fits your needs.',
      content: {},
    },
    {
      sectionKey: 'solutions',
      title: 'Solutions We Build',
      subtitle: null,
      description: 'Comprehensive digital solutions engineered for businesses of all sizes and industries.',
      content: {
        items: [
          {
            icon: 'Building2',
            title: 'Business Websites',
            description: 'Premium corporate websites that establish your brand authority and generate consistent leads with powerful design and SEO.',
            color: '#FF6B00',
            gradient: 'from-orange-50/80 to-amber-50/40',
            iconBg: 'bg-orange-50',
          },
          {
            icon: 'ShoppingCart',
            title: 'E-Commerce Solutions',
            description: 'Feature-rich online stores built for conversions, with seamless payment gateways, inventory management, and rich UX.',
            color: '#6EC1FF',
            gradient: 'from-blue-50/80 to-cyan-50/40',
            iconBg: 'bg-blue-50',
          },
          {
            icon: 'Smartphone',
            title: 'Mobile Applications',
            description: 'Native and cross-platform mobile applications that provide intuitive experiences and keep your customers engaged on the go.',
            color: '#A78BFA',
            gradient: 'from-purple-50/80 to-violet-50/40',
            iconBg: 'bg-purple-50',
          },
          {
            icon: 'Server',
            title: 'Web Applications',
            description: 'Complex, scalable web apps and SaaS platforms designed to handle heavy traffic and complex business logic.',
            color: '#F43F5E',
            gradient: 'from-rose-50/80 to-pink-50/40',
            iconBg: 'bg-rose-50',
          },
          {
            icon: 'LayoutDashboard',
            title: 'UI/UX Design',
            description: 'User-centric interfaces and breathtaking experiences that reduce churn, increase adoption, and delight your users.',
            color: '#10B981',
            gradient: 'from-emerald-50/80 to-teal-50/40',
            iconBg: 'bg-emerald-50',
          },
          {
            icon: 'Cpu',
            title: 'AI Integrations',
            description: 'Cutting-edge AI automation, intelligent chatbots, and data-driven algorithms to future-proof your business operations.',
            color: '#3B82F6',
            gradient: 'from-blue-50/80 to-indigo-50/40',
            iconBg: 'bg-blue-50',
          },
        ]
      },
    },
    {
      sectionKey: 'homeServices',
      title: 'Meet our services',
      subtitle: null,
      description: 'From web development to cloud infrastructure and everything in between. Pick the solution that powers your business.',
      content: {},
    },
    {
      sectionKey: 'techStack',
      title: 'Technologies we use',
      subtitle: null,
      description: 'Our diverse toolkit allows us to choose the right technology for your specific needs, ensuring scalability and performance.',
      content: {
        categories: [
          {
            name: 'Frontend',
            technologies: [
              { name: 'React', icon: 'React', color: '#61DAFB' },
              { name: 'Next.js', icon: 'NextJs', color: '#000000' },
              { name: 'Vue', icon: 'Vue', color: '#4FC08D' },
              { name: 'Tailwind CSS', icon: 'Tailwind', color: '#06B6D4' },
              { name: 'TypeScript', icon: 'TypeScript', color: '#3178C6' }
            ]
          },
          {
            name: 'Backend',
            technologies: [
              { name: 'Node.js', icon: 'NodeJs', color: '#339933' },
              { name: 'NestJS', icon: 'NestJs', color: '#E0234E' },
              { name: 'Python', icon: 'Python', color: '#3776AB' },
              { name: 'GraphQL', icon: 'GraphQL', color: '#E10098' },
              { name: 'Go', icon: 'Go', color: '#00ADD8' }
            ]
          },
          {
            name: 'Database & Cloud',
            technologies: [
              { name: 'PostgreSQL', icon: 'PostgreSql', color: '#4169E1' },
              { name: 'MongoDB', icon: 'MongoDb', color: '#47A248' },
              { name: 'Redis', icon: 'Redis', color: '#DC382D' },
              { name: 'AWS', icon: 'Aws', color: '#FF9900' },
              { name: 'Docker', icon: 'Docker', color: '#2496ED' }
            ]
          },
          {
            name: 'Mobile',
            technologies: [
              { name: 'React Native', icon: 'React', color: '#61DAFB' },
              { name: 'Flutter', icon: 'Flutter', color: '#02569B' },
              { name: 'Swift', icon: 'Swift', color: '#F05138' },
              { name: 'Kotlin', icon: 'Kotlin', color: '#7F52FF' }
            ]
          }
        ]
      },
    },
    {
      sectionKey: 'industries',
      title: 'Built for every industry',
      subtitle: null,
      description: "Domain expertise across diverse verticals — delivering solutions tailored to each industry's unique challenges.",
      content: {
        items: [
          { name: 'Real Estate', icon: 'Home', color: '#F59E0B' },
          { name: 'Retail & E-Commerce', icon: 'ShoppingBag', color: '#EC4899' },
          { name: 'Recruitment & HR', icon: 'Users', color: '#A855F7' },
          { name: 'Manufacturing', icon: 'Factory', color: '#F97316' },
          { name: 'Logistics', icon: 'Truck', color: '#0EA5E9' },
          { name: 'Healthcare', icon: 'HeartPulse', color: '#EF4444' },
          { name: 'Education', icon: 'GraduationCap', color: '#3B82F6' },
          { name: 'Finance', icon: 'DollarSign', color: '#10B981' }
        ]
      },
    },
    {
      sectionKey: 'process',
      title: 'How we work',
      subtitle: null,
      description: 'A transparent, agile, and results-driven process that transforms your vision into a successful digital product.',
      content: {
        items: [
          {
            title: 'Discovery & Consultation',
            description: 'We start by deeply understanding your business goals, target audience, technical requirements, and competitive landscape through structured discovery sessions.',
            icon: 'Search'
          },
          {
            title: 'Planning & Strategy',
            description: 'Our strategists craft a detailed project roadmap, define milestones, select the optimal technology stack, and create a clear execution plan aligned with your budget.',
            icon: 'Map'
          },
          {
            title: 'Design & Prototyping',
            description: 'Our UX/UI designers create wireframes, prototypes, and pixel-perfect designs that align with your brand and prioritize user experience and conversion.',
            icon: 'Pencil'
          },
          {
            title: 'Development',
            description: 'Our engineers build your solution using best practices, clean architecture, and modern technology — with agile sprints, regular demos, and transparent progress updates.',
            icon: 'Code2'
          },
          {
            title: 'Testing & QA',
            description: 'Rigorous quality assurance through automated testing, manual review, performance testing, security audits, and cross-device compatibility verification.',
            icon: 'TestTube'
          },
          {
            title: 'Deployment & Support',
            description: 'Smooth launch with zero downtime deployment, comprehensive documentation, team training, and ongoing 24/7 technical support and maintenance.',
            icon: 'Rocket'
          }
        ]
      },
    },
    {
      sectionKey: 'cta',
      title: 'Ready to start your next project?',
      subtitle: null,
      description: 'Join hundreds of businesses that have accelerated their growth with our expert digital solutions.',
      content: {
        primaryButton: 'Start a Project',
        secondaryButton: 'Schedule Call',
        features: [
          'Free 30-min consultation',
          'Detailed project proposal',
          'Transparent pricing',
          'NDA protection'
        ]
      },
    },
    {
      sectionKey: 'whyChooseUs',
      title: 'Why Choose Us',
      subtitle: 'Why Choose Us',
      description: 'We combine technical expertise with business acumen to deliver solutions that truly matter.',
      content: {
        items: [
          {
            icon: 'Award',
            title: 'Proven Expertise',
            description: 'Over 8+ years of experience delivering premium digital solutions across industries globally.',
            color: '#f97316',
            gradient: 'from-orange-50/80 to-amber-50/40',
            iconBg: 'bg-orange-50',
          },
          {
            icon: 'Zap',
            title: 'Agile Delivery',
            description: 'We follow agile methodologies ensuring faster delivery, flexible iterations, and continuous improvement.',
            color: '#06b6d4',
            gradient: 'from-cyan-50/80 to-blue-50/40',
            iconBg: 'bg-cyan-50',
          },
          {
            icon: 'Users',
            title: 'Expert Team',
            description: '10+ dedicated technology experts with deep domain knowledge in modern tech stacks.',
            color: '#a855f7',
            gradient: 'from-purple-50/80 to-violet-50/40',
            iconBg: 'bg-purple-50',
          },
          {
            icon: 'Shield',
            title: 'Reliable & Secure',
            description: 'Enterprise-grade security, data privacy, and reliability built into every solution we deliver.',
            color: '#10b981',
            gradient: 'from-emerald-50/80 to-green-50/40',
            iconBg: 'bg-emerald-50',
          },
          {
            icon: 'Globe',
            title: 'Global Reach',
            description: 'Serving clients across 50+ countries with culturally aware, globally optimized digital products.',
            color: '#3b82f6',
            gradient: 'from-blue-50/80 to-indigo-50/40',
            iconBg: 'bg-blue-50',
          },
          {
            icon: 'HeadphonesIcon',
            title: '24/7 Support',
            description: 'Round-the-clock dedicated support to ensure your systems run smoothly without interruption.',
            color: '#f43f5e',
            gradient: 'from-rose-50/80 to-pink-50/40',
            iconBg: 'bg-rose-50',
          },
        ],
      },
    },
    {
      sectionKey: 'footer',
      title: 'Footer Content',
      subtitle: null,
      description: null,
      content: {
        columns: [
          {
            title: 'Explore',
            links: [
              { label: 'About', href: '/about' },
              { label: 'Customer Stories', href: '#testimonials' },
              { label: 'Press Kit', href: '#' },
            ],
          },
          {
            title: 'Services',
            links: [
              { label: 'Web Development', href: '/services' },
              { label: 'Mobile Apps', href: '/services' },
              { label: 'Cloud Solutions', href: '/services' },
              { label: 'UI/UX Design', href: '/services' },
              { label: 'Consulting', href: '/services' },
            ],
          },
          {
            title: 'Help',
            links: [
              { label: 'FAQ', href: '#faq' },
              { label: 'Discord', href: '#' },
              { label: 'Contact Us', href: '/contact' },
              { label: 'Status', href: '#' },
            ],
          },
          {
            title: 'Contact Us',
            links: [
              { label: 'info@orangeglobal.com', href: 'mailto:info@orangeglobal.com' },
              { label: '+91 9592290407', href: 'tel:+91 9592290407' },
              { label: 'SCO 3, Level 1, Sector 41-D,\nChandigarh 160036', href: '/contact' },
            ],
          },
        ],
        socials: [
          { label: 'Facebook', href: '#' },
          { label: 'Discord', href: '#' },
          { label: 'LinkedIn', href: '#' },
          { label: 'Instagram', href: '#' },
        ]
      }
    }
  ];

  for (const wc of websiteContents) {
    await prisma.websiteContent.upsert({
      where: { sectionKey: wc.sectionKey },
      update: { ...wc, content: wc.content as any },
      create: { ...wc, content: wc.content as any },
    });
  }
  console.log(`✅ ${websiteContents.length} Website content sections seeded`);

  console.log('\n🎉 Seed completed successfully!');
  console.log('──────────────────────────────────────────');
  console.log('  Admin PIN : 1234');
  console.log('  Services  : 4 (Web, Software, Mobile, Cloud)');
  console.log('  Projects  : 5 (JRE, NRI, SGSS, ANL, Macquarie)');
  console.log('  Careers   : 4');
  console.log('  Settings  : 9 keys');
  console.log('  Content   : 6 sections');
  console.log('──────────────────────────────────────────');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
