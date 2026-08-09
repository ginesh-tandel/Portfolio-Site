export const siteData = {
  name: "Ginesh Tandel",
  title: "Senior .NET Full Stack Engineer",
  tagline: "Software Architect · SaaS Builder",
  heroStatement: ["I TURN COMPLEX IDEAS", "INTO WORKING SOFTWARE."],
  supportingText: "Senior .NET Full Stack Engineer · Software Architect · SaaS Builder",
  scrollCta: "SCROLL TO BUILD →",
  yearsExperience: "11+",
} as const;

export interface Project {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  problem: string;
  approach: string;
  architecture: string[];
  product: string;
  result: string;
  capabilities: string[];
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: "logiqlead",
    number: "01",
    name: "LOGIQLEAD",
    subtitle: "Intelligent Lead Management Platform",
    problem:
      "Sales teams were drowning in manual lead qualification, scattered outreach, and zero visibility into pipeline health. Existing tools were either too simple or enterprise-heavy — nothing fit the mid-market sweet spot.",
    approach:
      "Designed a full-stack SaaS platform from scratch. Lead scoring engine, automated email sequences, SMTP/IMAP integration for real inbox management, and analytics that actually tell a story.",
    architecture: [
      "ASP.NET Core Web API",
      "Clean Architecture + CQRS",
      "EF Core + SQL Server",
      "Redis caching layer",
      "Background job processing",
      "Angular dashboard",
    ],
    product:
      "A unified lead management interface with real-time analytics, automated sequences, inbox management, and compliance-aware communication tracking.",
    result:
      "Production SaaS platform handling lead lifecycle from capture to conversion. Automated enrichment, scoring, and multi-touch email sequences.",
    capabilities: [
      "Lead management",
      "Lead enrichment",
      "Email sequences",
      "SMTP/IMAP integration",
      "Inbox management",
      "Analytics",
      "Background processing",
      "Compliance",
    ],
    technologies: ["C#", ".NET Core", "SQL Server", "Redis", "Angular", "Docker"],
  },
  {
    id: "logiqaiassist",
    number: "02",
    name: "LOGIQAIASSIST",
    subtitle: "AI-Powered Knowledge & Automation Platform",
    problem:
      "Teams needed intelligent document retrieval and task automation without the complexity of building custom AI pipelines. The gap between raw LLM capabilities and production-ready business tools was massive.",
    approach:
      "Built a retrieval-augmented generation system with structured knowledge indexing, conversational UI, and backend orchestration that makes AI actually useful for non-technical users.",
    architecture: [
      ".NET backend with AI orchestration",
      "Vector search + knowledge retrieval",
      "REST API layer",
      "Real-time streaming responses",
      "Authentication + tenant isolation",
      "Background processing",
    ],
    product:
      "An AI assistant interface that retrieves relevant knowledge, generates contextual responses, and automates routine business tasks — all with a clean, approachable UX.",
    result:
      "Production platform bridging enterprise knowledge with AI capabilities. Users interact naturally while the system handles retrieval, context management, and response generation.",
    capabilities: [
      "AI interaction",
      "Knowledge retrieval",
      "Conversational UI",
      "Backend integration",
      "Automation",
      "Real-world usability",
    ],
    technologies: [".NET", "C#", "AI/ML Integration", "REST APIs", "Docker"],
  },
  {
    id: "crm-platform",
    number: "03",
    name: "CRM PLATFORM",
    subtitle: "Enterprise Customer Relationship System",
    problem:
      "Legacy CRM systems were rigid, slow, and expensive to customize. The business needed a flexible platform that could adapt to evolving sales processes without vendor lock-in.",
    approach:
      "Architected a modular CRM with pluggable workflow engines, configurable pipelines, and a modern frontend that makes complex data feel simple.",
    architecture: [
      "ASP.NET Core",
      "Plugin architecture",
      "SQL Server",
      "Event-driven processing",
      "React frontend",
    ],
    product:
      "A modular CRM with customizable workflows, pipeline management, and reporting — designed for teams that outgrow off-the-shelf solutions.",
    result:
      "Replaced legacy system with a maintainable, extensible platform. Reduced customization time from weeks to hours.",
    capabilities: [
      "Pipeline management",
      "Workflow automation",
      "Custom reporting",
      "Multi-tenant",
      "API-first design",
    ],
    technologies: [".NET", "React", "SQL Server", "Redis", "Docker"],
  },
  {
    id: "saas-platform",
    number: "04",
    name: "SAAS PLATFORM",
    subtitle: "Multi-Tenant Product Infrastructure",
    problem:
      "Building a SaaS product requires solving ten problems before the first feature: tenancy, billing, auth, deployment, scaling, monitoring. The team needed a solid foundation, not another prototype.",
    approach:
      "Designed the core infrastructure layer — multi-tenant isolation, subscription management, role-based access, and deployment automation — so product teams could focus on features.",
    architecture: [
      ".NET multi-tenant architecture",
      "PostgreSQL with row-level security",
      "Stripe billing integration",
      "JWT + OAuth2 authentication",
      "Docker + cloud deployment",
      "Monitoring + logging",
    ],
    product:
      "A production-grade SaaS foundation supporting multiple tenants, subscription tiers, and automated deployment pipelines.",
    result:
      "Reduced new product setup time from months to weeks. Multiple products launched on the same infrastructure.",
    capabilities: [
      "Multi-tenancy",
      "Subscription billing",
      "Authentication",
      "Role-based access",
      "Deployment automation",
      "Monitoring",
    ],
    technologies: [".NET", "PostgreSQL", "Docker", "Stripe", "Redis"],
  },
];

