"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Starting seed...');
    const pinHash = await bcrypt.hash('admin@123', 10);
    const admin = await prisma.admin.upsert({
        where: { id: 'super-admin-seed-id' },
        update: {},
        create: {
            id: 'super-admin-seed-id',
            name: 'Super Admin',
            pinHash,
            role: 'SUPER_ADMIN',
        },
    });
    console.log('✅ Admin seeded:', admin.name);
    const services = [
        {
            title: 'Web Development',
            slug: 'web-development',
            shortDescription: 'Modern, responsive websites and web applications tailored to your business needs.',
            description: 'We design and develop high-performance web applications using the latest technologies. From simple landing pages to complex enterprise solutions, our team delivers pixel-perfect, scalable digital experiences.',
            icon: 'code',
            features: ['React / Next.js', 'Node.js & NestJS', 'REST & GraphQL APIs', 'Responsive Design', 'SEO Optimized'],
            order: 1,
        },
        {
            title: 'Mobile App Development',
            slug: 'mobile-app-development',
            shortDescription: 'Cross-platform mobile apps that deliver seamless user experiences.',
            description: 'We build native and cross-platform mobile applications for iOS and Android that are fast, secure, and scalable. Our apps are crafted with React Native and Flutter to maximise code reuse without compromising performance.',
            icon: 'smartphone',
            features: ['React Native', 'Flutter', 'iOS & Android', 'Push Notifications', 'Offline Support'],
            order: 2,
        },
        {
            title: 'UI/UX Design',
            slug: 'ui-ux-design',
            shortDescription: 'Beautiful, intuitive designs that delight users and drive conversions.',
            description: 'Our design team creates visually stunning and user-friendly interfaces backed by thorough research and user testing. We deliver wireframes, prototypes, and final design assets ready for development.',
            icon: 'palette',
            features: ['Figma Prototyping', 'User Research', 'Wireframing', 'Design Systems', 'Usability Testing'],
            order: 3,
        },
        {
            title: 'Cloud & DevOps',
            slug: 'cloud-devops',
            shortDescription: 'Scalable cloud infrastructure and automated CI/CD pipelines.',
            description: 'We help businesses move to the cloud and automate their deployment workflows with modern DevOps practices. From AWS and GCP setup to Docker and Kubernetes orchestration, we ensure your infrastructure is reliable and cost-efficient.',
            icon: 'cloud',
            features: ['AWS / GCP / Azure', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Monitoring & Alerts', 'Cost Optimisation'],
            order: 4,
        },
        {
            title: 'Digital Marketing',
            slug: 'digital-marketing',
            shortDescription: 'Data-driven marketing strategies that grow your online presence.',
            description: 'Our digital marketing experts craft tailored strategies encompassing SEO, SEM, social media, and content marketing to attract, engage, and convert your target audience effectively.',
            icon: 'trending-up',
            features: ['SEO & SEM', 'Social Media Marketing', 'Content Strategy', 'Email Campaigns', 'Analytics & Reporting'],
            order: 5,
        },
        {
            title: 'IT Consulting',
            slug: 'it-consulting',
            shortDescription: 'Expert technology guidance to align IT strategy with business goals.',
            description: 'We provide strategic IT consulting to help businesses leverage technology for growth. Our consultants analyse your existing systems, identify bottlenecks, and recommend actionable solutions to optimise your operations.',
            icon: 'briefcase',
            features: ['Technology Audits', 'Digital Transformation', 'IT Roadmapping', 'Vendor Selection', 'Risk Management'],
            order: 6,
        },
    ];
    for (const service of services) {
        await prisma.service.upsert({
            where: { slug: service.slug },
            update: {},
            create: service,
        });
    }
    console.log(`✅ ${services.length} Services seeded`);
    const projects = [
        {
            title: 'Orange Global Corporate Website',
            slug: 'orange-global-corporate-website',
            description: 'A full-stack corporate website built with Next.js and NestJS showcasing company services, portfolio, and careers with a headless CMS-driven content model.',
            technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
            isFeatured: true,
        },
        {
            title: 'E-Commerce Platform',
            slug: 'e-commerce-platform',
            description: 'A scalable multi-vendor e-commerce platform with real-time inventory management, Stripe payment integration, and an intuitive admin dashboard.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
            isFeatured: true,
        },
        {
            title: 'Healthcare Patient Portal',
            slug: 'healthcare-patient-portal',
            description: 'A secure patient management portal enabling appointment booking, medical record access, and telemedicine video consultations.',
            technologies: ['React Native', 'NestJS', 'PostgreSQL', 'WebRTC', 'AWS'],
            isFeatured: true,
        },
        {
            title: 'Real Estate Listing App',
            slug: 'real-estate-listing-app',
            description: 'A feature-rich real estate listing mobile app with advanced map search, virtual tours, mortgage calculator, and agent CRM integration.',
            technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe'],
            isFeatured: false,
        },
        {
            title: 'Logistics & Fleet Management',
            slug: 'logistics-fleet-management',
            description: 'An IoT-enabled fleet management system providing real-time GPS tracking, route optimisation, driver performance analytics, and fuel monitoring.',
            technologies: ['React', 'Node.js', 'MQTT', 'PostgreSQL', 'Google Maps'],
            isFeatured: false,
        },
    ];
    for (const project of projects) {
        await prisma.project.upsert({
            where: { slug: project.slug },
            update: {},
            create: project,
        });
    }
    console.log(`✅ ${projects.length} Projects seeded`);
    const careers = [
        {
            title: 'Full Stack Developer',
            location: 'Ahmedabad, Gujarat',
            type: 'Full-Time',
            description: 'We are looking for a passionate Full Stack Developer to join our growing team. You will be responsible for designing and implementing robust web applications from front-end to back-end.',
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
            description: 'Join our design team and craft exceptional user experiences. You will collaborate closely with developers and product managers to transform ideas into beautiful, functional designs.',
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
            location: 'Ahmedabad, Gujarat',
            type: 'Full-Time',
            description: 'We need an experienced React Native Developer to build and maintain cross-platform mobile applications. You will work in an agile environment delivering high-quality mobile solutions.',
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
            location: 'Ahmedabad, Gujarat',
            type: 'Full-Time',
            description: 'We are seeking a data-driven Digital Marketing Executive to manage and grow our online presence across multiple channels and drive qualified traffic and leads.',
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
    const settings = [
        { key: 'site_name', value: 'Orange Global Infotech' },
        { key: 'site_email', value: 'info@orangeglobalinfotech.com' },
        { key: 'site_phone', value: '+91 98765 43210' },
        { key: 'site_address', value: 'Ahmedabad, Gujarat, India' },
        {
            key: 'social_links',
            value: {
                linkedin: 'https://linkedin.com/company/orange-global-infotech',
                twitter: 'https://twitter.com/orangeglobalit',
                facebook: 'https://facebook.com/orangeglobalinfotech',
                instagram: 'https://instagram.com/orangeglobalinfotech',
            },
        },
    ];
    for (const setting of settings) {
        await prisma.setting.upsert({
            where: { key: setting.key },
            update: {},
            create: setting,
        });
    }
    console.log(`✅ ${settings.length} Settings seeded`);
    const websiteContents = [
        {
            sectionKey: 'hero',
            title: 'Transforming Ideas Into Digital Reality',
            subtitle: 'Your Trusted Technology Partner',
            description: 'We build cutting-edge web and mobile solutions that help businesses grow, innovate, and stay ahead in the digital world.',
            content: {
                ctaPrimary: 'Get Started',
                ctaSecondary: 'View Our Work',
            },
        },
        {
            sectionKey: 'about',
            title: 'About Orange Global Infotech',
            subtitle: 'Who We Are',
            description: 'Orange Global Infotech is a full-service digital agency specialising in web development, mobile applications, UI/UX design, and digital marketing. Founded with a vision to bridge the gap between businesses and technology, we deliver tailored solutions that drive real results.',
            content: {
                founded: '2018',
                teamSize: '50+',
                projectsDelivered: '200+',
                clientSatisfaction: '98%',
            },
        },
        {
            sectionKey: 'contact',
            title: 'Get In Touch',
            subtitle: 'Contact Us',
            description: "Have a project in mind or just want to say hello? We'd love to hear from you. Reach out and our team will get back to you within 24 hours.",
            content: {
                workingHours: 'Mon–Fri: 9:00 AM – 6:00 PM IST',
            },
        },
    ];
    for (const wc of websiteContents) {
        await prisma.websiteContent.upsert({
            where: { sectionKey: wc.sectionKey },
            update: {},
            create: wc,
        });
    }
    console.log(`✅ ${websiteContents.length} Website content sections seeded`);
    console.log('\n🎉 Seed completed successfully!');
}
main()
    .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map