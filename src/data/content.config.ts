// ─────────────────────────────────────────────────────────────
// content.config.ts — All portfolio data lives here.
// Edit this file to update content. Never touch UI code.
// ─────────────────────────────────────────────────────────────

// ── Types ────────────────────────────────────────────────────

export type StockColor =
  | "cream"
  | "yellow"
  | "magenta"
  | "teal"
  | "cobalt"
  | "lime"
  | "violet"
  | "orange";

export type EntryStatus = "In-Progress" | "Completed" | "Posted";

export interface SiteConfig {
  name: string;
  title: string;
  location: string;
  email: string;
  description: string;
  siteUrl: string;
  social: SocialLink[];
  knowsAbout: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  icon: string; // Glyph name
}

export interface WorkEntry {
  company: string;
  role: string;
  period: string;
  dateRange: [string, string | null];
  status: EntryStatus;
  stock: StockColor;
  tags: string[];
  summary: string;
  bullets?: string[];
}

export interface ProjectEntry {
  name: string;
  tagline: string;
  period: string;
  status: EntryStatus;
  stock: StockColor;
  tags: string[];
  summary: string;
  github?: string;
  website?: string;
  featured?: boolean;
}

export interface CertEntry {
  name: string;
  issuer: string;
  date: string;
  status: EntryStatus;
  stock: StockColor;
  credentialId?: string;
}

export interface EduEntry {
  institution: string;
  degree: string;
  period: string;
  status: EntryStatus;
  stock: StockColor;
  summary?: string;
}

export interface VolunteerEntry {
  org: string;
  role: string;
  period: string;
  status: EntryStatus;
  stock: StockColor;
  summary?: string;
}

export interface TickerEntry {
  date: string;
  org: string;
  detail: string;
  status: "In-Progress" | "Completed";
}

export interface NavItem {
  label: string;
  href: string;
  stock: StockColor;
}

// ── Site Config ──────────────────────────────────────────────

export const site: SiteConfig = {
  name: "Achhaya Pathak",
  title: "Software Engineer",
  location: "Delhi, India",
  email: "achhaya.pathak.dev@gmail.com",
  description:
    "IIT Guwahati MS alum & Backend Engineer with 3 years of building systems that actually scale. I shipped a 0→1 marketplace serving 100K+ monthly requests at 99.99% uptime. Big fan of distributed systems, cloud infra, and writing blazingly fast code 🚀",
  siteUrl: "https://achhaya.com",
  social: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/achhayapathak",
      label: "linkedin/achhayapathak",
      icon: "card",
    }
  ],
  knowsAbout: [
    "Go",
    "Python",
    "TypeScript",
    "Kubernetes",
    "Docker",
    "Terraform",
    "AWS",
    "PostgreSQL",
    "Redis",
    "Kafka",
    "gRPC",
    "Distributed Systems",
  ],
};

// ── Navigation ───────────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: "Overview", href: "/", stock: "cream" },
  { label: "Work", href: "/work", stock: "lime" },
  { label: "Projects", href: "/projects", stock: "cobalt" },
  // { label: "certifications", href: "/certifications", stock: "violet" }, // Temporarily disabled for future blog section
  { label: "Education", href: "/education", stock: "yellow" },
  { label: "Volunteering", href: "/volunteering", stock: "magenta" },
  { label: "Contact", href: "/contact", stock: "orange" },
];

// ── Work Experience ──────────────────────────────────────────

