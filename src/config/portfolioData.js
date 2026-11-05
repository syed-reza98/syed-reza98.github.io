/**
 * Portfolio Data Configuration for Syed Salman Reza
 * "The Engineer's Ledger & Spatial Cyber-Vault"
 */

export const OPERATOR_INFO = {
    name: "Syed Salman Reza",
    shortName: "Syed Reza",
    title: "Full-Stack Software Engineer & Systems Architect",
    role: "Full-stack engineer",
    tagline: "< systems architect />",
    location: "Dhaka, Bangladesh · UTC+6",
    status: "OPEN TO WORK — FULL-TIME · REMOTE · FREELANCE",
    email: "syed.reza181@gmail.com",
    githubUrl: "https://github.com/syed-reza98",
    linkedinUrl: "https://www.linkedin.com/in/salman-reza/",
    upworkUrl: "https://upwork.com/freelancers/syed181",
    orcidUrl: "https://orcid.org/0009-0006-5258-6789",
    codestormUrl: "https://www.codestormhub.dev",
    codestormGithub: "https://github.com/CodeStorm-Hub",
    roboflowUrl: "https://universe.roboflow.com/bike-helmets/bike-helmet-detection-2vdjo",
    bio: [
        "I'm a full-stack software engineer in Dhaka, Bangladesh. For four years at Networld Technology I built the systems banks quietly depend on — electronic-journal extraction across multi-vendor ATM fleets, reconciliation microservices, modernized legacy banking apps, and POS terminal firmware in C.",
        "Today my work ships through CodeStorm Hub, the studio I founded: the PetFolio social-commerce ecosystem, the Awaken wake-up app with ML Kit pose detection, the StormCom multi-tenant SaaS, client dashboards, and a growing set of AI integrations — MCP servers, LLM tooling, and agentic workflows.",
        "I design systems end to end — architecture, data models, APIs, UI, deployment — and the standard I carry over from banking: logs must balance, transactions must reconcile."
    ],
    facts: [
        { label: "LOC", value: "Dhaka, BD (UTC+6)" },
        { label: "ROLE", value: "Full-stack engineer" },
        { label: "FOCUS", value: "SaaS · Mobile · AI" },
        { label: "VENTURE", value: "CodeStorm Hub · founder" },
        { label: "EXP", value: "4+ years" },
        { label: "EDU", value: "BSc CSE · NSU · 2022" },
        { label: "DOMAIN", value: "Fintech → SaaS / AI" },
        { label: "STATUS", value: "● OPEN TO WORK", hot: true }
    ]
};

