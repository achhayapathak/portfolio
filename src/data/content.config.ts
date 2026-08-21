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

export type EntryStatus = "pending" | "cleared" | "posted" | "issued";

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
  status: "pending" | "cleared";
}

export interface NavItem {
  label: string;
  href: string;
  stock: StockColor;
}

// ── Site Config ──────────────────────────────────────────────

export const site: SiteConfig = {
  name: "Achhaya Pathak",
  title: "Building JoinUp | IIT Guwahati'23",
  location: "Delhi, India",
  email: "achhayapathak11@gmail.com",
  description:
    "Backend & Distributed Systems Engineer specialising in fault-tolerant infrastructure, DevOps, and AI-driven applications.",
  siteUrl: "https://achhayapathak.dev",
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/achhayapathak",
      label: "github/achhayapathak",
      icon: "code",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/achhayapathak",
      label: "linkedin/achhayapathak",
      icon: "card",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/achhayapathak",
      label: "twitter/achhayapathak",
      icon: "link",
    },
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
  { label: "certifications", href: "/certifications", stock: "violet" },
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
    status: "pending",
    stock: "lime",
    tags: ["Next.js", "Go", "PostgreSQL", "Redis", "Kafka", "Kubernetes"],
    summary:
      "JoinUp is on a mission to make professional events more discoverable and accessible. By connecting attendees with relevant conferences, meetups, workshops, and networking opportunities, JoinUp helps people learn, connect, and grow their careers.",
  },
  {
    company: "Marlin",
    role: "Software Engineer",
    period: "April 2025 - May 2026",
    dateRange: ["2025-04", "2026-05"],
    status: "cleared",
    stock: "yellow",
    tags: ["Kubernetes", "RabbitMQ", "LLMs"],
    summary:
      "Built an autonomous LLM-driven trading AI agent that executes fully automated token trades on Hyperliquid, processing real-time market data with sub-2000ms decision latency(p95).",
    bullets: [
      "Architected a fault-tolerant microservices system (Executor/Evaluator/Flusher) using RabbitMQ, enabling horizontal scalability, fault isolation, and zero-downtime processing 50+ real-time market signals per minute.",
      "Designed resilient queue-based orchestration with ack/nack semantics, retries, and auto-reconnect mechanisms, reducing system failures by 99.9%(~1000 → 2 per month) in AI-driven decision pipelines.",
      "Deployed and managed Kubernetes clusters within Confidential Virtual Machines (CVMs), establishing a zero-trust environment for highly secure AI-sensitive data transfer and processing.",
    ],
  },
  {
    company: "GIST Impact",
    role: "SDE-1",
    period: "October 2024 - April 2025",
    dateRange: ["2024-10", "2025-04"],
    status: "cleared",
    stock: "teal",
    tags: ["Grafana Stack"],
    summary:
      "Consolidated service logs into a centralized framework via Grafana Stack, enhancing developer accessibility and cutting down error resolution time by 35%, leading to a 20% increase in deployment speed.",
  },
  {
    company: "GIST Impact",
    role: "Associate Software Engineer",
    period: "February 2024 - October 2024",
    dateRange: ["2024-02", "2024-10"],
    status: "cleared",
    stock: "cobalt",
    tags: ["GitHub Actions", "Snowflake", "ETL", "CI/CD"],
    summary:
      "Managed and scaled infrastructure for SaaS and DaaS platforms powering AI-assisted sustainability analytics workflows.",
    bullets: [
      "Managed and scaled infrastructure for SaaS and DaaS platforms powering AI-assisted sustainability analytics workflows, processing ~5 TB of data per month.",
      "Re-engineered and optimised CI/CD pipelines using GitHub Actions, parallelising build stages, caching dependencies, and eliminating redundant test runs, cutting deployment time from 30 minutes to 5 minutes (6x improvement).",
      "Automated ETL pipelines in Snowflake, reducing data processing time by 80% and significantly improving the reliability and consistency of production data flows.",
    ],
  },
  {
    company: "Aristocrat",
    role: "Game Mathematician",
    period: "August 2023 - January 2024",
    dateRange: ["2023-08", "2024-01"],
    status: "cleared",
    stock: "magenta",
    tags: ["JavaScript", "C++"],
    summary:
      "Designed mathematical models and wrote simulation codes utilizing JavaScript and C++ for slot games, calculating return to player percentages, hit frequencies, and other metrics as appropriate for markets across the Globe.",
    bullets: [
      "Crafted a highly optimized simulation code for the Super Grand Star slot game, establishing a benchmark of excellence within the organization. This optimized code reduced simulation runtime by an impressive 78%.",
    ],
  },
  {
    company: "Indian Institute of Technology, Indore",
    role: "Summer Research Intern",
    period: "April 2021 - May 2021",
    dateRange: ["2021-04", "2021-05"],
    status: "cleared",
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
    status: "pending",
    stock: "cobalt",
    tags: ["Next.js", "Go", "PostgreSQL", "Redis", "Kafka", "Kubernetes"],
    summary:
      "A full-stack event platform for discovering, creating, and joining local events. Built with a microservices backend in Go and a Next.js frontend. Features real-time updates via WebSockets and an event recommendation engine.",
    link: "https://github.com/achhayapathak/joinup",
    featured: true,
  },
  {
    name: "Event Pipeline",
    tagline: "Distributed event processing system",
    period: "2024",
    status: "posted",
    stock: "magenta",
    tags: ["Go", "Kafka", "gRPC", "Docker", "Prometheus"],
    summary:
      "A high-throughput event ingestion and processing pipeline. Handles 50K+ events per day with exactly-once delivery guarantees. Implements dead-letter queues and automatic retry logic.",
  },
  {
    name: "Infra Toolkit",
    tagline: "Terraform modules for AWS",
    period: "2023 - Present",
    status: "posted",
    stock: "violet",
    tags: ["Terraform", "AWS", "Python", "GitHub Actions"],
    summary:
      "A collection of production-ready Terraform modules for AWS. VPC networking, EKS clusters, RDS instances, and CI/CD pipeline templates.",
    link: "https://github.com/achhayapathak/infra-toolkit",
  },
  {
    name: "CLI Dashboard",
    tagline: "Terminal-based system monitor",
    period: "2023",
    status: "cleared",
    stock: "teal",
    tags: ["Go", "Bubble Tea", "SSH"],
    summary:
      "A TUI application for monitoring distributed systems. Real-time metrics, log tailing, and SSH-accessible dashboards built with Bubble Tea.",
  },
];