export const work: WorkEntry[] = [
  {
    company: "JoinUp",
    role: "Co-Founder",
    period: "March 2025 - Present",
    dateRange: ["2025-03", null],
    status: "In-Progress",
    stock: "teal",
    tags: ["Leadership", "Growth", "Next.js", "TypeScript", "Python", "PostgreSQL", "Redis", "Docker", "AWS"],
    summary:
      "JoinUp is on a mission to make professional events more discoverable and accessible. By connecting attendees with relevant conferences, meetups, workshops, and networking opportunities, JoinUp helps people learn, connect, and grow their careers. For hosts, it's an entire operating system for them.",
    bullets: [
      "Architected and scaled JoinUp (0→1), a production-grade professional events marketplace, owning end-to-end backend, infrastructure, and deployment across AWS and GCP.",
      "Built an SEO-optimised Next.js (App Router) frontend with SSR, dynamic metadata, and sitemap/robots configuration, driving 3,000+ organic users/month, improving website conversion by 8%.",
      "Designed a geo-spatial discovery system (Google Maps API + PostgreSQL) delivering low-latency, location-based recommendations to 500+ DAU at sub-500ms p99.",
      "Implemented Python-based event crawlers and ETL pipelines with Redis caching, PostgreSQL-powered event matching, and built-in admin dashboard for event managers."
    ]
  },
  {
    company: "Marlin",
    role: "Software Engineer",
    period: "Apr 2025 - May 2026",
    dateRange: ["2025-04", "2026-05"],
    status: "Completed",
    stock: "yellow",
    tags: ["Rust", "Agentic AI", "LLM", "RabbitMQ", "Kubernetes", "Microservices"],
    summary:
      "Built an autonomous LLM-driven trading AI agent that executes fully automated token trades on Hyperliquid, based on the condition set by user such as market trends, community sentiment, recent news, tweets, etc. It can also be used to copy trade of sharks or whales.",
    bullets: [
      "Architected a fault-tolerant microservices system (Executor/Evaluator/Flusher) using RabbitMQ, enabling horizontal scalability, fault isolation, and zero-downtime processing 50+ real-time market signals per minute.",
      "Designed resilient queue-based orchestration with ack/nack semantics, retries, and auto-reconnect mechanisms, reducing system failures in AI-driven decision pipelines.",
      "Deployed and managed Kubernetes clusters within Confidential Virtual Machines (CVMs), establishing a zero-trust environment for highly secure AI-sensitive data transfer and processing.",
    ],
  },
  {
    company: "Gist Impact",
    role: "Software Development Engineer",
    period: "Feb 2024 - Apr 2025",
    dateRange: ["2024-02", "2025-04"],
    status: "Completed",
    stock: "cream",
    tags: ["Python", "PostgreSQL", "Snowflake", "ETL", "CI/CD", "Grafana Stack", "AWS"],
    summary:
      "Managed and scaled infrastructure for SaaS and DaaS platforms powering AI-assisted sustainability analytics workflows, processing ~5 TB of data per month. Worked on enhancing the existing platform's reliability, scalability, and performance.",
    bullets: [
      "Re-engineered and optimised CI/CD pipelines using GitHub Actions, parallelising build stages, caching dependencies, and eliminating redundant test runs, cutting deployment time from 30 minutes to 5 minutes (6x improvement).",
      "Automated ETL pipelines in Snowflake, reducing data processing time by 80% and significantly improving the reliability and consistency of production data flows.",
      "Consolidated service logs into a centralised Grafana Stack observability framework, reducing error resolution time by 35% and increasing deployment velocity by 20%.",
      "Streamlined and optimised data ingestion and processing workflows for both SaaS and DaaS platforms, resulting in an 80% reduction in data processing time and a significant improvement in overall system reliability and performance."
    ],
  },
  {
    company: "Aristocrat Gaming",
    role: "Game Developer",
    period: "Aug 2023 - Jan 2024",
    dateRange: ["2023-08", "2024-01"],
    status: "Completed",
    stock: "magenta",
    tags: ["JavaScript", "C++", "Simulation"],
    summary:
      "Designed mathematical models and wrote simulation codes for slot games, calculating return to player percentages, hit frequencies, and other metrics as appropriate for markets across the Globe. Crafted a highly optimised simulation code for the Super Grand Star slot game, establishing a benchmark of excellence within the organisation. The optimised code significantly reduced simulation runtime from 10 hours to 2.5 hours.",
  },
  {
    company: "Indian Institute of Technology, Indore",
    role: "Summer Research Intern",
    period: "April 2021 - May 2021",
    dateRange: ["2021-04", "2021-05"],
    status: "Completed",
    stock: "violet",
    tags: ["MS Excel", "Python", "Tableau"],
    summary:
      "Conducted a seismic data analysis for the Hindukush region of 59255 earthquakes over the years 2000-2020. Reckoned the b-value for the target region as 1.136 ± 0.007 using the Gutenberg–Richter relation. Determined which locations are suitable for construction-related operations after carrying out a study based on a non-uniform division of the region."
  },
];