// Projects for The Archive / Gallery Room
export const PROJECTS = [
    {
        id: "petfolio",
        title: "PETFOLIO ECOSYSTEM",
        category: "SOCIAL COMMERCE / MOBILE",
        domain: "SOCIAL COMMERCE",
        year: "2026",
        status: "IN DEVELOPMENT",
        front: "/textures/gallery/monetuneprzod.webp",
        painted: "/textures/gallery/monetuneprzod_painted.webp",
        url: "https://github.com/CodeStorm-Hub/petfolio",
        description: "A product family built end to end: a Flutter app (Riverpod, Supabase) blending social feeds, pet matching, adoption, and marketplace; a Next.js admin dashboard; and a Flask waitlist service. Spans mobile, web, database schema, and auth — one architecture, three shipped surfaces.",
        techStack: [
            "/textures/gallery/reactlogo.webp",
            "/textures/gallery/tailwindlogo.webp",
            "/textures/gallery/firebaselogo.webp",
            "/textures/gallery/jslogo.webp"
        ],
        tags: ["Flutter", "Supabase", "Next.js", "Flask", "Riverpod"]
    },
    {
        id: "awaken",
        title: "AWAKEN",
        category: "MOBILE / AI POSE TRACKING",
        domain: "MOBILE / AI",
        year: "2026",
        status: "ACTIVE DEVELOPMENT",
        front: "/textures/gallery/timberkittyprzod.webp",
        painted: "/textures/gallery/timberkittyprzod_painted.webp",
        url: "https://github.com/CodeStorm-Hub/awaken",
        description: "A cross-platform alarm and activity app: scheduled and active alarm flows, movement detection through Google ML Kit pose tracking, live location with vector maps, progress dashboards, and Supabase auth/sync across Android, iOS, and desktop targets.",
        techStack: [
            "/textures/gallery/jslogo.webp",
            "/textures/gallery/htmllogo.webp",
            "/textures/gallery/csslogo.webp",
            "/textures/gallery/reactlogo.webp"
        ],
        tags: ["Flutter", "Riverpod", "Google ML Kit", "Supabase"]
    },
    {
        id: "stormcom",
        title: "STORMCOM",
        category: "MULTI-TENANT E-COMMERCE SAAS",
        domain: "SAAS / E-COMMERCE",
        year: "2025–2026",
        status: "ACTIVE DEVELOPMENT",
        front: "/textures/gallery/youngmultiprzod.webp",
        painted: "/textures/gallery/youngmultiprzod_painted.webp",
        url: "https://github.com/CodeStorm-Hub/StormCom",
        description: "Multi-tenant commerce platform: storefronts, analytics dashboards, order processing, and drag-and-drop landing-page builder (storm-funnel), backed by component kit (stormcomui) and commerce tooling (storm-commerce-kit). Built with Next.js, TypeScript, and Prisma.",
        techStack: [
            "/textures/gallery/reactlogo.webp",
            "/textures/gallery/tailwindlogo.webp",
            "/textures/gallery/htmllogo.webp",
            "/textures/gallery/netlifylogo.webp"
        ],
        tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"]
    },
    {
        id: "ai-tooling",
        title: "AI INTEGRATIONS & TOOLING",
        category: "MCP SERVERS & AGENTIC APIS",
        domain: "AI ENGINEERING",
        year: "2025–2026",
        status: "ONGOING",
        front: "/textures/gallery/bioprzod.webp",
        painted: "/textures/gallery/bioprzod_painted.webp",
        url: "https://github.com/CodeStorm-Hub/freellmapi",
        description: "AI infrastructure toolkit: Material 3 MCP server giving coding agents design-system knowledge; freellmapi Docker client unifying free LLM APIs; and an LLM-powered GitHub Action for comment triage via Azure AI inference. Competed in AMD Developer Hackathon: ACT II on lablab.ai.",
        techStack: [
            "/textures/gallery/jslogo.webp",
            "/textures/gallery/reactlogo.webp",
            "/textures/gallery/htmllogo.webp",
            "/textures/gallery/csslogo.webp"
        ],
        tags: ["Python", "TypeScript", "MCP", "LLM APIs", "Azure AI"]
    },
    {
        id: "frahman",
        title: "F. RAHMAN & BROTHERS",
        category: "BUSINESS DASHBOARD & ANALYTICS",
        domain: "CLIENT WORK",
        year: "2026",
        status: "DELIVERED",
        front: "/textures/gallery/monetuneprzod.webp",
        painted: "/textures/gallery/monetuneprzod_painted.webp",
        url: "https://github.com/CodeStorm-Hub/frahman",
        description: "Commercial trading enterprise platform: authenticated executive dashboards with revenue and inventory visualization, transactional data tables, operational alerts, and 3D touches via React Three Fiber.",
        techStack: [
            "/textures/gallery/reactlogo.webp",
            "/textures/gallery/tailwindlogo.webp",
            "/textures/gallery/phplogo.webp",
            "/textures/gallery/csslogo.webp"
        ],
        tags: ["Next.js", "Prisma", "PostgreSQL", "R3F"]
    },
    {
        id: "netcon",
        title: "NETCON ATM LOG EXTRACTOR",
        category: "BANKING / ATM EJ PARSER",
        domain: "BANKING SYSTEMS",
        year: "2022–2023",
        status: "IN PRODUCTION",
        front: "/textures/gallery/timberkittyprzod.webp",
        painted: "/textures/gallery/timberkittyprzod_painted.webp",
        url: "https://github.com/syed-reza98",
        description: "Multi-vendor ATM and cash-recycling machines (CRM) electronic-journal parser built for Eastern Bank PLC. Modular desktop application pairing a Python Flask API backend with an ElectronJS/Quasar frontend doing real-time extraction, multi-sorting, and componentized filtering.",
        techStack: [
            "/textures/gallery/jslogo.webp",
            "/textures/gallery/phplogo.webp",
            "/textures/gallery/htmllogo.webp",
            "/textures/gallery/csslogo.webp"
        ],
        tags: ["Python Flask", "ElectronJS", "Quasar", "Financial Systems"]
    },
    {
        id: "bike-helmet",
        title: "BIKE HELMET DETECTION",
        category: "COMPUTER VISION / YOLOV4",
        domain: "COMPUTER VISION",
        year: "2020",
        status: "PUBLISHED (85.3K VIEWS)",
        front: "/textures/gallery/youngmultiprzod.webp",
        painted: "/textures/gallery/youngmultiprzod_painted.webp",
        url: "https://universe.roboflow.com/bike-helmets/bike-helmet-detection-2vdjo",
        description: "Two-class object-detection model (With Helmet / Without Helmet) trained via transfer learning from COCO. Scaled to 3,735 images with mosaic and shear augmentation, achieving 91.5% mAP@50 and 92.8% Recall.",
        techStack: [
            "/textures/gallery/jslogo.webp",
            "/textures/gallery/reactlogo.webp",
            "/textures/gallery/tailwindlogo.webp",
            "/textures/gallery/netlifylogo.webp"
        ],
        tags: ["Roboflow", "YOLOv4", "PyTorch", "Computer Vision"]
    },
    {
        id: "quantum-defense",
        title: "QUANTUM CODING DEFENSE",
        category: "QUANTUM COMPUTING RESEARCH",
        domain: "QUANTUM COMPUTING",
        year: "2022",
        status: "RESEARCH CAPSTONE",
        front: "/textures/gallery/bioprzod.webp",
        painted: "/textures/gallery/bioprzod_painted.webp",
        url: "https://github.com/syed-reza98",
        description: "Final-year capstone at North South University: quantum circuits designed to detect and prevent eavesdropping on superdense-coding channels, combining machine-learning models to automate error correction on real IBM quantum hardware.",
        techStack: [
            "/textures/gallery/htmllogo.webp",
            "/textures/gallery/csslogo.webp",
            "/textures/gallery/jslogo.webp",
            "/textures/gallery/netlifylogo.webp"
        ],
        tags: ["Qiskit", "IBM Quantum API", "Quantum Cryptography"]
    },
    {
        id: "sr600mini",
        title: "SR600MINI POS FIRMWARE",
        category: "EMBEDDED C / PAYMENTS",
        domain: "EMBEDDED SYSTEMS",
        year: "2023",
        status: "DELIVERED",
        front: "/textures/gallery/monetuneprzod.webp",
        painted: "/textures/gallery/monetuneprzod_painted.webp",
        url: "https://github.com/syed-reza98",
        description: "Firmware for dual-screen point-of-sale terminal: structured UI screens, transaction and state handling, and resource-aware display logic in embedded C against constrained hardware memory budgets.",
        techStack: [
            "/textures/gallery/phplogo.webp",
            "/textures/gallery/elementorlogo.webp",
            "/textures/gallery/csslogo.webp",
            "/textures/gallery/wordpresslogo.webp"
        ],
        tags: ["C (Embedded)", "POS Firmware", "Payment Protocols"]
    },
    {
        id: "allora",
        title: "ALLORA HYBRID COMMERCE",
        category: "CONTAINERIZED REST API",
        domain: "E-COMMERCE API",
        year: "2023–2024",
        status: "COMPLETED",
        front: "/textures/gallery/timberkittyprzod.webp",
        painted: "/textures/gallery/timberkittyprzod_painted.webp",
        url: "https://github.com/syed-reza98",
        description: "Containerized e-commerce backend pairing a Laravel + Filament administrative CMS with a Nuxt.js storefront utilizing SSR/SSG/ISR hybrid rendering with Dockerized microservices.",
        techStack: [
            "/textures/gallery/phplogo.webp",
            "/textures/gallery/reactlogo.webp",
            "/textures/gallery/tailwindlogo.webp",
            "/textures/gallery/firebaselogo.webp"
        ],
        tags: ["Laravel", "Filament", "Nuxt.js", "Docker"]
    }
];

