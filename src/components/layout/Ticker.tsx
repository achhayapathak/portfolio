"use client";

import React from "react";
import { ticker } from "@/data/content.config";

/**
 * Full-width scrolling marquee ticker at the top of the page.
 * CSS animation with duplicated content for seamless loop.
 */
export function Ticker() {
  const cells = ticker.map((t, i) => (
    <span key={i} className="ticker-cell">
      <span className="ticker-sym">∆</span>
      {t.date} · {t.org} · {t.detail} · {t.status}
    </span>
  ));

  // Add a "balance carried forward" cell
  const balanceCell = (
    <span key="balance" className="ticker-cell">
      <span className="ticker-sym">∆</span>
      balance carried forward ·············· portfolio
    </span>
  );

  return (
    <div className="stock-cream ticker-wrap">
      <div aria-hidden="true" className="ticker-track">
        <div
          className="ticker-tape"
          style={{ animationDuration: `${(ticker.length + 1) * 10}s` }}
        >
          {cells}
          {balanceCell}
          {/* Duplicate for seamless loop */}
          {cells}
          {balanceCell}
        </div>
      </div>

      <style jsx>{`
        .ticker-wrap {
          display: block;
          overflow: hidden;
          border-top: 3px solid var(--ink);
          border-bottom: 3px solid var(--ink);
          background: var(--ink);
          color: var(--stock);
        }
        .ticker-track {
          overflow: hidden;
          height: 30px;
          display: flex;
          align-items: center;
        }
        .ticker-tape {
          display: flex;
          flex: none;
          white-space: nowrap;
          animation: app-marquee linear infinite;
          will-change: transform;
        }
        .ticker-cell {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0 18px;
          font-variant-numeric: tabular-nums;
        }
        .ticker-sym {
          color: var(--on-stock);
          margin-right: 8px;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}
