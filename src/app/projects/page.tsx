import type { Metadata } from "next";
import { Ticker } from "@/components/layout/Ticker";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { PageSheet } from "@/components/content/PageSheet";
import { LedgerCard } from "@/components/content/LedgerCard";
import { SectionReveal } from "@/components/content/SectionReveal";
import { projects, sectionMeta, site } from "@/data/content.config";

export const metadata: Metadata = {
  title: "Projects & Systems",
  description: `Production-grade distributed systems and engineering projects built by ${site.name} — including JoinUp, Distributed Document Search, Event Aggregation Engine, Job Assist AI, and Termtalk.`,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: `Projects & Systems · ${site.name}`,
    description: `Production systems, distributed search engines, AI automation agents, and open-source packages built by ${site.name}.`,
    url: `${site.siteUrl}/projects`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects & Systems · ${site.name}`,
    description: `Production systems, distributed search engines, AI automation agents, and open-source packages built by ${site.name}.`,
  },
};

export default function ProjectsPage() {
  const meta = sectionMeta.projects;
  const baseUrl = site.siteUrl.replace(/\/$/, "");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Overview",
        item: `${baseUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${baseUrl}/projects`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Ticker />
      <Masthead />

      <main id="main" tabIndex={-1} style={{ display: "block", marginTop: 34, outline: "none" }}>
        <PageSheet
          stock={meta.stock}
          formLabel={`form ${meta.form}`}
          title={meta.title}
          subtitle={meta.subtitle}
        >
          {/* Lede */}
          <p
            className="prose-form"
            style={{
              maxWidth: "56ch",
              marginBottom: 30,
              color: "color-mix(in srgb, var(--on-stock) 76%, var(--stock))",
            }}
          >
            {meta.info}
          </p>
          <div className="content-grid">
            {projects.map((p, i) => (
              <SectionReveal key={p.name}>
                <LedgerCard
                  stock={p.stock}
                  headTitle={p.name}
                  headSubtitle={p.tagline}
                  date={p.period}
                  status={p.status}
                  number={`no. PR-${String(i + 1).padStart(2, "0")}`}
                  tags={p.tags}
                  action={
                    (p.github || p.website) ? (
                      <div style={{ display: "flex", gap: "10px", marginTop: 18, flexWrap: "wrap" }}>
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="app-btn"
                          >
                            Source Code →
                          </a>
                        )}
                        {p.website && (
                          <a
                            href={p.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="app-btn"
                          >
                            Live Website →
                          </a>
                        )}
                      </div>
                    ) : undefined
                  }
                >
                  <p className="prose-form">{p.summary}</p>
                </LedgerCard>
              </SectionReveal>
            ))}
          </div>
        </PageSheet>
      </main>

      <Footer />
    </>
  );
}
