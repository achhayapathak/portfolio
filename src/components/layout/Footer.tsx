"use client";
import React from "react";
import { site } from "@/data/content.config";
import { Glyph } from "@/components/decorations/Glyph";
import { GridBackground } from "@/components/decorations/GridBackground";
import { MarksOverlay } from "@/components/decorations/MarksOverlay";
import { MicrBarcode } from "@/components/decorations/MicrBarcode";

/**
 * Footer — app-panel with grid overlay, 3-col info grid, MICR barcode.
 */
export function Footer() {
  return (
    <footer className="foot app-panel stock-cream">
      <GridBackground />
      <MarksOverlay
        marks={[
          { type: "target", left: "15%", top: "30%", width: "40px", rotate: "10deg" },
          { type: "squares", left: "35%", top: "65%", width: "30px", rotate: "-20deg" },
          { type: "crosshair", left: "58%", top: "71%", width: "28px", rotate: "-30deg" },
          { type: "target", left: "67%", top: "23%", width: "44px", rotate: "15deg" },
          { type: "arrow", left: "79%", top: "68%", width: "50px", rotate: "30deg" },
          { type: "asterisk", left: "92%", top: "40%", width: "32px", rotate: "0deg" },
        ]}
      />

      <div className="foot-grid">
        <div>
          <p className="lbl">name</p>
          <p className="num foot-strong">{site.name.toLowerCase()}</p>
          <p className="lbl">based in &nbsp;·&nbsp; {site.location.toLowerCase()}</p>
        </div>

        <div>
          <p className="lbl">contact</p>
          <ul className="links">
            <li>
              <a className="num" href={`mailto:${site.email}`}>
                <Glyph name="mail" className="ico" size={16} />
                <span>{site.email}</span>
              </a>
            </li>
            {site.social.map((s) => (
              <li key={s.platform}>
                <a
                  className="num"
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Glyph
                    name={s.icon as "card" | "code" | "link"}
                    className="ico"
                    size={16}
                  />
                  <span>{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="foot-note">
          <p className="lbl">colophon</p>
          <p className="prose-form">
            Built with Next.js and Tailwind. Every mark on this site — the
            stamps, the rules, the perforations — is drawn in CSS or SVG. No
            images.
          </p>
        </div>
      </div>

      <div className="foot-micr">
        <MicrBarcode name={site.name} />
      </div>

      <style jsx>{`
        .foot {
          margin: 44px 0 20px;
          padding: 26px 22px 14px;
        }
        .foot-grid,
        .foot-micr {
          position: relative;
          z-index: 1;
        }
        .foot-grid {
          display: grid;
          gap: 26px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 760px) {
          .foot-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
        }
        .foot-strong {
          font-size: 0.95rem;
          font-weight: 600;
          margin: 5px 0;
          text-transform: uppercase;
        }
        .foot p {
          margin: 0 0 4px;
        }
        .links {
          list-style: none;
          margin: 6px 0 0;
          padding: 0;
        }
        .links li {
          margin-bottom: 5px;
        }
        .links a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          padding: 1px 5px;
          margin-left: -5px;
          border-bottom: 2px solid color-mix(in srgb, var(--ink) 35%, transparent);
          transition: background-color 0.18s ease, color 0.18s ease,
            border-color 0.18s ease;
          word-break: break-all;
        }
        .links a:hover,
        .links a:focus-visible {
          background: var(--stock);
          color: var(--on-stock);
          border-bottom-color: var(--on-stock);
        }
        .foot-note .prose-form {
          font-size: 0.82rem;
          margin-top: 6px;
          color: var(--ink-soft);
        }
        .foot-micr {
          margin-top: 22px;
          color: var(--ink);
          opacity: 0.45;
        }
      `}</style>
    </footer>
  );
}
