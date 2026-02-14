import {
    Code,
    Server,
    Shield,
    Zap,
    Smartphone,
    Search,
    Database,
    Lock,
    Globe
} from "lucide-react";

export const personalInfo = {
    name: "Lynett Maina",
    title: "Cybersecurity Specialist & Full-Stack Developer",
    email: "mainalynett42@gmail.com",
    location: "Nairobi, Kenya",
    bio: [
        "I am a **Full-Stack Developer** and **Cybersecurity Specialist** based in Nairobi, Kenya. Currently pursuing a Bachelor’s in Information Systems and Technology at USIU–Africa, specializing in Forensics and Cybercrime.",
        "My philosophy is simple: *\"Functionality without protection is unfinished work.\"*",
        "I don't just write code; I architect resilient digital ecosystems. From building secure systems at **SynthaHub** to ensuring system reliability at **Royal Media Services**, my work bridges the gap between innovative software and ironclad security.",
        "When I'm not auditing code or designing APIs, I'm cultivating mental resilience through fitness and continuous learning."
    ],
    socials: {
        github: "https://github.com/itslynett",
        linkedin: "https://www.linkedin.com/in/lynett-maina-cybersec/",
        twitter: "https://twitter.com/lynettmaina"
    }
};

export const services = [
    {
        icon: Code,
        title: "Secure Web Development",
        description: "Building responsive, modern web applications with security best practices baked in from line one."
    },
    {
        icon: Server,
        title: "API & Backend Engineering",
        description: "Designing scalable, RESTful and GraphQL APIs using Node.js, Django, and FastAPI."
    },
    {
        icon: Shield,
        title: "Security Hardening",
        description: "Vulnerability assessments, secure coding audits, and implementation of robust auth systems."
    },
    {
        icon: Zap,
        title: "Performance Optimization",
        description: "Speeding up load times, optimizing database queries, and ensuring SEO readiness."
    },
    {
        icon: Smartphone,
        title: "SaaS & MVP Architecture",
        description: "Rapidly prototyping and deploying scalable MVPs for startups and businesses."
    },
    {
        icon: Search,
        title: "Digital Forensics (Consulting)",
        description: "Leveraging forensic knowledge to investigate and prevent digital threats."
    },
];

export const experience = [
    {
        role: "Full-Stack Developer",
        company: "SynthaHub",
        period: "2024 - Present",
        description: "Designing and building secure, scalable software using Next.js, React, and Node.js. Integrating backend systems with FastAPI and Django, managing databases (MongoDB, PostgreSQL), and enforcing security protocols.",
        tags: ["Next.js", "FastAPI", "Security", "PostgreSQL"]
    },
    {
        role: "IT Support & Cybersecurity Intern",
        company: "Royal Media Services",
        period: "2023 - 2024",
        description: "Rotated through IT support and cybersecurity departments. Contributed to system reliability, managed Sophos endpoint protection, and supported an interactive CMS used at national scale.",
        tags: ["Cybersecurity", "Sophos", "System Admin", "CMS"]
    }
];

export const projects = [
    {
        title: "Secure E-Commerce Platform",
        description: "A full-stack e-commerce application with robust authentication, secure payment gateway integration, and admin dashboard.",
        image: "/images/project-1.svg",
        tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
        links: { demo: "#", github: "#" }
    },
    {
        title: "Cyber Threat Dashboard",
        description: "Real-time dashboard for monitoring network traffic and potential security threats. Visualizes data using D3.js.",
        image: "/images/project-2.svg",
        tags: ["React", "Python", "FastAPI", "D3.js"],
        links: { demo: "#", github: "#" }
    },
];

export const techStack = [
    {
        name: "Frontend",
        skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"]
    },
    {
        name: "Backend",
        skills: ["Node.js", "Express", "Django", "FastAPI", "Flask", "Python", "REST APIs"]
    },
    {
        name: "Database",
        skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"]
    },
    {
        name: "Security & DevOps",
        skills: ["Sophos", "Octopus", "OWASP", "Docker", "Git", "Linux", "Penetration Testing"]
    }
];

export const philosophy = [
    {
        title: "Discipline & Fitness",
        description: "Physical resilience fuels mental clarity. The discipline I build in the gym translates to the persistence I bring to debugging and solving complex problems."
    },
    {
        title: "Continuous Learning",
        description: "Technology never stops evolving, and neither do I. Staying ahead of the curve is not just a passion—it's a professional necessity."
    },
    {
        title: "Security Mindset",
        description: "Security isn't an afterthought; it's a culture. I approach every system with a proactive, defensive mindset."
    }
];
