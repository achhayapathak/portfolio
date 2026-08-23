import type { Metadata } from "next";
import { site } from "@/data/content.config";
import "./globals.css";

// Font imports
import "@fontsource/archivo-black/400.css";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";

export const metadata: Metadata = {
  title: {
    default: `Overview · ${site.name}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name }],
  metadataBase: new URL(site.siteUrl),
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    title: `Overview · ${site.name}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  other: {
    "color-scheme": "light dark",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="theme-color"
          content="#fdf6e3"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#08080b"
          media="(prefers-color-scheme: dark)"
        />

        {/* Structured Data — WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: site.name,
              url: site.siteUrl,
              inLanguage: "en",
              author: { "@type": "Person", name: site.name },
            }),
          }}
        />

        {/* Structured Data — Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.name,
              url: site.siteUrl,
              jobTitle: site.title,
              email: `mailto:${site.email}`,
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              knowsAbout: site.knowsAbout,
              sameAs: site.social.map((s) => s.url),
            }),
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
