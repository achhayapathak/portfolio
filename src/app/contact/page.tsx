import type { Metadata } from "next";
import { Ticker } from "@/components/layout/Ticker";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { PageSheet } from "@/components/content/PageSheet";
import { Glyph } from "@/components/decorations/Glyph";
import { SectionReveal } from "@/components/content/SectionReveal";
import { site, sectionMeta } from "@/data/content.config";

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

      <main id="main" tabIndex={-1} style={{ display: "block", marginTop: 34, outline: "none" }}>
        <PageSheet
          stock={meta.stock}
          formLabel={`form ${meta.form}`}
          title={meta.title}
          subtitle={meta.subtitle}
        >
          <SectionReveal>
            <div className="contact-grid">
              {/* Email */}
              <div className="app-card">
                <div className="app-card-head">
                  <h3 className="contact-card-title">Email</h3>
                </div>
                <div className="contact-card-body">
                  <a href={`mailto:${site.email}`} className="contact-link">
                    <Glyph name="mail" size={20} />
                    <span>{site.email}</span>
                  </a>
                  <p className="prose-form contact-desc">
                    Best way to reach me. I typically respond within 24 hours.
                  </p>
                </div>
              </div>

              {/* Social links */}
              {site.social.map((s) => (
                <div key={s.platform} className="app-card">
                  <div className="app-card-head">
                    <h3 className="contact-card-title">{s.platform}</h3>
                  </div>
                  <div className="contact-card-body">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      <Glyph
                        name={s.icon as "card" | "code" | "link"}
                        size={20}
                      />
                      <span>{s.label}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </PageSheet>
      </main>

      <Footer />
    </>
  );
}