// ── Certifications ───────────────────────────────────────────

export const certifications: CertEntry[] = [
  {
    name: "Summer Analytics Bootcamp",
    issuer: "INSPIRE Scholar",
    date: "2023",
    status: "issued",
    stock: "violet",
  },
];

// ── Education ────────────────────────────────────────────────

export const education: EduEntry[] = [
  {
    institution: "Indian Institute of Technology, Guwahati",
    degree: "Master's degree, Mathematics and Computer Science",
    period: "July 2021 - June 2023",
    status: "cleared",
    stock: "yellow",
  },
  {
    institution: "Hansraj College",
    degree: "Bachelor's degree, Mathematics",
    period: "July 2018 - June 2021",
    status: "cleared",
    stock: "teal",
  },
  {
    institution: "Kendriya vidyalaya",
    degree: "High School",
    period: "July 2016 - May 2018",
    status: "cleared",
    stock: "magenta",
  },
];

// ── Volunteering ─────────────────────────────────────────────

export const volunteering: VolunteerEntry[] = [
  {
    org: "Open Source Community",
    role: "Contributor & Mentor",
    period: "2023 - Present",
    status: "cleared",
    stock: "magenta",
    summary:
      "Contributing to open-source infrastructure tools. Mentoring new contributors and reviewing pull requests.",
  },
  {
    org: "College Tech Club",
    role: "Technical Lead",
    period: "2022 - 2024",
    status: "cleared",
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
    status: "pending",
  },
  {
    date: "2024-06",
    org: "JoinUp",
    detail: "event platform · go · next.js · kubernetes",
    status: "pending",
  },
  {
    date: "2024-03",
    org: "AWS",
    detail: "solutions architect associate · certified",
    status: "cleared",
  },
  {
    date: "2024-01",
    org: "CNCF",
    detail: "certified kubernetes administrator",
    status: "cleared",
  },
  {
    date: "2023-06",
    org: "Previous Company",
    detail: "software engineer · python · terraform",
    status: "cleared",
  },
  {
    date: "2023-03",
    org: "Infra Toolkit",
    detail: "terraform modules · aws · open source",
    status: "cleared",
  },
];

// ── Section Form Labels (ledger-style) ───────────────────────

export const sectionMeta = {
  overview: {
    form: "OV-00",
    subtitle: "index of records",
    title: "Overview",
    stock: "cream" as StockColor,
  },
  work: {
    form: "WK-01",
    subtitle: "roles & employment",
    title: "Work",
    stock: "lime" as StockColor,
  },
  projects: {
    form: "PR-02",
    subtitle: "things i have built",
    title: "Projects",
    stock: "cobalt" as StockColor,
  },
  certifications: {
    form: "CT-03",
    subtitle: "credentials & qualifications",
    title: "Certifications",
    stock: "violet" as StockColor,
  },
  education: {
    form: "ED-04",
    subtitle: "academic record",
    title: "Education",
    stock: "yellow" as StockColor,
  },
  volunteering: {
    form: "VL-05",
    subtitle: "community & leadership",
    title: "Volunteering",
    stock: "magenta" as StockColor,
  },
  contact: {
    form: "CX-06",
    subtitle: "get in touch",
    title: "Contact",
    stock: "orange" as StockColor,
  },
} as const;
