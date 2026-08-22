import type { Metadata } from "next";
import { Ticker } from "@/components/layout/Ticker";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { PageSheet } from "@/components/content/PageSheet";
import { LedgerCard } from "@/components/content/LedgerCard";
import { SectionReveal } from "@/components/content/SectionReveal";
import { certifications, sectionMeta, site } from "@/data/content.config";

export const metadata: Metadata = {
  title: "Certifications",
  description: `${site.name}'s certifications and credentials.`,
};

export default function CertificationsPage() {
  const meta = sectionMeta.certifications;

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
            {certifications.map((c) => (
              <SectionReveal key={c.name}>
                <LedgerCard
                  stock={c.stock}
                  headTitle={c.name}
                  headSubtitle={c.issuer}
                  date={c.date}
                  status={c.status}
                >
                  {c.credentialId && (
                    <p className="lbl" style={{ marginTop: 4 }}>
                      credential id: {c.credentialId}
                    </p>
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