// ── Projects ─────────────────────────────────────────────────

export const projects: ProjectEntry[] = [
  {
    name: "JoinUp",
    tagline: "Event discovery & social platform",
    period: "2025 - Present",
    status: "In-Progress",
    stock: "lime",
    tags: ["Next.js", "TypeScript", "Python", "PostgreSQL", "Redis", "Docker", "AWS"],
    summary:
      "A full-stack event marketplace for discovering, creating, and joining local events. Built with a microservices backend in TypeScript and a Next.js frontend. JoinUp provides a personalised feed of events to users based on their interests and preferences. For hosts, its an end-to-end booking management and verification solution.",
    github: "https://github.com/joinupdev",
    website: "https://joinup.dev",
    featured: true,
  },
  {
    name: "Distributed Document Search",
    tagline: "Production grade distributed search service",
    period: "2026",
    status: "Completed",
    stock: "magenta",
    tags: ["TypeScript", "Distributed Systems", "Multi-tenancy", "Elasticsearch", "Kafka", "Redis", "AWS"],
    summary:
      "A working prototype of a distributed document search service demonstrating enterprise-grade architectural patterns including multi-tenancy, async processing, caching, and full-text search. The service is capable of searching a text among millions of files with a sub-200 ms speed.",
    github: "https://github.com/achhayapathak/distributed-document-search",
  },
  {
    name: "Event Aggregation Engine",
    tagline: "Event aggregation engine for event discovery platforms",
    period: "2026 - Present",
    status: "In-Progress",
    stock: "teal",
    tags: ["Python", "Agentic AI", "RabbitMQ", "Firecrawl", "Redis", "VectorDB"],
    summary:
      "An event aggregation engine for event discovery platforms. It aggregates events from various sources and returns them in a centralised location with a consistent format and structure using Agentic AI.",
    github: "https://github.com/joinupdev",
  },
  {
    name: "Job Assist AI",
    tagline: "AI tool for job applications",
    period: "2026 - Present",
    status: "In-Progress",
    stock: "violet",
    tags: ["TypeScript", "Agentic AI", "Automation", "LLM", "Next.js"],
    summary:
      "An AI tool to help with job applications. It takes your resume, crawls the internet for relevant jobs for you, extracts the most important details from job descriptions along with recruiter details, and helps you generate an ATS friendly version of your resume for each application.",
    github: "https://github.com/achhayapathak/job-assist-ai-backend",
  },
  {
    name: "Termtalk",
    tagline: "Secure CLI Chat",
    period: "2024 - 2025",
    status: "Completed",
    stock: "orange",
    tags: ["Websockets", "JavaScript", "CLI", "NPM"],
    summary:
      "Engineered an open-source NPM package enabling secure, real-time communication between remote systems via the terminal using Node.js and Socket.io. Maintained high-level security through measures like local server hosting, encrypted message transmission, and automatic chat disposal upon server termination, ensuring utmost security.",
    github: "https://github.com/achhayapathak/termtalk",
    website: "https://www.npmjs.com/package/termtalk",
  },
  {
    name: "Research Publication - Blockchain",
    tagline: "Optimal Payment Splitting in Bitcoin's Lightning Network",
    period: "2023",
    status: "Completed",
    stock: "cream",
    tags: ["Bitcoin", "Lightning Network", "Smart Contracts", "Blockchain"],
    summary:
      "Studied the Blockchain trilemma and its resolution through the Lightning Network’s scalability solutions. Designed an efficient fee structure for the Lightning Network to prevent network saturation and ensure network liquidity. Developed a Dynamic Programming algorithm to minimize user expenditure on fees during payment transactions.",
    website: "https://drive.google.com/file/d/1u62MY5as4VtPEIxrFUJDhAmase0_LATJ/view?pli=1",
  }

];

// ── Certifications ───────────────────────────────────────────