// Experience for The Studio / Odyssey Room
export const EXPERIENCE = [
    {
        id: "codestorm",
        role: "Founder & Lead Engineer",
        company: "CodeStorm Hub",
        period: "2024 → PRESENT",
        location: "Dhaka / Remote",
        highlights: [
            "Lead a product studio (~7 engineers, 33+ repositories) shipping SaaS, mobile, and AI solutions.",
            "Building StormCom multi-tenant SaaS with visual funnel builders (storm-funnel) and stormcomui.",
            "Shipped PetFolio social-commerce ecosystem and Awaken ML Kit wake-up app.",
            "Built AI MCP servers, LLM API tooling, and competed in AMD Developer Hackathon: ACT II."
        ]
    },
    {
        id: "networld",
        role: "Software Engineer",
        company: "Networld Technology Limited",
        period: "2022-10 → 2026",
        location: "Dhaka, Bangladesh",
        highlights: [
            "Built microservices reconciliation system with Python Flask API and ElectronJS client.",
            "Shipped NetCon multi-vendor ATM/CRM electronic-journal log extractor for Eastern Bank PLC.",
            "Deployed production Laravel applications to Windows Server (IIS) and AWS with zero-downtime CI/CD.",
            "Modernized legacy .NET banking software and developed dual-screen POS firmware in C."
        ]
    },
    {
        id: "walkinroom",
        role: "Full Stack Developer",
        company: "Walkinroom",
        period: "2022-04 → 2022-09",
        location: "London, UK (Remote)",
        highlights: [
            "Developed hotel-booking platform on Laravel, Tailwind CSS, and vanilla JavaScript.",
            "Designed and indexed high-performance relational MySQL schemas.",
            "Ran structured code reviews and collaborated directly with international UI/UX and product teams."
        ]
    }
];

