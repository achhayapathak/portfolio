import { Ticker } from "@/components/layout/Ticker";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { PageSheet } from "@/components/content/PageSheet";
import { SectionBlock } from "@/components/content/SectionBlock";
import { LedgerCard } from "@/components/content/LedgerCard";
import {
  work,
  projects,
  education,
  volunteering,
  sectionMeta,
} from "@/data/content.config";

export default function OverviewPage() {
  const topWork = work.slice(0, 2);
  const topProjects = projects.slice(0, 2);
  const topEdu = education.slice(0, 2);
  const topVol = volunteering.slice(0, 2);

  return (
    <>
      <Ticker />
      <Masthead />

      <main id="main" tabIndex={-1} style={{ display: "block", marginTop: 34, outline: "none" }}>
        <PageSheet
          stock={sectionMeta.overview.stock}
          formLabel={`form ${sectionMeta.overview.form}`}
          title={sectionMeta.overview.title}
          subtitle={sectionMeta.overview.subtitle}
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
            {sectionMeta.overview.info}
          </p>

          {/* ── Work ────────────────────────────────────── */}
          <SectionBlock
            formLabel={`form ${sectionMeta.work.form}`}
            subtitle={sectionMeta.work.subtitle}
            title={sectionMeta.work.title}
            id="work"
            isFirst
            actionLabel={`All ${work.length} Roles →`}
            actionHref="/work"
          >
            {topWork.map((w, i) => (
              <LedgerCard
                key={w.company + w.role}
                stock={w.stock}
                headTitle={w.role}
                headSubtitle={w.company}
                date={w.period}
                status={w.status}
                number={`no. WK-${String(i + 1).padStart(2, "0")}`}
                tags={w.tags}
              >
                <p className="prose-form card-summary">{w.summary}</p>
              </LedgerCard>
            ))}
          </SectionBlock>

          {/* ── Projects ────────────────────────────────── */}
          <SectionBlock
            formLabel={`form ${sectionMeta.projects.form}`}
            subtitle={sectionMeta.projects.subtitle}
            title={sectionMeta.projects.title}
            id="projects"
            actionLabel={`All ${projects.length} Projects →`}
            actionHref="/projects"
          >
            {topProjects.map((p, i) => (
              <LedgerCard
                key={p.name}
                stock={p.stock}
                headTitle={p.name}
                headSubtitle={p.tagline}
                date={p.period}
                status={p.status}
                number={`no. PR-${String(i + 1).padStart(2, "0")}`}
                tags={p.tags}
                action={
                  (p.github || p.website) ? (
                    <div style={{ display: "flex", gap: "10px", marginTop: 18, flexWrap: "wrap" }}>
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="app-btn"
                        >
                          Source Code →
                        </a>
                      )}
                      {p.website && (
                        <a
                          href={p.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="app-btn"
                        >
                          Live Website →
                        </a>
                      )}
                    </div>
                  ) : undefined
                }
              >
                <p className="prose-form card-summary">{p.summary}</p>
              </LedgerCard>
            ))}
          </SectionBlock>

          {/* ── Certifications (Temporarily disabled for future blog section) ──
          <SectionBlock
            formLabel={`form ${sectionMeta.certifications.form}`}
            subtitle={sectionMeta.certifications.subtitle}
            title={sectionMeta.certifications.title}
            id="certifications"
            actionLabel={`All ${certifications.length} Credentials →`}
            actionHref="/certifications"
          >
            {topCerts.map((c, i) => (
              <LedgerCard
                key={c.name}
                stock={c.stock}
                headTitle={c.name}
                headSubtitle={c.issuer}
                date={c.date}
                status={c.status}
                number={`no. CT-${String(i + 1).padStart(2, "0")}`}
              >
                {c.credentialId && (
                  <p className="lbl" style={{ marginTop: 4 }}>
                    ID: {c.credentialId}
                  </p>
                )}
              </LedgerCard>
            ))}
          </SectionBlock>
          */}

          {/* ── Education ───────────────────────────────── */}
          <SectionBlock
            formLabel={`form ${sectionMeta.education.form}`}
            subtitle={sectionMeta.education.subtitle}
            title={sectionMeta.education.title}
            id="education"
            actionLabel={`All ${education.length} Entries →`}
            actionHref="/education"
          >
            {topEdu.map((e, i) => (
              <LedgerCard
                key={e.institution}
                stock={e.stock}
                headTitle={e.degree}
                headSubtitle={e.institution}
                date={e.period}
                status={e.status}
                number={`no. ED-${String(i + 1).padStart(2, "0")}`}
              >
                {e.summary && (
                  <p className="prose-form card-summary">{e.summary}</p>
                )}
              </LedgerCard>
            ))}
          </SectionBlock>

          {/* ── Volunteering ────────────────────────────── */}
          <SectionBlock
            formLabel={`form ${sectionMeta.volunteering.form}`}
            subtitle={sectionMeta.volunteering.subtitle}
            title={sectionMeta.volunteering.title}
            id="volunteering"
            actionLabel={`All ${volunteering.length} Roles →`}
            actionHref="/volunteering"
          >
            {topVol.map((v, i) => (
              <LedgerCard
                key={v.org}
                stock={v.stock}
                headTitle={v.role}
                headSubtitle={v.org}
                date={v.period}
                status={v.status}
                number={`no. VL-${String(i + 1).padStart(2, "0")}`}
              >
                {v.summary && (
                  <p className="prose-form card-summary">{v.summary}</p>
                )}
              </LedgerCard>
            ))}
          </SectionBlock>
        </PageSheet>
      </main>

      <Footer />
    </>
  );
}
