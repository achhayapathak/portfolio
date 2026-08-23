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
  title: "Contact",
  description: `Get in touch with ${site.name} — ${site.title}.`,
};

export default function ContactPage() {
  const meta = sectionMeta.contact;

  return (
    <>
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