export const architectureNodes = [
  { id: "frontend", label: "Frontend", x: 50, y: 10 },
  { id: "api", label: "API Layer", x: 50, y: 25 },
  { id: "app", label: "Application", x: 50, y: 40 },
  { id: "domain", label: "Domain", x: 50, y: 55 },
  { id: "infra", label: "Infrastructure", x: 50, y: 70 },
  { id: "db", label: "Database", x: 50, y: 85 },
  { id: "auth", label: "Authentication", x: 15, y: 30 },
  { id: "cache", label: "Caching", x: 85, y: 30 },
  { id: "jobs", label: "Background Jobs", x: 15, y: 55 },
  { id: "integrate", label: "Integrations", x: 85, y: 55 },
  { id: "messaging", label: "Messaging", x: 15, y: 70 },
  { id: "monitor", label: "Monitoring", x: 85, y: 70 },
] as const;

export const techStack = [
  {
    layer: "Product",
    items: ["Angular", "React", "TypeScript"],
  },
  {
    layer: "API",
    items: ["ASP.NET Core", "Web API", "REST"],
  },
  {
    layer: "Domain",
    items: ["C#", "Clean Architecture", "CQRS"],
  },
  {
    layer: "Data",
    items: ["SQL Server", "PostgreSQL", "MongoDB", "EF Core"],
  },
  {
    layer: "Cache",
    items: ["Redis"],
  },
  {
    layer: "Infrastructure",
    items: ["Docker", "Background Jobs", "Cloud"],
  },
  {
    layer: "Security",
    items: ["Authentication", "OAuth2", "JWT"],
  },
];

export const problems = [
  {
    title: "LEGACY SYSTEMS.",
    description: "Monolithic architectures that nobody wants to touch but everyone depends on.",
    transformation: "Analysis → Strangler Fig Pattern → Incremental Migration → Zero Downtime",
  },
  {
    title: "SCALABILITY.",
    description: "Systems that work for 100 users but break at 10,000.",
    transformation: "Profiling → Bottleneck Analysis → Architecture Redesign → Horizontal Scaling",
  },
  {
    title: "PERFORMANCE.",
    description: "Slow queries, memory leaks, and response times that grow with data.",
    transformation: "Monitoring → Query Optimization → Caching Strategy → Sub-100ms Responses",
  },
  {
    title: "INTEGRATION COMPLEXITY.",
    description: "Dozens of systems that need to talk without creating a spaghetti mess.",
    transformation: "API Design → Event-Driven Architecture → Resilient Pipelines → Clean Contracts",
  },
  {
    title: "TECHNICAL DEBT.",
    description: "Code that works but costs more to modify than to rewrite.",
    transformation: "Assessment → Prioritized Refactoring → Test Coverage → Sustainable Patterns",
  },
  {
    title: "AMBIGUOUS REQUIREMENTS.",
    description: "Stakeholders who know what they want but can't articulate it.",
    transformation: "Discovery → Prototyping → Feedback Loops → Delivered Solution",
  },
];

export const experience = [
  {
    year: "2015",
    role: "Junior Developer",
    description: "Started building web applications. Learned the fundamentals of .NET, SQL Server, and the art of turning requirements into working software.",
    technologies: ["C#", ".NET", "SQL Server", "JavaScript"],
  },
  {
    year: "2018",
    role: "Full Stack Developer",
    description: "Expanded into full-stack development. Built end-to-end features, designed APIs, and started thinking about architecture rather than just code.",
    technologies: [".NET Core", "Angular", "REST APIs", "Entity Framework"],
  },
  {
    year: "2021",
    role: "Senior Engineer & Architect",
    description: "Led technical architecture for SaaS products. Designed multi-tenant systems, implemented Clean Architecture, and mentored teams.",
    technologies: ["ASP.NET Core", "Clean Architecture", "CQRS", "Docker", "Redis"],
  },
  {
    year: "2024",
    role: "Software Architect & Consultant",
    description: "Consulting engagements across industries. Legacy modernization, system design, and building products from zero to production.",
    technologies: [".NET", "PostgreSQL", "Cloud", "AI Integration", "System Design"],
  },
  {
    year: "2026",
    role: "Building Products & Systems",
    description: "Product engineering, SaaS platforms, AI-enabled applications, and select consulting engagements.",
    technologies: [".NET", "AI/ML", "Full-Stack Systems", "Product Engineering"],
  },
];

export const currentFocus = [
  "Product engineering for SaaS platforms",
  "Full-stack systems with AI integration",
  "Legacy modernization consulting",
  "Remote engineering engagements",
  "Building tools that solve real problems",
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const socialLinks = {
  github: "https://github.com/gineshtandel",
  linkedin: "https://linkedin.com/in/gineshtandel",
  email: "hello@gineshtandel.dev",
} as const;
