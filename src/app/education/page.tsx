import type { Metadata } from "next";
import { Ticker } from "@/components/layout/Ticker";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { PageSheet } from "@/components/content/PageSheet";
import { LedgerCard } from "@/components/content/LedgerCard";
import { SectionReveal } from "@/components/content/SectionReveal";
import { education, sectionMeta, site } from "@/data/content.config";

export const metadata: Metadata = {
  title: "Education",
  description: `${site.name}'s academic record and education.`,
};

export default function EducationPage() {
  const meta = sectionMeta.education;

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
            {education.map((e) => (
              <SectionReveal key={e.institution}>
                <LedgerCard
                  stock={e.stock}
                  headTitle={e.degree}
                  headSubtitle={e.institution}
                  date={e.period}
                  status={e.status}
                >
                  {e.summary && (
                    <p className="prose-form">{e.summary}</p>
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
