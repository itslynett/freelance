import { Server, Database, Shield } from "lucide-react";

export const personalInfo = {
    name: "Lynett Maina",
    titles: [
        "Full-Stack Software Engineer",
        "Backend Engineer",
        "DevSecOps Engineer",
        "Cybersecurity"
    ],
    primaryTitle: "Full-Stack Software Engineer & DevSecOps Specialist",
    tagline: "Building secure, scalable applications and cloud-native infrastructure.",
    mission: "I design, build, deploy, and secure production-ready software—from intuitive user interfaces to scalable backend systems and cloud infrastructure. I enjoy solving complex engineering problems while building software that is reliable, maintainable, secure, and built to scale.",
    shortDescription: "Building secure, scalable cloud-native software from frontend to infrastructure.",
    aboutBio: [
        "I'm a Certified Web Developer and Full-Stack Software Engineer with experience building production web applications, backend services, cloud infrastructure, and DevSecOps workflows.",
        "My expertise spans full-stack development, backend engineering, DevSecOps, cloud-native technologies, infrastructure, and cybersecurity.",
        "I enjoy designing systems that are scalable, secure, maintainable, and built for real-world use.",
        "I'm currently pursuing a Bachelor of Science in Information Systems & Technology (Digital Forensics & Cybercrime) at USIU-Africa."
    ],
    email: "mainalynett42@gmail.com",
    location: "Nairobi, Kenya",
    socials: {
        github: "https://github.com/itslynett",
        linkedin: "https://www.linkedin.com/in/lynett-maina-cybersec/",
        twitter: "https://twitter.com/LynettMaina",
        resume: "https://github.com/itslynett"
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
        name: "Sazara POS",
        url: "https://pos.sazara.co.ke",
        status: "Production",
        roles: ["Backend Engineer", "DevSecOps Engineer"],
        responsibilities: [
            "Backend API development",
            "Business logic",
            "Database architecture",
            "Authentication & Authorization",
            "Infrastructure",
            "Docker",
            "Deployment",
            "Performance optimization",
            "Security",
            "Maintenance"
        ],
        overview: "A high-throughput Point of Sale (POS) and retail management platform engineered for real-time transactional processing, multi-outlet inventory synchronization, and secure audit logging.",
        businessProblem: "Retail outlets required instant checkout processing, reliable stock tracking across multiple locations, and audit-proof financial logs without latency bottlenecks during peak business hours.",
        architectureDiagram: "Frontend (Next.js / React) ──> Nginx API Gateway ──> FastAPI Microservices ──> Redis Cache & Queue ──> PostgreSQL Cluster ──> Docker Container Suite",
        engineeringDecisions: [
            "Selected FastAPI (Python) for asynchronous I/O request processing, delivering sub-50ms API response latency under concurrent load.",
            "Architected PostgreSQL relational schemas with strict B-Tree index partitioning on transaction ledger tables for fast range queries.",
            "Implemented Redis for distributed lock management on inventory updates to eliminate race conditions during simultaneous sales across registers.",
            "Containerized application services using multi-stage Docker builds, shrinking container image footprint by 65% and enforcing non-root container security."
        ],
        techStack: ["FastAPI", "Python", "React", "Next.js", "PostgreSQL", "Redis", "Docker", "Nginx", "GitLab CI/CD", "JWT Auth"],
        challenges: "Resolving concurrency conflicts during offline-to-online transaction sync across distributed POS terminals.",
        outcome: "Successfully deployed to production, maintaining 99.9% uptime and handling thousands of daily retail transactions seamlessly.",
        lessonsLearned: "Decoupling heavy financial calculations into background queue workers guarantees high API availability even during database query spikes."
    },
    {
        id: "sazara-afya",
        name: "Sazara Afya",
        url: "https://afya.sazara.co.ke",
        status: "Production",
        roles: ["Backend Engineer", "DevSecOps Engineer"],
        responsibilities: [
            "Backend services",
            "REST APIs",
            "Infrastructure",
            "Docker",
            "Deployment",
            "Authentication",
            "Security",
            "Performance",
            "Maintenance"
        ],
        overview: "An enterprise healthcare data platform designed for secure patient record management, clinical appointment workflows, and HIPAA-aligned data security.",
        businessProblem: "Healthcare providers needed a centralized, tamper-resistant system to store electronic medical records (EMR) with strict role-based access controls and compliance auditing.",
        architectureDiagram: "Web Application Client ──> Nginx Reverse Proxy ──> Secure REST API (FastAPI) ──> OAuth2 / RBAC Auth Engine ──> Encrypted PostgreSQL ──> Docker Host",
        engineeringDecisions: [
            "Engineered granular Role-Based Access Control (RBAC) middleware enforcing least-privilege data access across medical roles.",
            "Enforced field-level encryption for sensitive patient health identifiers in PostgreSQL at rest and TLS 1.3 encryption in transit.",
            "Integrated automated static security analysis (SAST) and container vulnerability scanning into the deployment pipeline."
        ],
        techStack: ["FastAPI", "Python", "Node.js", "PostgreSQL", "Docker", "OAuth2 / RBAC", "Tailwind CSS", "Linux"],
        challenges: "Enforcing zero-trust access control without degrading query response times for doctors reviewing long patient histories.",
        outcome: "Production rollout serving healthcare facilities with zero security vulnerabilities flagged in independent audits.",
        lessonsLearned: "Implementing security controls directly within data access abstractions guarantees compliance regardless of API endpoint expansion."
    },
    {
        id: "elimos",
        name: "Elimos",
        status: "In Development",
        roles: ["Backend Engineer", "Infrastructure Engineer"],
        responsibilities: [
            "Backend development",
            "Database architecture",
            "Infrastructure",
            "Deployment",
            "Performance optimization"
        ],
        overview: "A cloud-native educational portal built for digital course delivery, assignment processing, and real-time student performance metrics.",
        businessProblem: "Educational institutions require unified software to replace fragmented legacy tools with a scalable platform capable of handling deadline submission spikes.",
        architectureDiagram: "Student / Faculty Web Portal ──> API Gateway (Express.js) ──> Modular Microservices ──> Redis Cache & Celery Task Queue ──> PostgreSQL Database ──> Docker Infrastructure",
        engineeringDecisions: [
            "Architected modular microservices separating user identity, assignment submission, and grading services to prevent cascading failures.",
            "Implemented database connection pooling and Redis caching for student dashboard widgets, reducing DB load by 70%.",
            "Established Docker Compose staging and production blueprints for one-command cloud deployments."
        ],
        techStack: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "GitHub Actions", "Tailwind CSS"],
        challenges: "Designing scalable schema structures capable of handling high-volume concurrent file submissions during assignment submission deadlines.",
        outcome: "Core microservice architecture successfully benchmarked for high-concurrency submission loads.",
        lessonsLearned: "Offloading file validation and processing to background task queues keeps frontend API interfaces responsive."
    },
    {
        id: "school-management-system",
        name: "School Management System",
        status: "Production",
        roles: ["Backend Engineer", "DevSecOps Engineer"],
        responsibilities: [
            "Backend architecture",
            "REST APIs",
            "Authentication",
            "PostgreSQL",
            "Infrastructure",
            "Docker",
            "Deployment",
            "CI/CD",
            "Production monitoring"
        ],
        overview: "An enterprise administrative platform managing student enrollment, academic transcript generation, fee ledger accounting, and staff payroll.",
        businessProblem: "Schools needed an integrated, auditable solution to automate manual paper processes and secure student academic records against unauthorized tampering.",
        architectureDiagram: "Admin & Faculty Portal ──> RESTful API Gateway ──> Django REST Framework Core ──> PostgreSQL Database ──> Prometheus Exporter ──> Grafana Dashboard",
        engineeringDecisions: [
            "Built secure RESTful APIs using Django REST Framework, leveraging Django's native ORM security for automated SQL injection protection.",
            "Configured Prometheus exporters and Grafana dashboards to monitor container metrics, memory consumption, and database connection health in production.",
            "Containerized the entire stack using Docker Compose and established automated CI/CD deployment pipelines."
        ],
        techStack: ["Django", "Python", "PostgreSQL", "Docker", "Prometheus", "Grafana", "GitLab CI", "Linux"],
        challenges: "Migrating legacy, unnormalized spreadsheet data into strict relational database schemas while maintaining historical integrity.",
        outcome: "Deployed in production, streamlining administrative operations for hundreds of students and faculty members.",
        lessonsLearned: "Proactive telemetry and infrastructure monitoring significantly reduce Mean Time to Resolution (MTTR) for system incidents."
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
    githubUrl?: string;
}

