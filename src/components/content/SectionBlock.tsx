"use client";

import React from "react";
import { SectionReveal } from "./SectionReveal";

/**
 * SectionBlock — a section within a page with heading and grid.
 * Used on the overview page and individual section pages.
 */
export function SectionBlock({
  formLabel,
  subtitle,
  title,
  id,
  children,
  isFirst = false,
}: {
  formLabel: string;
  subtitle: string;
  title: string;
  id: string;
  children: React.ReactNode;
  isFirst?: boolean;
}) {
  return (
    <SectionReveal>
      <div className={`sec ${isFirst ? "sec-first" : ""}`}>
        <header className="sec-head">
          <div>
            <p className="lbl">
              {formLabel} &nbsp;·&nbsp; {subtitle}
            </p>
            <h2 className="sec-h" id={`sec-${id}`}>
              {title}
            </h2>
          </div>
        </header>

        <div className="sec-grid">{children}</div>

        <style jsx>{`
          .sec {
            padding-top: 30px;
            border-top: 3px solid var(--ink);
            margin-top: 34px;
          }
          .sec.sec-first {
            padding-top: 0;
            border-top: none;
            margin-top: 0;
          }
          .sec-head {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 16px;
            flex-wrap: wrap;
            margin-bottom: 26px;
          }
          .sec-head p {
            margin: 0;
          }
          .sec-h {
            font-size: clamp(1.3rem, 4.4vw, 1.9rem);
            letter-spacing: -0.02em;
            margin-top: 8px;
          }
          .sec-grid {
            display: grid;
            gap: 36px 26px;
            grid-template-columns: 1fr;
          }
          @media (min-width: 900px) {
            .sec-grid {
              grid-template-columns: 1fr 1fr;
            }
          }
        `}</style>
      </div>
    </SectionReveal>
  );
}
