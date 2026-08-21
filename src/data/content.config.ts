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
  title: "Backend & DevOps Engineer",
  location: "India",
  email: "achhayapathak@gmail.com",
  description:
    "Achhaya Pathak — Backend & DevOps Engineer. Distributed systems, cloud infrastructure, and startup builder, with every role, project and credential on one site.",
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
    company: "Startup (Stealth)",
    role: "Backend Engineer",
    period: "2025 - Present",
    dateRange: ["2025-01", null],
    status: "pending",
    stock: "lime",
    tags: ["Go", "Kubernetes", "AWS", "PostgreSQL", "gRPC"],
    summary:
      "Building distributed backend services for a high-growth product. Designing event-driven architecture and deploying to Kubernetes clusters on AWS.",
    bullets: [
      "Architected event-driven pipeline processing 50K+ events/day",
      "Implemented gRPC service mesh with circuit breakers and retries",
      "Set up CI/CD with GitHub Actions and ArgoCD for GitOps deployments",
    ],
  },
  {
    company: "Previous Company",
    role: "Software Engineer",
    period: "2023 - 2025",
    dateRange: ["2023-06", "2025-01"],
    status: "cleared",
    stock: "yellow",
    tags: ["Python", "Docker", "Terraform", "Redis", "PostgreSQL"],
    summary:
      "Worked on cloud infrastructure and backend services. Automated deployment pipelines and managed production systems.",
    bullets: [
      "Reduced deployment time by 70% through Terraform automation",
      "Built monitoring dashboards with Prometheus and Grafana",
      "Managed PostgreSQL clusters handling 10M+ rows",
    ],
  },
  {
    company: "Internship Co.",
    role: "Backend Developer Intern",
    period: "2022 - 2023",
    dateRange: ["2022-06", "2023-05"],
    status: "cleared",
    stock: "teal",
    tags: ["Node.js", "TypeScript", "MongoDB", "Docker"],
    summary:
      "Built REST APIs and microservices. Contributed to containerization of legacy services.",
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
    name: "AWS Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    status: "issued",
    stock: "violet",
    credentialId: "AWS-SAA-XXXXX",
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "CNCF",
    date: "2024",
    status: "issued",
    stock: "cobalt",
    credentialId: "CKA-XXXXX",
  },
  {
    name: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    date: "2023",
    status: "issued",
    stock: "lime",
    credentialId: "HCT-XXXXX",
  },
];

// ── Education ────────────────────────────────────────────────

export const education: EduEntry[] = [
  {
    institution: "University",
    degree: "B.Tech Computer Science",
    period: "2020 - 2024",
    status: "cleared",
    stock: "yellow",
    summary:
      "Focused on distributed systems, algorithms, and cloud computing. Built multiple projects involving backend architecture and DevOps tooling.",
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
