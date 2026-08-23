import type { Metadata } from "next";
import { Ticker } from "@/components/layout/Ticker";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { PageSheet } from "@/components/content/PageSheet";
import { LedgerCard } from "@/components/content/LedgerCard";
import { SectionReveal } from "@/components/content/SectionReveal";
import { volunteering, sectionMeta, site } from "@/data/content.config";

export const metadata: Metadata = {
  title: "Volunteering & Community",
  description: `Community involvement, open source contributions, and engineering mentorship by ${site.name}.`,
  alternates: {
    canonical: "/volunteering",
  },
  openGraph: {
    title: `Volunteering & Community · ${site.name}`,
    description: `Open-source contributions, technical speaking, and developer mentorship by ${site.name}.`,
    url: `${site.siteUrl}/volunteering`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Volunteering & Community · ${site.name}`,
    description: `Open-source contributions, technical speaking, and developer mentorship by ${site.name}.`,
  },
};

export default function VolunteeringPage() {
  const meta = sectionMeta.volunteering;
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
        name: "Volunteering",
        item: `${baseUrl}/volunteering`,
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
            {volunteering.map((v, i) => (
              <SectionReveal key={v.org}>
                <LedgerCard
                  stock={v.stock}
                  headTitle={v.role}
                  headSubtitle={v.org}
                  date={v.period}
                  number={`no. VO-${String(i + 1).padStart(2, "0")}`}
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
