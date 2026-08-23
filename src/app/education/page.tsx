import type { Metadata } from "next";
import { Ticker } from "@/components/layout/Ticker";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { PageSheet } from "@/components/content/PageSheet";
import { LedgerCard } from "@/components/content/LedgerCard";
import { SectionReveal } from "@/components/content/SectionReveal";
import { education, sectionMeta, site } from "@/data/content.config";

export const metadata: Metadata = {
  title: "Education & Academics",
  description: `Academic background of ${site.name} — Master's in Mathematics and Computing from Indian Institute of Technology Guwahati (IIT Guwahati), Bachelor's in Mathematics from Hansraj College, University of Delhi.`,
  alternates: {
    canonical: "/education",
  },
  openGraph: {
    title: `Education & Academics · ${site.name}`,
    description: `Academic background of ${site.name} — M.S. Mathematics & Computing from IIT Guwahati, B.S. Mathematics from Hansraj College, DU.`,
    url: `${site.siteUrl}/education`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Education & Academics · ${site.name}`,
    description: `Academic background of ${site.name} — M.S. Mathematics & Computing from IIT Guwahati, B.S. Mathematics from Hansraj College, DU.`,
  },
};

export default function EducationPage() {
  const meta = sectionMeta.education;
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
        name: "Education",
        item: `${baseUrl}/education`,
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
            {education.map((e, i) => (
              <SectionReveal key={e.institution}>
                <LedgerCard
                  stock={e.stock}
                  headTitle={e.degree}
                  headSubtitle={e.institution}
                  date={e.period}
                  number={`no. ED-${String(i + 1).padStart(2, "0")}`}
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
