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
    title: "Full-Stack Developer & Cybersecurity Enthusiast",
    email: "mainalynett42@gmail.com",
    location: "Nairobi, Kenya",
    bio: [
        "I’m **Lynett Maina**, a **Full-Stack Developer** and **Cybersecurity enthusiast** driven by a love for technology that transforms lives. I’m pursuing a Bachelor’s in Information Systems and Technology at USIU–Africa, specializing in Forensics and Cybercrime, fueling my curiosity for secure systems, digital investigations, and the evolving landscape of cyber threats.",
        "At **SynthaHub**, I build secure, scalable, and intuitive software, merging creativity with engineering discipline. My work spans frontend frameworks like Next.js, React, and Vue.js, and backend systems with Node.js, Express, Django, FastAPI, and Flask, supported by MongoDB, PostgreSQL, and MySQL. Every line of code I write carries a security-first approach, creating systems that are both functional and purposeful.",
        "I’m also interning at **Royal Media Services (RMS)**, moving across IT support, cybersecurity, and software development. Some days, I ensure systems run smoothly; on others, I work on cybersecurity with tools like Sophos and Octopus. I also contribute to an interactive CMS, seeing firsthand how technology meets people, content, and scale. Here, I’ve learned that technology isn’t abstract—it’s human. Every alert, interaction, and line of logic traces back to real users, decisions, and impact.",
        "Fitness, mental wellness, and continuous learning guide my discipline and resilience, shaping how I approach challenges and grow in every space I step into."
    ],
    socials: {
        github: "https://github.com/itslynett",
        linkedin: "https://www.linkedin.com/in/lynett-maina-cybersec/",
        twitter: "https://twitter.com/LynettMaina"
    }
};

export const services = [
    {
        icon: Server,
        title: "Backend Engineering",
        description: "Designing scalable, secure, and production-ready APIs using FastAPI, Node.js (Express), and Django."
    },
    {
        icon: Database,
        title: "Database Architecture",
        description: "Designing schemas and optimizing queries for PostgreSQL, MongoDB, and MySQL to ensure high-throughput performance."
    },
    {
        icon: Shield,
        title: "Security Hardening",
        description: "Implementing secure coding standards, OAuth2/JWT authentication, data validation, and monitoring system vulnerabilities."
    },
    {
        icon: Zap,
        title: "Performance Tuning",
        description: "Diagnosing and refactoring performance bottlenecks, optimizing query latency, and introducing pre-aggregation/caching."
    },
    {
        icon: Code,
        title: "System Integration & DevOps",
        description: "Containerizing services with Docker, deploying resilient microservices, and setting up monitoring (Prometheus & Grafana)."
    },
    {
        icon: Search,
        title: "Digital Forensics (Consulting)",
        description: "Leveraging academic forensics and cybercrime expertise to conduct security audits and prevent digital threats."
    },
];

export const experience = [
    {
        role: "Software Developer (Part-Time, Remote)",
        company: "SynthaHub",
        period: "June 2025 - Present",
        description: "Developed secure backend systems and APIs using Node.js, FastAPI, and Django. Optimized PostgreSQL and MongoDB databases, containerized services using Docker, and implemented monitoring dashboards with Prometheus and Grafana.",
        tags: ["FastAPI", "Node.js", "PostgreSQL", "Docker", "Prometheus", "Grafana"]
    },
    {
        role: "IT & Cybersecurity Intern",
        company: "Royal Media Services (RMS)",
        period: "Jan 2026 - April 2026",
        description: "Optimized a high-scale CMS interaction tracking system by identifying and refactoring O(n^2) bottlenecks, utilizing pre-aggregation and batching. Assisted in designing 'NewsVault' to optimize media storage. Monitored security events using Sophos and managed IT systems infrastructure.",
        tags: ["Query Optimization", "Sophos", "CMS", "Systems Support", "System Admin"]
    }
];

export const projects = [
    {
        title: "Sazara POS System",
        description: "A production-ready, highly scalable Point of Sale platform. Developed secure backend services and RESTful APIs using FastAPI, designed database schemas, and containerized the entire ecosystem with Docker to support real-world business operations.",
        image: "/images/project-1.svg",
        tags: ["FastAPI", "React", "Next.js", "Docker", "REST API"],
        links: { demo: "https://pos.sazara.co.ke/", github: "https://github.com/itslynett" }
    }
];

export const techStack = [
    {
        name: "Backend Development",
        skills: ["Node.js", "Express.js", "FastAPI", "Django", "Flask", "RESTful APIs", "Authentication & JWT"]
    },
    {
        name: "Databases & Storage",
        skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "Query Optimization"]
    },
    {
        name: "DevOps & Observability",
        skills: ["Docker", "Git & GitHub", "Prometheus", "Grafana", "Linux (Ubuntu/Debian)", "CI/CD Concepts"]
    },
    {
        name: "Security & Systems",
        skills: ["Secure Coding Practices", "Endpoint Security (Sophos)", "Log Analysis", "Vulnerability awareness"]
    }
];

export const philosophy = [
    {
        title: "Discipline & Fitness",
        description: "Physical resilience fuels mental clarity. The discipline I build in the gym translates directly to the persistence I bring to solving complex backend bottlenecks."
    },
    {
        title: "Continuous Learning",
        description: "Backend architecture and security threats never stop evolving. Staying ahead through continuous learning is a professional necessity."
    },
    {
        title: "Security by Design",
        description: "Security is not a checkbox at the end; it is built into the architecture from day one. Functionality without protection is unfinished work."
    }
];

