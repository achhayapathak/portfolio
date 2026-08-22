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
  link?: string;
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
  { label: "overview", href: "/", stock: "cream" },
  { label: "work", href: "/work", stock: "lime" },
  { label: "projects", href: "/projects", stock: "cobalt" },
  // { label: "certifications", href: "/certifications", stock: "violet" }, // Temporarily disabled for future blog section
  { label: "education", href: "/education", stock: "yellow" },
  { label: "volunteering", href: "/volunteering", stock: "magenta" },
  { label: "contact", href: "/contact", stock: "orange" },
];

// ── Work Experience ──────────────────────────────────────────

export const work: WorkEntry[] = [
  {
    company: "JoinUp",
    role: "Co-Founder",
    period: "March 2025 - Present",
    dateRange: ["2025-03", null],
    status: "In-Progress",
    stock: "lime",
    tags: ["Next.js", "TypeScript", "Python", "PostgreSQL", "Redis", "Docker", "AWS"],
    summary:
      "JoinUp is on a mission to make professional events more discoverable and accessible. By connecting attendees with relevant conferences, meetups, workshops, and networking opportunities, JoinUp helps people learn, connect, and grow their careers."
  },
  {
    company: "Marlin",
    role: "Software Engineer",
    period: "Apr 2025 - May 2026",
    dateRange: ["2025-04", "2026-05"],
    status: "Completed",
    stock: "yellow",
    tags: ["Kubernetes", "RabbitMQ", "LLMs", "Microservices"],
    summary:
      "Built an autonomous LLM-driven trading AI agent that executes fully automated token trades on Hyperliquid, processing real-time market data with sub-2000ms decision latency(p95).",
    bullets: [
      "Architected a fault-tolerant microservices system (Executor/Evaluator/Flusher) using RabbitMQ, enabling horizontal scalability, fault isolation, and zero-downtime processing 50+ real-time market signals per minute.",
      "Designed resilient queue-based orchestration with ack/nack semantics, retries, and auto-reconnect mechanisms, reducing system failures by 99.9%(~1000 → 2 per month) in AI-driven decision pipelines.",
      "Deployed and managed Kubernetes clusters within Confidential Virtual Machines (CVMs), establishing a zero-trust environment for highly secure AI-sensitive data transfer and processing.",
    ],
  },
  {
    company: "Gist Impact",
    role: "Software Development Engineer",
    period: "Feb 2024 - Apr 2025",
    dateRange: ["2024-02", "2025-04"],
    status: "Completed",
    stock: "teal",
    tags: ["GitHub Actions", "Snowflake", "ETL", "CI/CD", "Grafana Stack"],
    summary:
      "Managed and scaled infrastructure for SaaS and DaaS platforms powering AI-assisted sustainability analytics workflows, processing ~5 TB of data per month.",
    bullets: [
      "Re-engineered and optimised CI/CD pipelines using GitHub Actions, parallelising build stages, caching dependencies, and eliminating redundant test runs, cutting deployment time from 30 minutes to 5 minutes (6x improvement).",
      "Automated ETL pipelines in Snowflake, reducing data processing time by 80% and significantly improving the reliability and consistency of production data flows.",
      "Consolidated service logs into a centralised Grafana Stack observability framework, reducing error resolution time by 35% and increasing deployment velocity by 20%.",
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
      "Designed mathematical models and wrote simulation codes for slot games, calculating return to player percentages, hit frequencies, and other metrics as appropriate for markets across the Globe.",
    bullets: [
      "Crafted a highly optimised simulation code for the Super Grand Star slot game, establishing a benchmark of excellence within the organisation. The optimised code significantly reduced simulation runtime from 10 hours to 2.5 hours.",
    ],
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
      "Conducted a seismic data analysis for the Hindukush region of 59255 earthquakes over the years 2000-2020.",
    bullets: [
      "Reckoned the b-value for the target region as 1.136 ± 0.007 using the Gutenberg–Richter relation.",
      "Determined which locations are suitable for construction-related operations after carrying out a study based on a non-uniform division of the region.",
    ],
  },
];

// ── Projects ─────────────────────────────────────────────────

export const projects: ProjectEntry[] = [
  {
    name: "JoinUp",
    tagline: "Event discovery & social platform",
    period: "2024 - Present",
    status: "In-Progress",
    stock: "cobalt",
    tags: ["Next.js", "TypeScript", "Python", "PostgreSQL", "Redis", "Docker", "AWS"],
    summary:
      "A full-stack event platform for discovering, creating, and joining local events. Built with a microservices backend in Go and a Next.js frontend. Features real-time updates via WebSockets and an event recommendation engine.",
    link: "https://github.com/achhayapathak/joinup",
    featured: true,
  },
  {
    name: "Distributed Document Search",
    tagline: "Production grade distributed search service",
    period: "2024",
    status: "Completed",
    stock: "magenta",
    tags: ["TypeScript", "Distributed Systems", "Multi-tenancy"],
    summary:
      "A production grade distributed document search service which supports multi-tenancy.",
    link: "https://github.com/achhayapathak/distributed-document-search",
  },
  {
    name: "Job Assist AI",
    tagline: "AI tool for job applications",
    period: "2024",
    status: "Completed",
    stock: "violet",
    tags: ["TypeScript", "AI", "Backend", "Frontend"],
    summary:
      "The backend and frontend of Job Assist AI, an AI tool to help with job applications.",
    link: "https://github.com/achhayapathak/job-assist-ai-backend",
  },
  {
    name: "The Perfect Backend",
    tagline: "Ideal microservices backend system",
    period: "2023",
    status: "Completed",
    stock: "teal",
    tags: ["JavaScript", "Microservices", "Backend"],
    summary:
      "Just me trying to write an ideal microservices based backend system.",
    link: "https://github.com/achhayapathak/ThePerfectBackend",
  },
  {
    name: "Termtalk",
    tagline: "Secure CLI Chat",
    period: "2023",
    status: "Completed",
    stock: "orange",
    tags: ["JavaScript", "CLI", "NPM"],
    summary:
      "Npm package to securely chat with your friend through your CLI.",
    link: "https://github.com/achhayapathak/termtalk",
  },
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