// Certifications
export const CERTIFICATIONS = [
    { title: "Oracle Cloud Infrastructure", role: "Solution Engineer & Sales Specialist", year: "2023" },
    { title: "Oracle Analytics", role: "Solution Engineer Specialist", year: "2024" },
    { title: "Oracle Exadata On-Premise", role: "Solution Engineer & Sales Specialist", year: "2022" },
    { title: "Oracle Database 19c", role: "Introduction to SQL · 40h Training Track", year: "2022" }
];

// Skills Capability Matrix
export const SKILLS_MATRIX = [
    {
        category: "Architecture",
        skills: ["System Design", "Microservices", "Multi-tenant SaaS", "RESTful APIs", "ETL / Data Pipelines"]
    },
    {
        category: "Backend",
        skills: ["PHP · Laravel · Filament", "Python · Flask", "Node.js · Express", "C (Embedded)", "Prisma ORM"]
    },
    {
        category: "Frontend & Mobile",
        skills: ["React · Next.js", "TypeScript", "Flutter · Dart", "ElectronJS · Quasar", "Tailwind CSS"]
    },
    {
        category: "Databases",
        skills: ["MySQL", "PostgreSQL", "Oracle Database", "Supabase", "Multi-tenant Schemas"]
    },
    {
        category: "Cloud & DevOps",
        skills: ["AWS (S3 / RDS / ECS)", "Docker", "Windows Server · IIS", "GitHub Actions CI/CD", "Zero-downtime Deploys"]
    },
    {
        category: "AI & Quantum",
        skills: ["LLM APIs · MCP Servers", "Agentic Workflows", "Roboflow · YOLOv4", "Qiskit", "IBM Quantum API"]
    }
];

// Career Log replay lines for Terminal
export const CAREER_LOG_LINES = [
    "[2018-01  09:00:12] SESSION OPEN — B.SC CSE · NORTH SOUTH UNIVERSITY, DHAKA",
    "[2020-09  14:22:41] TXN 0001 — BIKE HELMET DETECTION PUBLISHED · ROBOFLOW · YOLOV4",
    "[2022-04  10:05:33] TXN 0002 — FULL STACK DEVELOPER · WALKINROOM · LONDON (REMOTE)",
    "[2022-10  09:12:44] TXN 0003 — SOFTWARE ENGINEER · NETWORLD TECHNOLOGY · DHAKA",
    "[2023-——  03:41:09] TXN 0004 — NETCON EJ EXTRACTOR SHIPPED · EASTERN BANK PLC",
    "[2024-——  21:15:37] TXN 0005 — FOUNDED CODESTORM HUB · STORMCOM / STORMERP",
    "[2026-——  11:26:48] TXN 0006 — PETFOLIO · AWAKEN · AI INTEGRATIONS — VIA CODESTORM HUB",
    "[2026-——  17:00:00] SESSION CLOSE — NETWORLD TECHNOLOGY · 4 YEARS OF BANKING SYSTEMS",
    "[2026-07  --:--:--] STATUS   — OPEN TO WORK · FULL-TIME / REMOTE / FREELANCE ✓"
];
