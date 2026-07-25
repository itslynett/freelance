import { Server, Database, Shield } from "lucide-react";

export const personalInfo = {
    name: "Lynett Maina",
    titles: [
        "Full-Stack Software Engineer (Backend-Focused)",
        "Backend Engineer",
        "DevSecOps Engineer",
        "Software Developer"
    ],
    primaryTitle: "Full-Stack Software Engineer (Backend-Focused)",
    tagline: "Building secure, scalable applications and cloud-native infrastructure.",
    mission: "I design, build, deploy, and secure production-ready software—from intuitive user interfaces to scalable backend systems and cloud infrastructure. I enjoy solving complex engineering problems while building software that is reliable, maintainable, secure, and built to scale.",
    shortDescription: "Full-stack software engineer with hands-on experience building and scaling production systems across backend and frontend.",
    aboutBio: [
        "I am a Full-Stack Software Engineer (Backend-Focused) with hands-on experience building and scaling production systems across backend and frontend, spanning academic full-stack projects since 2023 through professional software engineering roles at Sazara and Royal Media Services (RMS).",
        "I build secure, well-validated RESTful APIs with FastAPI, Django, and Node.js/Express, alongside scalable React/Next.js frontends backed by PostgreSQL and MongoDB databases.",
        "As part of the software development team at Sazara (sazara.co.ke/team), I contribute to live production applications including Sazara POS System (pos.sazara.co.ke) and Elimos (a Django/React platform in final production rollout), exposing secure APIs, containerizing microservices with Docker, and building Prometheus/Grafana monitoring dashboards.",
        "At Royal Media Services (RMS), I developed and maintained backend features for News Vault and internal CMS platforms using Laravel (PHP). I diagnosed O(n²) performance bottlenecks in high-scale CMS interaction tracking systems and implemented batching and pre-aggregation strategies that significantly reduced database load and improved production throughput.",
        "I thrive in fast-paced, globally distributed teams — with a strong bias toward ownership, reliability, database optimization, and continuous learning."
    ],
    phone: "+254 743 288 972",
    email: "mainalynett42@gmail.com",
    location: "Nairobi, Kenya (GMT+3)",
    socials: {
        github: "https://github.com/itslynett",
        linkedin: "https://www.linkedin.com/in/lynettmaina-cybersec",
        twitter: "https://twitter.com/LynettMaina",
        resume: "/resume.pdf"
    }
};

export interface ProductionProduct {
    id: string;
    name: string;
    url?: string;
    status: "Production" | "In Development";
    roles: string[];
    responsibilities: string[];
    overview: string;
    businessProblem: string;
    architectureDiagram: string;
    engineeringDecisions: string[];
    techStack: string[];
    challenges: string;
    outcome: string;
    lessonsLearned: string;
}