export const certifications: CertEntry[] = [
  {
    name: "Summer Analytics Bootcamp",
    issuer: "INSPIRE Scholar",
    date: "2023",
    status: "Completed",
    stock: "violet",
  },
];

// ── Education ────────────────────────────────────────────────

export const education: EduEntry[] = [
  {
    institution: "Indian Institute of Technology, Guwahati",
    degree: "Master's degree, Mathematics and Computer Science",
    period: "July 2021 - June 2023",
    status: "Completed",
    stock: "yellow",
  },
  {
    institution: "Hansraj College",
    degree: "Bachelor's degree, Mathematics",
    period: "July 2018 - June 2021",
    status: "Completed",
    stock: "teal",
  },
  {
    institution: "Kendriya vidyalaya",
    degree: "High School",
    period: "July 2016 - May 2018",
    status: "Completed",
    stock: "magenta",
  },
];

// ── Volunteering ─────────────────────────────────────────────

export const volunteering: VolunteerEntry[] = [
  {
    org: "Open Source Community",
    role: "Contributor & Mentor",
    period: "2023 - Present",
    status: "Completed",
    stock: "magenta",
    summary:
      "Contributing to open-source infrastructure tools. Mentoring new contributors and reviewing pull requests.",
  },
  {
    org: "College Tech Club",
    role: "Technical Lead",
    period: "2022 - 2024",
    status: "Completed",
    stock: "teal",
    summary:
      "Led a team of 15 members. Organized hackathons, workshops on cloud computing, and technical talks.",
  },
];

// ── Ticker Entries ───────────────────────────────────────────

export const ticker: TickerEntry[] = [
  {
    date: "2025-01",
    org: "Startup (Stealth)",
    detail: "backend engineer",
    status: "In-Progress",
  },
  {
    date: "2024-06",
    org: "JoinUp",
    detail: "event platform · go · next.js · kubernetes",
    status: "In-Progress",
  },
  {
    date: "2024-03",
    org: "AWS",
    detail: "solutions architect associate · certified",
    status: "Completed",
  },
  {
    date: "2024-01",
    org: "CNCF",
    detail: "certified kubernetes administrator",
    status: "Completed",
  },
  {
    date: "2023-06",
    org: "Previous Company",
    detail: "software engineer · python · terraform",
    status: "Completed",
  },
  {
    date: "2023-03",
    org: "Infra Toolkit",
    detail: "terraform modules · aws · open source",
    status: "Completed",
  },
];

// ── Section Form Labels (ledger-style) ───────────────────────

export const sectionMeta = {
  overview: {
    form: "OV-00",
    subtitle: "index of records",
    title: "Overview",
    info: "Everything on this page in brief — the latest two entries from each section, with the full ledger one click away!",
    stock: "cream" as StockColor,
  },
  work: {
    form: "WK-01",
    subtitle: "roles & employment",
    title: "Work",
    info: "Every role I've held, from big tech to early-stage startups — detailed accounts of responsibilities, projects, and outcomes.",
    stock: "lime" as StockColor,
  },
  projects: {
    form: "PR-02",
    subtitle: "things i have built",
    title: "Projects",
    info: "Every product that I've built, from tech demos to production systems — deep dives into problem, tech stack, and results.",
    stock: "cobalt" as StockColor,
  },
  certifications: {
    form: "CT-03",
    subtitle: "credentials & qualifications",
    title: "Certifications",
    info: "Professional certifications and technical credentials demonstrating verified expertise.",
    stock: "violet" as StockColor,
  },
  education: {
    form: "ED-04",
    subtitle: "academic record",
    title: "Education",
    info: "Formal academic background, degrees, and foundational studies in mathematics and computer science.",
    stock: "yellow" as StockColor,
  },
  volunteering: {
    form: "VL-05",
    subtitle: "community & leadership",
    title: "Volunteering",
    info: "Contributions to the open-source community, mentorship, and technical leadership outside of work.",
    stock: "magenta" as StockColor,
  },
  contact: {
    form: "CX-06",
    subtitle: "get in touch",
    title: "Contact",
    info: "Direct lines, profiles worth your time. Open to backend and platform roles.",
    stock: "orange" as StockColor,
  },
} as const;
