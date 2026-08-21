import { Ticker } from "@/components/layout/Ticker";
import { Masthead } from "@/components/layout/Masthead";
import { Footer } from "@/components/layout/Footer";
import { PageSheet } from "@/components/content/PageSheet";
import { SectionBlock } from "@/components/content/SectionBlock";
import { LedgerCard } from "@/components/content/LedgerCard";
import { TagList } from "@/components/content/TagList";
import {
  work,
  projects,
  certifications,
  education,
  volunteering,
  sectionMeta,
} from "@/data/content.config";

export default function OverviewPage() {
  const topWork = work.slice(0, 2);
  const topProjects = projects.slice(0, 2);
  const topCerts = certifications.slice(0, 2);
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
          {/* Work */}
          <SectionBlock
            formLabel={`form ${sectionMeta.work.form}`}
            subtitle={sectionMeta.work.subtitle}
            title={sectionMeta.work.title}
            id="work"
            isFirst
          >
            {topWork.map((w) => (
              <LedgerCard
                key={w.company}
                stock={w.stock}
                headTitle={w.role}
                headSubtitle={w.company}
                date={w.period}
                status={w.status}
              >
                <p className="prose-form card-summary">{w.summary}</p>
                <TagList tags={w.tags} />
              </LedgerCard>
            ))}
          </SectionBlock>

          {/* Projects */}
          <SectionBlock
            formLabel={`form ${sectionMeta.projects.form}`}
            subtitle={sectionMeta.projects.subtitle}
            title={sectionMeta.projects.title}
            id="projects"
          >
            {topProjects.map((p) => (
              <LedgerCard
                key={p.name}
                stock={p.stock}
                headTitle={p.name}
                headSubtitle={p.tagline}
                date={p.period}
                status={p.status}
              >
                <p className="prose-form card-summary">{p.summary}</p>
                <TagList tags={p.tags} />
                {p.link && (
                  <div style={{ marginTop: 18 }}>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="app-btn"
                    >
                      View Project →
                    </a>
                  </div>
                )}
              </LedgerCard>
            ))}
          </SectionBlock>

          {/* Certifications */}
          <SectionBlock
            formLabel={`form ${sectionMeta.certifications.form}`}
            subtitle={sectionMeta.certifications.subtitle}
            title={sectionMeta.certifications.title}
            id="certifications"
          >
            {topCerts.map((c) => (
              <LedgerCard
                key={c.name}
                stock={c.stock}
                headTitle={c.name}
                headSubtitle={c.issuer}
                date={c.date}
                status={c.status}
              >
                {c.credentialId && (
                  <p className="lbl" style={{ marginTop: 4 }}>
                    ID: {c.credentialId}
                  </p>
                )}
              </LedgerCard>
            ))}
          </SectionBlock>

          {/* Education */}
          <SectionBlock
            formLabel={`form ${sectionMeta.education.form}`}
            subtitle={sectionMeta.education.subtitle}
            title={sectionMeta.education.title}
            id="education"
          >
            {topEdu.map((e) => (
              <LedgerCard
                key={e.institution}
                stock={e.stock}
                headTitle={e.degree}
                headSubtitle={e.institution}
                date={e.period}
                status={e.status}
              >
                {e.summary && (
                  <p className="prose-form card-summary">{e.summary}</p>
                )}
              </LedgerCard>
            ))}
          </SectionBlock>

          {/* Volunteering */}
          <SectionBlock
            formLabel={`form ${sectionMeta.volunteering.form}`}
            subtitle={sectionMeta.volunteering.subtitle}
            title={sectionMeta.volunteering.title}
            id="volunteering"
          >
            {topVol.map((v) => (
              <LedgerCard
                key={v.org}
                stock={v.stock}
                headTitle={v.role}
                headSubtitle={v.org}
                date={v.period}
                status={v.status}
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