export const productionProducts: ProductionProduct[] = [
    {
        id: "sazara-pos",
        name: "Sazara POS System",
        url: "https://pos.sazara.co.ke",
        status: "Production",
        roles: ["Full-Stack Engineer", "Backend Engineer"],
        responsibilities: [
            "Full-stack production development",
            "FastAPI REST APIs",
            "React & Next.js frontend integration",
            "Secure authentication & authorization",
            "Transaction workflows",
            "Data validation",
            "Database interaction optimization",
            "Docker containerization & deployment"
        ],
        overview: "A live production Point-of-Sale platform designed and built for real-world business operations, multi-outlet inventory synchronization, and secure transaction validation.",
        businessProblem: "Retail operations required instant checkout processing, audit-proof transaction records, and multi-terminal data sync without performance bottlenecks.",
        architectureDiagram: "React / Next.js Client ──> RESTful API Gateway ──> FastAPI Microservices ──> PostgreSQL Database ──> Docker Production Container",
        engineeringDecisions: [
            "Architected REST APIs using FastAPI for asynchronous request processing and automatic request payload validation.",
            "Integrated secure authentication and role-based transaction workflows across frontend and backend layers.",
            "Optimized database queries and connection handling to ensure sub-100ms checkout transaction latency.",
            "Containerized application components with Docker for consistent production deployments."
        ],
        techStack: ["FastAPI", "Python", "React", "Next.js", "PostgreSQL", "Docker", "RESTful APIs", "JWT Auth"],
        challenges: "Ensuring high-speed transaction validation and offline-to-online sync across multi-register terminals.",
        outcome: "Actively deployed in production and used in real business operations today with high reliability.",
        lessonsLearned: "Strict API input validation at the gateway level eliminates invalid transaction states before reaching database storage."
    },
    {
        id: "school-management-system",
        name: "School Management System (JCMTC Portal)",
        url: "https://jcmtcportal.ac.ke/",
        status: "Production",
        roles: ["Backend Engineer", "DevSecOps Engineer"],
        responsibilities: [
            "Backend architecture & REST APIs",
            "Student enrollment & gradebook workflows",
            "PostgreSQL database design",
            "Authentication & authorization",
            "Docker containerization",
            "CI/CD release workflows",
            "Prometheus & Grafana telemetry"
        ],
        overview: "An enterprise academic portal platform managing student registration, course enrollment, academic record tracking, and administrative workflows.",
        businessProblem: "Educational institutions required a secure, centralized web portal to replace paper records with auditable, digital student management.",
        architectureDiagram: "Student & Faculty Web Portal ──> REST API Gateway ──> Backend Microservices ──> PostgreSQL Database ──> Prometheus Telemetry",
        engineeringDecisions: [
            "Built well-validated RESTful APIs backed by PostgreSQL with strict relational constraints on student records.",
            "Set up Docker containerization to standardize local development and production deployment environments.",
            "Implemented Prometheus metrics exporters and Grafana dashboards for early incident detection and server health tracking."
        ],
        techStack: ["Python", "FastAPI", "Django", "PostgreSQL", "Docker", "Prometheus", "Grafana", "Linux"],
        challenges: "Migrating legacy academic data records into normalized PostgreSQL database schemas without data loss.",
        outcome: "Deployed live in production at jcmtcportal.ac.ke serving academic operations.",
        lessonsLearned: "Built-in telemetry and health endpoints simplify ongoing maintenance and service reliability."
    },
    {
        id: "elimos",
        name: "Elimos (Sazara Platform)",
        url: "https://sazara.co.ke/team",
        status: "In Development",
        roles: ["Full-Stack Developer", "Backend Engineer"],
        responsibilities: [
            "Django backend API development",
            "React frontend integration",
            "Sazara team development",
            "Database query optimization",
            "API documentation & validation"
        ],
        overview: "A Django and React educational management platform built as part of the Sazara engineering team (sazara.co.ke/team), currently in final stages of production rollout.",
        businessProblem: "Need for a unified digital platform to handle course distribution, student assignments, and administrative metrics.",
        architectureDiagram: "React Frontend App ──> Django REST API Core ──> PostgreSQL DB ──> Celery Task Queue ──> Docker Infrastructure",
        engineeringDecisions: [
            "Developed Django backend APIs exposing clean, documented data endpoints for React frontend components.",
            "Optimized relational query sets to support fast dashboard loading for student analytics.",
            "Containerized services with Docker to streamline team integration across a globally distributed development team."
        ],
        techStack: ["Django", "Python", "React", "PostgreSQL", "Docker", "REST APIs", "Tailwind CSS"],
        challenges: "Finalizing backend API contracts while coordinating parallel frontend feature integration.",
        outcome: "Backend core completed and currently undergoing final production deployment rollout.",
        lessonsLearned: "Clear API contract design speeds up parallel development between frontend and backend engineers."
    },
    {
        id: "sazara-afya",
        name: "Sazara Afya",
        url: "https://afya.sazara.co.ke",
        status: "Production",
        roles: ["Backend Engineer", "DevSecOps Engineer"],
        responsibilities: [
            "Backend REST APIs",
            "Healthcare data security",
            "Authentication & authorization",
            "Docker deployment",
            "Database optimization"
        ],
        overview: "An enterprise healthcare management platform engineered for patient records, clinical data workflows, and secure access management.",
        businessProblem: "Healthcare facilities required centralized, compliant patient record storage with role-based access controls.",
        architectureDiagram: "Web Client ──> API Gateway ──> FastAPI Backend ──> Encrypted PostgreSQL ──> Docker Environment",
        engineeringDecisions: [
            "Engineered granular Role-Based Access Control (RBAC) middleware for medical staff permissions.",
            "Enforced encrypted data storage in PostgreSQL and secure TLS communications.",
            "Integrated container security checks into automated CI/CD deployment pipelines."
        ],
        techStack: ["FastAPI", "Python", "Node.js", "PostgreSQL", "Docker", "OAuth2 / RBAC", "Linux"],
        challenges: "Balancing strict access controls with sub-second patient record query speeds.",
        outcome: "Production system serving healthcare operations with audited security.",
        lessonsLearned: "Embedding security and validation at the repository layer ensures consistent compliance."
    }
];

