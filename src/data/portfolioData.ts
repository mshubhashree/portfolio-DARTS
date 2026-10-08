export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full Stack' | 'Frontend' | 'Mobile & AI' | 'Cloud / DevOps';
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  metrics: string;
  image: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  achievements: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number; note: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Alex Rivera",
    title: "Senior Full-Stack Architect & Product Designer",
    tagline: "Building resilient cloud distributed systems & intuitive, delight-driven modern interfaces.",
    shortBio: "8+ years turning complex system requirements into sleek, scalable web and mobile software. Passionate about TypeScript, React, distributed microservices, and AI integrations.",
    location: "San Francisco, CA (Open to Remote)",
    status: "Available for high-impact roles & consultancies",
    email: "alex.rivera.dev@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    stats: [
      { label: "Years Experience", value: "8+" },
      { label: "Production Apps", value: "24+" },
      { label: "Cloud Uptime", value: "99.98%" },
      { label: "Dev Stars & Contributions", value: "2.4k+" }
    ]
  },
  skills: [
    {
      title: "Frontend Engineering",
      icon: "Layout",
      skills: [
        { name: "React 19 & Next.js 15", level: 95, note: "App router, Server Components, SSR" },
        { name: "TypeScript", level: 98, note: "Strict type systems, Generics, AST tooling" },
        { name: "Tailwind CSS & CSS Systems", level: 92, note: "Custom design tokens, fluid layouts, animation" },
        { name: "State Management", level: 90, note: "Zustand, TanStack Query, Redux Toolkit" },
        { name: "Web Performance & Core Vitals", level: 94, note: "Sub-second LCP, dynamic bundling, caching" }
      ]
    },
    {
      title: "Backend & Cloud Architecture",
      icon: "Server",
      skills: [
        { name: "Node.js & Go", level: 92, note: "High concurrency APIs, gRPC, microservices" },
        { name: "PostgreSQL & Prisma", level: 88, note: "Indexing, partitioned tables, transactions" },
        { name: "Redis & Event Streaming", level: 86, note: "Kafka, BullMQ, distributed caches" },
        { name: "AWS & Docker / K8s", level: 85, note: "ECS, Lambda, Terraform, CI/CD pipelines" },
        { name: "GraphQL & RESTful APIs", level: 92, note: "Apollo Federation, OpenAPI specifications" }
      ]
    },
    {
      title: "AI & Innovation Tooling",
      icon: "Sparkles",
      skills: [
        { name: "LLM Orchestration", level: 88, note: "LangChain, Vercel AI SDK, tool-use agents" },
        { name: "Vector Databases", level: 84, note: "Pinecone, pgvector, hybrid semantic search" },
        { name: "System Design & Testing", level: 90, note: "Vitest, Playwright E2E, Chaos testing" },
        { name: "UI/UX & Figma Prototyping", level: 85, note: "Design system specs, tokens, usability tests" }
      ]
    }
  ] as SkillCategory[],
  projects: [
    {
      id: "project-1",
      title: "NovaCloud Analytics",
      tagline: "High-throughput real-time telemetry and APM observability suite",
      description: "An enterprise telemetry intelligence platform monitoring over 12M events per minute. Built with micro-frontend React architecture, Go ingestion workers, and streaming visual dashboards.",
      category: "Full Stack",
      technologies: ["React 19", "TypeScript", "Go", "ClickHouse", "WebSockets", "Docker"],
      features: [
        "Sub-50ms live query response over multi-terabyte log data",
        "Configurable multi-tenant anomaly detection with alerting thresholds",
        "Granular role-based access control and audit logging pipeline",
        "Interactive canvas timeline visualization of distributed traces"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com/novacloud",
      metrics: "99.99% Reliability • 12M logs/min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      id: "project-2",
      title: "CognitiveFlow AI",
      tagline: "Autonomous Agent Workflow Studio with Natural Language Canvas",
      description: "Visual node-based IDE enabling development teams to assemble multi-agent reasoning loops, test prompt chains, and integrate external APIs with one-click sandbox testing.",
      category: "Mobile & AI",
      technologies: ["Next.js", "TypeScript", "Python", "FastAPI", "OpenAI SDK", "Pinecone"],
      features: [
        "Drag-and-drop reactive agent node workspace",
        "Integrated playground with instant token and latency tracking",
        "Self-correcting code synthesis pipelines with safety fallbacks",
        "Export production-ready TypeScript/Python client libraries"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com/cognitiveflow",
      metrics: "45k Active Agents • 4.9/5 Rating",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      id: "project-3",
      title: "PulsePay Merchant Terminal",
      tagline: "Frictionless cross-border multi-currency checkout & ledger infrastructure",
      description: "Unified commerce suite powering global SaaS invoicing, automated tax compliance across 48 jurisdictions, and instantaneous settlement via modern rails.",
      category: "Full Stack",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe API", "Tailwind"],
      features: [
        "Zero-latency optimistic UI updates with automatic conflict resolution",
        "PCI-DSS Level 1 compliant vault integration & cryptographic signing",
        "Smart invoice reminders & dynamic dunning campaigns",
        "Interactive real-time conversion & MRR financial reporting"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com/pulsepay",
      metrics: "$240M Processed • Zero downtime",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      id: "project-4",
      title: "DevSprint Kanban & Agile Hub",
      tagline: "Real-time collaborative developer velocity & issue management platform",
      description: "Ultra-fast developer workspace replacing clunky task trackers with keyboard-first workflows, git integration hooks, and sprint burndown projections.",
      category: "Frontend",
      technologies: ["React", "TypeScript", "Zustand", "Tailwind CSS", "Vite", "IndexedDB"],
      features: [
        "100% offline-first functionality powered by local IndexedDB sync",
        "Full keyboard shortcut navigation (Vim / Slack style keybindings)",
        "Automated GitHub pull request linkage and automated branch tracking",
        "Customizable workflow swimlanes with dynamic tag filters"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com/devsprint",
      metrics: "Sub-16ms Framerate • Offline First",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
      featured: false
    },
    {
      id: "project-5",
      title: "KubeShield Guard",
      tagline: "Kubernetes Cluster Vulnerability & Policy Hardening Operator",
      description: "Cloud-native daemon inspects running Kubernetes workloads against CIS benchmarks, catching misconfigured RBAC rules and insecure container permissions before production rollout.",
      category: "Cloud / DevOps",
      technologies: ["Go", "Kubernetes", "Helm", "Prometheus", "Grafana", "Bash"],
      features: [
        "Live scanning of container registries and root permission escalation",
        "Automated pull-request annotations for infrastructure drift",
        "Out-of-the-box Grafana compliance dashboards and SLA metrics",
        "Lightweight DaemonSet with minimal memory footprint (<30MB)"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com/kubeshield",
      metrics: "3.2k GitHub Stars • Cloud Native",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80",
      featured: false
    },
    {
      id: "project-6",
      title: "Aura Mobile Wellness",
      tagline: "Biometric feedback & mindfulness coach powered by on-device ML",
      description: "Cross-platform mobile companion tracking cognitive fatigue rhythms, recommending restorative breathing intervals, and synchronizing with Apple Health & Google Fit.",
      category: "Mobile & AI",
      technologies: ["React Native", "TypeScript", "CoreML", "SQLite", "Tailwind"],
      features: [
        "On-device neural inference ensuring full end-to-end data privacy",
        "Smooth 120Hz haptic feedback and generative audio soundscapes",
        "Wearable biometric sync with historical circadian pattern analysis",
        "Interactive weekly habit streak reports and cognitive wellness scores"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com/aura",
      metrics: "120k Downloads • 4.8 App Store",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80",
      featured: false
    }
  ] as Project[],
  experiences: [
    {
      id: "exp-1",
      role: "Lead Full-Stack Architect",
      company: "Stratosphere Cloud Systems",
      period: "2022 — Present",
      location: "San Francisco, CA",
      type: "Full-Time",
      summary: "Spearheaded platform modernization migrating monolithic core to distributed event-driven microservices serving 1.8M active daily developers.",
      achievements: [
        "Engineered global edge caching tier dropping average 95th-percentile API response latency from 340ms to 42ms.",
        "Mentored a team of 14 front-end and backend engineers, establishing comprehensive TypeScript standards and automated CI testing gates.",
        "Championed real-time WebSocket infrastructure slashing server memory overhead by 40% under peak load."
      ],
      skills: ["React 19", "Go", "TypeScript", "Kubernetes", "PostgreSQL", "Kafka"]
    },
    {
      id: "exp-2",
      role: "Senior Software Engineer",
      company: "Aetherial Labs",
      period: "2019 — 2022",
      location: "New York, NY",
      type: "Full-Time",
      summary: "Built user-facing analytics dashboards and payment flows handling over $80M in transaction volume annually.",
      achievements: [
        "Created an enterprise design system token engine utilized across 6 distinct web applications, increasing developer shipping velocity by 35%.",
        "Designed idempotent billing transaction queues preventing multi-charge scenarios during transient gateway failures.",
        "Maintained 99.98% SLA and drove migration to modern container orchestration."
      ],
      skills: ["React", "Node.js", "Docker", "GraphQL", "Redis", "Jest"]
    },
    {
      id: "exp-3",
      role: "Full-Stack Software Engineer",
      company: "Vanguard Tech Studio",
      period: "2017 — 2019",
      location: "Boston, MA",
      type: "Full-Time",
      summary: "Delivered high-impact consumer-facing web applications, client portals, and responsive interactive products for early-stage tech startups.",
      achievements: [
        "Architected scalable single-page applications achieving near 100/100 Google Lighthouse performance scores.",
        "Integrated OAuth2 / SSO multi-provider authentication mechanisms across client solutions.",
        "Collaborated tightly with product designers to ship award-winning UX interfaces."
      ],
      skills: ["JavaScript", "React", "Python", "SQL", "CSS3/SCSS", "Webpack"]
    }
  ] as Experience[],
  testimonials: [
    {
      id: "test-1",
      name: "Marcus Vance",
      role: "VP of Engineering",
      company: "Stratosphere Cloud",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      quote: "Alex is that rare 1% engineer who effortlessly bridges deep system architecture with pixel-perfect UI polish. His leadership fundamentally transformed our product delivery speed."
    },
    {
      id: "test-2",
      name: "Elena Rostova",
      role: "Head of Product",
      company: "CognitiveFlow",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      quote: "Alex took an abstract AI concept and built an intuitive, gorgeous workflow studio in record time. Our customers constantly praise how fast and fluid the application feels."
    },
    {
      id: "test-3",
      name: "David Chen",
      role: "Founder & CTO",
      company: "PulsePay Technologies",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote: "Dependable, deeply knowledgeable in distributed systems, and a joy to collaborate with. Alex saved us months of rework on our fintech core."
    }
  ] as Testimonial[]
};
