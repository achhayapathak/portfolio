import type { Metadata } from "next";
import { Ticker } from "@/components/layout/Ticker";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { PageSheet } from "@/components/content/PageSheet";
import { LedgerCard } from "@/components/content/LedgerCard";
import { SectionReveal } from "@/components/content/SectionReveal";
import { work, sectionMeta, site } from "@/data/content.config";

export const metadata: Metadata = {
  title: "Work Experience",
  description: `${site.name}'s professional engineering experience across JoinUp, Marlin, Gist Impact, and Aristocrat Gaming — building distributed systems, autonomous AI agents, and high-throughput pipelines.`,
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: `Work Experience · ${site.name}`,
    description: `${site.name}'s work experience — engineering leadership, distributed systems, and cloud infrastructure.`,
    url: `${site.siteUrl}/work`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Work Experience · ${site.name}`,
    description: `${site.name}'s work experience — engineering leadership, distributed systems, and cloud infrastructure.`,
  },
};

export default function WorkPage() {
  const meta = sectionMeta.work;
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
        name: "Work",
        item: `${baseUrl}/work`,
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
            {work.map((w, i) => (
              <SectionReveal key={w.company + w.role}>
                <LedgerCard
                  stock={w.stock}
                  headTitle={w.role}
                  headSubtitle={w.company}
                  date={w.period}
                  status={w.status}
                  number={`no. WK-${String(i + 1).padStart(2, "0")}`}
                  tags={w.tags}
                >
                  <p className="prose-form">{w.summary}</p>
                  {w.bullets && (
                    <ul className="bullet-list">
                      {w.bullets.map((b, j) => (
                        <li key={j} className="prose-form">
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
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