export const personalProjects: PersonalProject[] = [
    {
        id: "threat-intel-log-inspector",
        name: "ThreatIntel Log Inspector & Parser",
        overview: "A high-performance security log parsing engine that ingests real-time syslog data and cross-references event indicators against STIX/TAXII threat intelligence feeds.",
        problem: "Security teams receive millions of raw log entries daily, making manual correlation against active IP blocklists and threat signatures impossible.",
        solution: "Engineered an automated Python log processing service using FastAPI and Redis that correlates incoming syslogs with active IOC (Indicators of Compromise) databases in sub-millisecond lookups.",
        architecture: "Syslog Stream ──> FastAPI Collector ──> Redis In-Memory Hash Matcher ──> PostgreSQL Event Store ──> Grafana Dashboard",
        techStack: ["Python", "FastAPI", "Redis", "PostgreSQL", "Docker", "Bash", "Linux"],
        challenges: "Processing high-velocity log bursts without dropping UDP syslog packets during network traffic spikes.",
        engineeringDecisions: [
            "Utilized Redis set membership algorithms for O(1) IP and domain hash matching against 100,000+ threat feed records.",
            "Implemented asynchronous batch insertion into PostgreSQL to prevent database lock contention."
        ],
        lessonsLearned: "In-memory data structures provide massive speedups for real-time security pattern matching over raw SQL queries."
    },
    {
        id: "devsecops-auth-gateway",
        name: "DevSecOps Microservice Auth Proxy",
        overview: "A lightweight reverse proxy and authorization gateway enforcing JWT validation, RBAC policy checks, and secret management.",
        problem: "Duplicating authentication logic across multiple backend microservices increases code maintenance debt and introduces security drift.",
        solution: "Built a centralized auth proxy that intercepts inbound HTTP requests, verifies cryptographic signatures, validates cached permissions, and injects validated user headers.",
        architecture: "Client Request ──> DevSecOps Auth Proxy ──> Infisical Secret Manager ──> Redis Token Cache ──> Internal Microservices",
        techStack: ["Node.js", "Express.js", "TypeScript", "Infisical", "Redis", "Docker", "JWT"],
        challenges: "Maintaining sub-10ms proxy latency overhead while fetching secret keys and performing signature checks on every request.",
        engineeringDecisions: [
            "Integrated Infisical for centralized secret management, ensuring API keys are never stored in source code repositories.",
            "Cached public signing keys in Redis with TTL automatic rotation to minimize external key-store roundtrips."
        ],
        lessonsLearned: "Centralizing security boundary checks simplifies downstream microservice logic and hardens the overall platform attack surface."
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
        id: "forensic-artifact-examiner",
        name: "Digital Forensic Disk & Artifact Examiner",
        institution: "USIU-Africa — Digital Forensics & Cybercrime",
        overview: "A Python-based forensic investigation tool designed to parse RAW disk images, extract Windows registry hives, event logs, and prefetch files, generating cryptographic chain-of-custody audit logs.",
        systemDesign: "Modular forensic parser pipeline leveraging `pytsk3` disk inspection bindings with SHA-256 evidence hashing.",
        techStack: ["Python", "Linux", "PyTSK3", "SQLite", "Bash", "Forensic Suite"],
        problemSolving: "Enforced strict non-destructive read-only file system mounting to guarantee physical media integrity for courtroom admissible evidence.",
        architecture: "RAW Disk Image (.dd) ──> Read-Only Layer ──> Forensic Parser Engine ──> SHA-256 Hashing ──> SQLite Timeline Database"
    },
    {
        id: "pcap-packet-anomaly-inspector",
        name: "Network PCAP Malicious Anomaly Inspector",
        institution: "USIU-Africa — Digital Forensics & Cybercrime",
        overview: "A packet analysis tool built to inspect raw network PCAP captures for DNS tunneling exfiltration, ICMP covert channels, and signature-based malicious traffic signatures.",
        systemDesign: "Asynchronous packet capture inspector built with Scapy and TShark bindings utilizing regex payload pattern matching.",
        techStack: ["Python", "Scapy", "Wireshark / TShark", "Linux", "Bash"],
        problemSolving: "Optimized payload regex matching algorithms to process multi-gigabyte PCAP files without memory exhaustion.",
        architecture: "PCAP Capture Stream ──> Scapy Decoder ──> Anomaly Signature Matcher ──> Threat Alert Engine ──> Structured Report"
    }
];