export interface PersonalProject {
    id: string;
    name: string;
    overview: string;
    problem: string;
    solution: string;
    architecture: string;
    techStack: string[];
    challenges: string;
    engineeringDecisions: string[];
    lessonsLearned: string;
    status: "Production" | "Completed" | "School / Security";
    githubUrl?: string;
    liveUrl?: string;
}

export const personalProjects: PersonalProject[] = [
    {
        id: "dr-klawz-website",
        name: "Dr. Klawz Website",
        status: "Production",
        overview: "A live, production commercial website and client portal engineered for Dr. Klawz with modern responsive UI, fast performance, and secure backend booking/contact workflows.",
        problem: "Dr. Klawz needed a high-performance, polished digital platform to showcase services, handle client inquiries, and represent brand identity.",
        solution: "Designed and built a full-stack website using React/Next.js and modern styling, with validated backend contact and booking integration.",
        architecture: "React / Next.js Frontend ──> API Route Handlers ──> Validated Backend Form Processor ──> Production Web Hosting",
        techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs"],
        challenges: "Achieving optimal initial page load performance and perfect mobile responsiveness across all viewport sizes.",
        engineeringDecisions: [
            "Utilized Next.js static optimization and dynamic image asset loading to maximize performance scores.",
            "Implemented strict client-side and server-side form validation for user inquiries."
        ],
        lessonsLearned: "Production web applications require fast performance and clean UI feedback to maximize client conversion."
    },
    {
        id: "housing-project",
        name: "Housing Management Platform",
        status: "Completed",
        overview: "A full-stack real estate and housing management platform built to streamline property listings, tenant application workflows, and property search queries.",
        problem: "Property managers face fragmented communication and slow manual record-keeping when handling tenant applications and listings.",
        solution: "Built a centralized web platform featuring property listing management, filtered query search, and automated application tracking.",
        architecture: "Web Frontend Client ──> RESTful API Gateway (FastAPI/Django) ──> PostgreSQL Database ──> Docker Container",
        techStack: ["Python", "FastAPI", "Django", "React", "PostgreSQL", "Docker", "Tailwind CSS"],
        challenges: "Structuring relational database schemas to efficiently query multi-parameter property filters (price, location, amenities).",
        engineeringDecisions: [
            "Created indexed database views in PostgreSQL for fast search query execution.",
            "Containerized backend and database services using Docker Compose for simple local and cloud deployment."
        ],
        lessonsLearned: "Database indexing on heavily filtered query parameters drastically cuts API response latency."
    },
    {
        id: "policy-guard-ai",
        name: "PolicyGuard AI",
        status: "School / Security",
        overview: "An AI-driven cybersecurity policy compliance and automated rule enforcement engine built as a security research implementation at USIU-Africa.",
        problem: "Organizations struggle to manually audit complex software repositories and cloud configurations against evolving security policies.",
        solution: "Engineered an automated security tool that ingests configuration policies, parses codebase rules, and flags security policy compliance violations using AI models.",
        architecture: "Policy Config Input ──> Python Analysis Engine ──> AI Security Model Inspector ──> Compliance Report Generator",
        techStack: ["Python", "FastAPI", "AI / ML Integration", "Security Policy Frameworks", "Docker", "Linux"],
        challenges: "Optimizing AI model inference latency when scanning large policy document sets.",
        engineeringDecisions: [
            "Designed a modular rule parser that evaluates deterministic regex policies before invoking AI model analysis.",
            "Encapsulated the inspection engine within a lightweight Docker container for easy security pipeline integration."
        ],
        lessonsLearned: "Combining deterministic security rules with AI inspection provides both speed and intelligent policy analysis."
    }
];

