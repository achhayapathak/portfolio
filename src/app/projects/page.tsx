import type { Metadata } from "next";
import { Ticker } from "@/components/layout/Ticker";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { PageSheet } from "@/components/content/PageSheet";
import { LedgerCard } from "@/components/content/LedgerCard";
import { SectionReveal } from "@/components/content/SectionReveal";
import { projects, sectionMeta, site } from "@/data/content.config";

export const metadata: Metadata = {
  title: "Projects",
  description: `${site.name}'s projects — things built with code.`,
};

export default function ProjectsPage() {
  const meta = sectionMeta.projects;

  return (
    <>
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
