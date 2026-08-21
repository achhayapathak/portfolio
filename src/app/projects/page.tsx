import type { Metadata } from "next";
import { Ticker } from "@/components/layout/Ticker";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { PageSheet } from "@/components/content/PageSheet";
import { LedgerCard } from "@/components/content/LedgerCard";
import { TagList } from "@/components/content/TagList";
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
          <div className="content-grid">
            {projects.map((p) => (
              <SectionReveal key={p.name}>
                <LedgerCard
                  stock={p.stock}
                  headTitle={p.name}
                  headSubtitle={p.tagline}
                  date={p.period}
                  status={p.status}
                >
                  <p className="prose-form">{p.summary}</p>
                  <TagList tags={p.tags} />
                  {p.link && (
                    <div style={{ marginTop: 18 }}>
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="app-btn"
                      >
                        View Source →
                      </a>
                    </div>
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
