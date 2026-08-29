import type { Metadata, Viewport } from "next";
import { site } from "@/data/content.config";
import "./globals.css";

// Font imports
import "@fontsource/archivo-black/400.css";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdf6e3" },
    { media: "(prefers-color-scheme: dark)", color: "#08080b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: `${site.name} · Software Engineer & Backend Architect`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: site.siteUrl }],
  generator: "Next.js",
  keywords: [
    "Achhaya Pathak",
    "Software Engineer",
    "Backend Engineer",
    "Distributed Systems",
    "Cloud Infrastructure",
    "IIT Guwahati",
    "JoinUp",
    "Go",
    "Python",
    "TypeScript",
    "Rust",
    "Kubernetes",
    "Docker",
    "Kafka",
    "RabbitMQ",
    "Redis",
    "PostgreSQL",
    "AWS",
    "GCP",
    "Next.js",
    "Microservices",
    "Event Driven Architecture",
    "Portfolio",
  ],
  creator: site.name,
  publisher: site.name,
  metadataBase: new URL(site.siteUrl),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.siteUrl,
    title: `${site.name} · Software Engineer & Backend Architect`,
    description: site.description,
    images: [
      {
        url: `${site.siteUrl}/logo.jpeg`,
        width: 600,
        height: 600,
        alt: `${site.name} Logo`,
        type: "image/jpeg",
      },
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} — Software Engineer & Backend Architect`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Software Engineer & Backend Architect`,
    description: site.description,
    creator: "@frozen_parantha",
    site: "@frozen_parantha",
    images: [
      {
        url: `${site.siteUrl}/logo.jpeg`,
        width: 600,
        height: 600,
        alt: `${site.name} Logo`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
  classification: "Portfolio & Engineering Ledger",
  other: {
    "color-scheme": "light dark",
    "image_src": `${site.siteUrl}/logo.jpeg`,
    "itemprop:name": `${site.name} · Software Engineer & Backend Architect`,
    "itemprop:description": site.description,
    "itemprop:image": `${site.siteUrl}/logo.jpeg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = site.siteUrl.replace(/\/$/, "");

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: baseUrl,
    inLanguage: "en",
    description: site.description,
    image: `${baseUrl}/logo.jpeg`,
    author: {
      "@type": "Person",
      name: site.name,
      url: baseUrl,
      image: `${baseUrl}/logo.jpeg`,
    },
    publisher: {
      "@type": "Person",
      name: site.name,
      url: baseUrl,
      image: `${baseUrl}/logo.jpeg`,
    },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: site.name,
    alternateName: ["frozen_parantha", "Achhaya"],
    url: baseUrl,
    image: `${baseUrl}/logo.jpeg`,
    logo: `${baseUrl}/logo.jpeg`,
    jobTitle: site.title,
    worksFor: {
      "@type": "Organization",
      name: "JoinUp",
      url: "https://joinup.dev",
      logo: `${baseUrl}/logo.jpeg`,
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Indian Institute of Technology, Guwahati",
        url: "https://www.iitg.ac.in/",
      },
      {
        "@type": "EducationalOrganization",
        name: "Hansraj College, University of Delhi",
        url: "https://www.hansrajcollege.ac.in/",
      },
    ],
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurugram",
      addressCountry: "IN",
    },
    knowsAbout: site.knowsAbout,
    sameAs: [
      "https://linkedin.com/in/achhayapathak",
      "https://github.com/achhayapathak",
      "https://x.com/frozen_parantha",
      "https://leetcode.com/u/achhayapathak/",
    ],
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${site.name}'s Engineering Portfolio & Ledger`,
    url: baseUrl,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo.jpeg`,
      caption: `${site.name} Logo`,
    },
    mainEntity: {
      "@id": `${baseUrl}/#person`,
    },
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: baseUrl,
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data — WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* Structured Data — Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        {/* Structured Data — ProfilePage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profilePageSchema),
          }}
        />

        {/* Inline script to prevent FOUC on dark mode — default is light */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  if (stored === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          skip to content
        </a>

        <div
          style={{
            display: "block",
            maxWidth: 1240,
            margin: "0 auto",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