export interface AcademicProject {
    id: string;
    name: string;
    institution: string;
    overview: string;
    systemDesign: string;
    techStack: string[];
    problemSolving: string;
    architecture: string;
}

export const academicProjects: AcademicProject[] = [
    {
        id: "usiu-academic-fullstack",
        name: "Academic Full-Stack Projects (USIU-Africa)",
        institution: "USIU-Africa (2023 - Present)",
        overview: "Built full-stack coursework projects using FastAPI and Django, covering backend RESTful API design, database schema normalization, and data-driven application logic.",
        systemDesign: "Modular REST API architectures leveraging FastAPI and Django ORM with PostgreSQL database persistence.",
        techStack: ["Python", "FastAPI", "Django", "PostgreSQL", "HTML5/CSS3", "JavaScript"],
        problemSolving: "Designed strict relational database schemas and endpoint validation logic for coursework software assignments.",
        architecture: "Frontend Web Client ──> FastAPI / Django API ──> PostgreSQL Database"
    },
    {
        id: "policy-guard-ai-academic",
        name: "PolicyGuard AI — Security Rule Enforcer",
        institution: "USIU-Africa",
        overview: "Automated cybersecurity policy inspection tool built to parse software configurations and enforce compliance standards.",
        systemDesign: "Python rule engine combining static policy checks with AI security analysis.",
        techStack: ["Python", "FastAPI", "AI Integration", "Docker", "Linux"],
        problemSolving: "Structuring automated rule evaluation pipelines to flag security vulnerabilities accurately.",
        architecture: "Codebase Config ──> PolicyGuard Parser ──> AI Inspector ──> Compliance Report"
    }
];

export const technicalSkills = {
    languages: ["Python (FastAPI, Django, Flask)", "Node.js", "Express.js", "JavaScript", "TypeScript", "Laravel (PHP)", "SQL", "HTML5/CSS3"],
    frontend: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "REST API Integration"],
    backend: ["FastAPI", "Django", "Flask", "Node.js", "Express.js", "RESTful API Design & Debugging", "Auth & Authorization", "Secure Coding"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Schema Design", "Query Optimization", "Performance Tuning"],
    devSecOps: ["Docker (Containerization & Deployment)", "Git / GitHub", "CI/CD Pipelines", "Linux (Ubuntu, Debian)", "Prometheus & Grafana", "Agile Workflows"],
    cybersecurity: ["Laravel (PHP)", "Log Analysis & Root-Cause Troubleshooting", "Scalable System Design", "Secure Coding Practices", "Web3 Curiosity"]
};

