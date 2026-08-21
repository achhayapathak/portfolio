import type { Metadata } from "next";
import { Ticker } from "@/components/layout/Ticker";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { PageSheet } from "@/components/content/PageSheet";
import { LedgerCard } from "@/components/content/LedgerCard";
import { Glyph } from "@/components/decorations/Glyph";
import { SectionReveal } from "@/components/content/SectionReveal";
import { site, sectionMeta } from "@/data/content.config";
import type { StockColor } from "@/data/content.config";
import type { GlyphName } from "@/components/decorations/Glyph";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — ${site.title}.`,
};

interface ContactCard {
  title: string;
  icon: GlyphName;
  stock: StockColor;
  url: string;
  label: string;
  description: string;
}

export default function ContactPage() {
  const meta = sectionMeta.contact;

  const cards: ContactCard[] = [
    {
      title: "Email",
      icon: "mail",
      stock: "lime",
      url: `mailto:${site.email}`,
      label: site.email,
      description: "best for anything that needs a written trail",
    },
    ...site.social.map((s) => ({
      title: s.platform,
      icon: s.icon as GlyphName,
      stock: (s.platform === "GitHub"
        ? "yellow"
        : s.platform === "LinkedIn"
          ? "violet"
          : "teal") as StockColor,
      url: s.url,
      label: s.label,
      description:
        s.platform === "GitHub"
          ? "the commit log is the CV that cannot round up"
          : s.platform === "LinkedIn"
            ? "for the conversations that want a recruiter in them"
            : "occasional thoughts and retweets",
    })),
  ];

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
            Direct lines, profiles worth your time. Open to backend and
            platform roles in {site.location}.
          </p>

          <SectionReveal>
            <div className="contact-cards-grid">
              {cards.map((c, i) => (
                <LedgerCard
                  key={c.title}
                  stock={c.stock}
                  headTitle={c.title}
                  number={`no. CT-${String(i + 1).padStart(4, "0")}`}
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
                    <Glyph name={c.icon} size={18} />
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