export const technicalSkills = {
    languages: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "Bash"],
    frontend: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    backend: ["FastAPI", "Django", "Flask", "Node.js", "Express.js"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    devSecOps: ["Docker", "Docker Compose", "Kubernetes", "GitHub Actions", "Linux", "Infisical", "k9s", "Prometheus", "Grafana", "Celery"],
    cybersecurity: ["Secure API Design", "Authentication & Authorization", "RBAC", "Digital Forensics", "Infrastructure Security", "Security Best Practices"]
};

export const professionalExperience = [
    {
        role: "Software Engineer (Full-Stack, Backend, DevSecOps)",
        company: "SynthaHub",
        location: "Nairobi, Kenya (Remote)",
        period: "June 2025 - Present",
        description: "Architect and engineer production-grade full-stack web applications, secure RESTful APIs, and cloud infrastructure deployments.",
        responsibilities: [
            "Designed and deployed secure RESTful APIs and backend services using FastAPI, Node.js, and Django.",
            "Structured and optimized PostgreSQL and MongoDB relational and document database schemas for high-concurrency throughput.",
            "Containerized application workloads using Docker and Docker Compose, establishing automated CI/CD deployment pipelines.",
            "Implemented Prometheus and Grafana observability dashboards to track server metrics, API latency, and database query performance.",
            "Integrated AI APIs and secure data pipelines for automated processing and user data workflows."
        ],
        techStack: ["FastAPI", "Node.js", "Django", "PostgreSQL", "Docker", "DevSecOps", "Prometheus", "Grafana", "React", "Next.js"]
    },
    {
        role: "IT & Cybersecurity Engineer Intern",
        company: "Royal Media Services (RMS)",
        location: "Nairobi, Kenya",
        period: "Jan 2026 - April 2026",
        description: "Engineered interaction tracking system optimizations, supported high-scale enterprise CMS infrastructure, and managed security operations.",
        responsibilities: [
            "Optimized a high-scale Content Management System (CMS) interaction tracking system by refactoring O(n²) bottlenecks, using pre-aggregation and batching to cut database query latency.",
            "Assisted in architecting 'NewsVault' media storage optimizations for historical news repository search and retrieval capabilities.",
            "Monitored security event logs and managed endpoint defense systems using Sophos and Octopus security platforms.",
            "Maintained enterprise hardware, network routing, system administration, and technical support infrastructure."
        ],
        techStack: ["Query Optimization", "CMS Architecture", "Sophos", "Octopus", "System Administration", "Enterprise Infrastructure", "NewsVault"]
    }
];

