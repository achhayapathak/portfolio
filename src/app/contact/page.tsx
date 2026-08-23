import type { Metadata } from "next";
import { Ticker } from "@/components/layout/Ticker";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { PageSheet } from "@/components/content/PageSheet";
import { LedgerCard } from "@/components/content/LedgerCard";
import { Glyph, GlyphName } from "@/components/decorations/Glyph";
import { SectionReveal } from "@/components/content/SectionReveal";
import { contactCards, sectionMeta, site } from "@/data/content.config";

export const metadata: Metadata = {
  title: "Connect & Contact",
  description: `Get in touch with ${site.name} — ${site.title} & Backend Architect. Connect via Email, LinkedIn, GitHub, LeetCode, or X (Twitter).`,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Connect & Contact · ${site.name}`,
    description: `Direct contact channels and social profiles for ${site.name}. Open to backend, distributed systems, and platform engineering roles.`,
    url: `${site.siteUrl}/contact`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Connect & Contact · ${site.name}`,
    description: `Direct contact channels and social profiles for ${site.name}. Open to backend, distributed systems, and platform engineering roles.`,
  },
};

export default function ContactPage() {
  const meta = sectionMeta.contact;
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
        name: "Connect",
        item: `${baseUrl}/contact`,
      },
    ],
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Connect with ${site.name}`,
    url: `${baseUrl}/contact`,
    description: `Get in touch with ${site.name} — ${site.title}.`,
    mainEntity: {
      "@type": "Person",
      name: site.name,
      email: `mailto:${site.email}`,
      url: baseUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      <Ticker />
      <Masthead />

      <main
        id="main"
        tabIndex={-1}
        style={{ display: "block", marginTop: 34, outline: "none" }}
      >
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
              color:
                "color-mix(in srgb, var(--on-stock) 76%, var(--stock))",
            }}
          >
            {meta.info}
          </p>

          <SectionReveal>
            <div className="contact-cards-grid">
              {contactCards.map((c, i) => (
                <LedgerCard
                  key={c.title}
                  stock={c.stock}
                  headTitle={c.title}
                  number={`no. CT-${String(i + 1).padStart(2, "0")}`}
                >
                  <a
                    href={c.url}
                    target={c.url.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      c.url.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="contact-link"
                  >
                    <Glyph name={c.icon as GlyphName} size={18} />
                    <span>{c.label}</span>
                  </a>
                  <p
                    className="prose-form"
                    style={{
                      marginTop: 10,
                      fontSize: "0.82rem",
                      opacity: 0.8,
                    }}
                  >
                    {c.description}
                  </p>
                </LedgerCard>
              ))}
            </div>
          </SectionReveal>
        </PageSheet>
      </main>

      <Footer />
    </>
  );
}
