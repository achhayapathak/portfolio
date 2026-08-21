"use client";
import React from "react";
import type { StockColor } from "@/data/content.config";
import { GridBackground } from "@/components/decorations/GridBackground";
import { MarksOverlay } from "@/components/decorations/MarksOverlay";

/**
 * PageSheet — the main colored section wrapper.
 * An app-panel with sheet modifier, grid background, and marks overlay.
 */
export function PageSheet({
  stock,
  formLabel,
  title,
  subtitle,
  children,
}: {
  stock: StockColor;
  formLabel: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`app-panel sheet stock-${stock} page-sheet`}>
      <GridBackground />
      <MarksOverlay />

      <div className="sheet-inner">
        <header className="sheet-head">
          <div className="sheet-head-inner">
            <p className="lbl">
              {formLabel} &nbsp;·&nbsp; {subtitle}
            </p>
            <h1 className="sheet-title">{title}</h1>
          </div>
        </header>

        <div className="sheet-body">{children}</div>
      </div>

      <style jsx>{`
        .page-sheet {
          padding: 26px 20px 34px;
          overflow: hidden;
          background: var(--stock);
          --paper: var(--stock);
        }
        @media (min-width: 760px) {
          .page-sheet {
            padding: 34px 30px 44px;
          }
        }
        .sheet-inner {
          position: relative;
          z-index: 1;
        }
        .sheet-head {
          border-bottom: var(--border-slab) solid var(--on-stock);
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .sheet-head-inner {
          max-width: 62ch;
        }
        .sheet-title {
          font-size: clamp(2rem, 7vw, 3.4rem);
          line-height: 0.95;
          margin: 10px 0 0;
          letter-spacing: -0.03em;
        }
        .sheet-body {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </section>
  );
}