export const certifications = [
    {
        title: "Certified Web Developer",
        issuer: "PLP Africa",
        year: "2025",
        description: "Comprehensive software engineering certification covering full-stack web application development, database design, modern frameworks, and secure programming practices."
    },
    {
        title: "Professional Ethics in Cybersecurity & Digital Forensics",
        issuer: "USIU-Africa",
        year: "2025",
        description: "Professional credential focusing on legal compliance standards, evidence handling integrity, chain-of-custody protocols, and ethical security practices."
    },
    {
        title: "Digital Forensics & Forensic Investigation",
        issuer: "USIU-Africa",
        year: "2026",
        description: "Advanced investigation credential covering disk artifact extraction, file system analysis, memory forensics, network packet analysis, and incident response."
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
            name: "sazara-pos-backend",
            description: "Production FastAPI backend service for multi-outlet POS transaction ledger, real-time inventory locking, and audit logs.",
            language: "Python",
            stars: 14,
            forks: 5,
            url: "https://github.com/itslynett"
        },
        {
            name: "devsecops-auth-gateway",
            description: "Lightweight reverse proxy enforcing JWT validation, RBAC policy checks, and Infisical secret management.",
            language: "TypeScript",
            stars: 9,
            forks: 3,
            url: "https://github.com/itslynett"
        },
        {
            name: "digital-forensics-toolkit",
            description: "Python forensic artifact parser and timeline generator for disk images (.dd) and system log files.",
            language: "Python",
            stars: 18,
            forks: 6,
            url: "https://github.com/itslynett"
        }
    ]
};

/* Backward compatibility exports for legacy unused components */
export const philosophy = [
    {
        title: "Discipline & Fitness",
        description: "Physical resilience fuels mental clarity. The discipline built in physical fitness translates directly to solving complex backend bottlenecks."
    },
    {
        title: "Continuous Learning",
        description: "Backend architecture and cloud security threats never stop evolving. Staying ahead through continuous learning is an engineering standard."
    },
    {
        title: "Security by Design",
        description: "Security is not a checkbox at the end; it is built into system architecture from day one."
    }
];

export const services = [
    {
        icon: Server,
        title: "Backend Engineering",
        description: "Designing scalable, secure RESTful APIs using FastAPI, Node.js (Express), and Django."
    },
    {
        icon: Database,
        title: "Database Architecture",
        description: "Designing schemas and optimizing queries for PostgreSQL, MongoDB, and Redis."
    },
    {
        icon: Shield,
        title: "Security Hardening",
        description: "Implementing secure coding standards, OAuth2/JWT authentication, and data validation."
    }
];

export const projects = [
    {
        title: "Sazara POS System",
        description: "A production-ready Point of Sale platform engineered with FastAPI, PostgreSQL, and Docker.",
        image: "/images/project-1.svg",
        tags: ["FastAPI", "React", "PostgreSQL", "Docker"],
        links: { demo: "https://pos.sazara.co.ke/", github: "https://github.com/itslynett" }
    }
];