export const professionalExperience = [
    {
        role: "Software Developer (Part-Time, Remote)",
        company: "Sazara",
        companyUrl: "https://sazara.co.ke/team",
        location: "Nairobi, Kenya",
        period: "Jan 2025 – Present",
        description: "Software Developer on the Sazara engineering team (sazara.co.ke/team), building secure backend services, RESTful APIs, optimizing database performance, containerizing applications with Docker, and setting up system telemetry.",
        responsibilities: [
            "Built and maintained backend services with Python (FastAPI, Django) and Node.js, exposing secure, well-validated RESTful APIs consumed by frontend clients.",
            "Optimized PostgreSQL and MongoDB queries and schema design for performance, scalability, and reliability.",
            "Containerized services with Docker for consistent, repeatable deployments, and supported CI/CD workflows to speed up releases.",
            "Built Prometheus/Grafana monitoring dashboards for system health and early incident detection.",
            "Debugged production issues end-to-end through API tracing, log analysis, and database investigation; collaborated in Agile, Git-based team workflows across a globally distributed team."
        ],
        techStack: ["Python", "FastAPI", "Django", "Node.js", "PostgreSQL", "MongoDB", "Docker", "Prometheus", "Grafana", "CI/CD"]
    },
    {
        role: "Software Developer",
        company: "Royal Media Services (RMS)",
        location: "Nairobi, Kenya",
        period: "Jan 2026 – Apr 2026",
        description: "Developed and maintained features for News Vault and internal CMS platforms, optimized database bottlenecks, and containerized services with Docker.",
        responsibilities: [
            "Developed and maintained features for News Vault and internal CMS platforms using Laravel (PHP), supporting large-scale content and interaction data.",
            "Diagnosed O(n²) performance bottlenecks in a CMS handling large-scale interaction data and refactored the logic using batching and pre-aggregation strategies to reduce database load and improve throughput.",
            "Used Docker to containerize services for consistent, repeatable deployments across environments.",
            "Diagnosed root causes of recurring technical issues through log and system analysis, improving overall service reliability.",
            "Collaborated with the engineering team on technical documentation and incident tracking processes."
        ],
        techStack: ["Laravel (PHP)", "Query Optimization", "CMS Architecture", "News Vault", "Docker", "Log Analysis", "System Reliability"]
    }
];

export const certifications = [
    {
        title: "Software Developer Certificate",
        issuer: "PLP Africa",
        year: "2025",
        description: "Comprehensive software engineering certificate covering full-stack web application development, backend services, database design, and modern web frameworks."
    }
];

export const githubData = {
    username: "itslynett",
    url: "https://github.com/itslynett",
    stats: {
        publicRepos: 24,
        totalCommits: "850+",
        securityAudits: 18,
        uptimeTarget: "99.9%"
    },
    pinnedRepos: [
        {
            name: "sazara-pos-system",
            description: "Production Point-of-Sale system built with React, Next.js, FastAPI, PostgreSQL, and Docker.",
            language: "Python",
            stars: 14,
            forks: 5,
            url: "https://github.com/itslynett"
        },
        {
            name: "dr-klawz-website",
            description: "Production commercial website built with React, Next.js, and TypeScript.",
            language: "TypeScript",
            stars: 10,
            forks: 3,
            url: "https://github.com/itslynett"
        },
        {
            name: "policy-guard-ai",
            description: "AI-driven cybersecurity policy compliance and rule enforcement engine.",
            language: "Python",
            stars: 16,
            forks: 4,
            url: "https://github.com/itslynett"
        }
    ]
};

/* Backward compatibility exports for legacy unused components */
export const philosophy = [
    {
        title: "Ownership & Reliability",
        description: "Building production software requires strong ownership, reliable system architecture, and continuous learning."
    },
    {
        title: "Continuous Learning",
        description: "Curious about Web3, emerging technologies, and constantly refining backend performance."
    },
    {
        title: "Security & Clean Code",
        description: "Building well-validated APIs and secure coding practices into software from day one."
    }
];

export const services = [
    {
        icon: Server,
        title: "Backend Development",
        description: "Building secure RESTful APIs with FastAPI, Django, Node.js, and Laravel."
    },
    {
        icon: Database,
        title: "Database Optimization",
        description: "PostgreSQL and MongoDB schema design, query tuning, and performance optimization."
    },
    {
        icon: Shield,
        title: "DevOps & Containerization",
        description: "Docker deployments, CI/CD pipelines, and Prometheus/Grafana monitoring."
    }
];

export const projects = [
    {
        title: "Sazara POS System",
        description: "A live production Point-of-Sale system built with React, Next.js, FastAPI, PostgreSQL, and Docker.",
        image: "/images/project-1.svg",
        tags: ["FastAPI", "React", "Next.js", "PostgreSQL", "Docker"],
        links: { demo: "https://pos.sazara.co.ke/", github: "https://github.com/itslynett" }
    }
];
