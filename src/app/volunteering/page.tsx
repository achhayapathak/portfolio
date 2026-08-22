import type { Metadata } from "next";
import { Ticker } from "@/components/layout/Ticker";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { PageSheet } from "@/components/content/PageSheet";
import { LedgerCard } from "@/components/content/LedgerCard";
import { SectionReveal } from "@/components/content/SectionReveal";
import { volunteering, sectionMeta, site } from "@/data/content.config";

export const metadata: Metadata = {
  title: "Volunteering",
  description: `${site.name}'s community work and leadership roles.`,
};

export default function VolunteeringPage() {
  const meta = sectionMeta.volunteering;

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
            {volunteering.map((v) => (
              <SectionReveal key={v.org}>
                <LedgerCard
                  stock={v.stock}
                  headTitle={v.role}
                  headSubtitle={v.org}
                  date={v.period}
                  status={v.status}
                >
                  {v.summary && (
                    <p className="prose-form">{v.summary}</p>
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
