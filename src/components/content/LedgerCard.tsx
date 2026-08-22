"use client";
import React from "react";
import type { StockColor, EntryStatus } from "@/data/content.config";
import { LedgerStamp } from "@/components/decorations/LedgerStamp";

/**
 * LedgerCard — the core brutalist card component.
 * Features: CardPlate (offset shadow), CardNotch (corner cut),
 * inverted header with sequential number, date bar inside body,
 * and optional stamp.
 */
export function LedgerCard({
  stock,
  headTitle,
  headSubtitle,
  date,
  status,
  stampRotation,
  number,
  children,
}: {
  stock: StockColor;
  headTitle: string;
  headSubtitle?: string;
  date?: string;
  status?: EntryStatus;
  stampRotation?: number;
  number?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`slot stock-${stock}`}>
      <div className="card-wrapper">
        {/* Shadow plate */}
        <div className="plate" aria-hidden="true" />

        <article className="app-card app-notch">
          {/* Inverted header */}
          <header className="app-card-head">
            <div className="card-head-inner">
              <div className="min-w-0">
                <h3 className="card-title">{headTitle}</h3>
                {headSubtitle && (
                  <p className="card-subtitle">{headSubtitle}</p>
                )}
              </div>
              {number && <span className="card-num lbl">{number}</span>}
            </div>
          </header>

          {/* Date bar */}
          {date && (
            <div className="card-date-bar">
              <span className="lbl">{date}</span>
            </div>
          )}

          {/* Card body */}
          <div className="card-body">{children}</div>
        </article>
      </div>

      {/* Stamp */}
      {status && (
        <div className="stamp-pos">
          <LedgerStamp
            status={status}
            rotation={stampRotation ?? (status === "In-Progress" ? -13 : -8)}
          />
        </div>
      )}

      <style jsx>{`
        .slot {
          position: relative;
          align-self: start;
          padding-bottom: 12px;
        }
        .card-wrapper {
          position: relative;
        }
        .plate {
          position: absolute;
          inset: 0;
          z-index: 0;
          translate: 6px 6px;
          background: var(--edge);
          pointer-events: none;
          transition: translate 0.18s ease, rotate 0.18s ease;
        }
        @media (hover: hover) {
          .card-wrapper:hover .plate {
            translate: 12px 12px;
            rotate: var(--tilt);
          }
        }
        .card-wrapper .app-card {
          position: relative;
          z-index: 1;
        }
        .card-head-inner {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }
        .card-title {
          font-family: var(--font-display);
          font-size: 0.92rem;
          font-weight: 400;
          line-height: 1.25;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          margin: 0;
        }
        .card-subtitle {
          font-family: var(--font-mono);
          font-size: 0.64rem;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          margin: 4px 0 0;
          opacity: 0.72;
        }
        .card-num {
          flex: none;
          white-space: nowrap;
          opacity: 0.5;
        }
        .card-date-bar {
          padding: 6px 16px;
          background: var(--stock);
        }
        @media (min-width: 640px) {
          .card-date-bar {
            padding: 6px 20px;
          }
        }
        .card-body {
          padding: 16px;
        }
        @media (min-width: 640px) {
          .card-body {
            padding: 20px;
          }
        }
        .stamp-pos {
          position: absolute;
          right: -6px;
          bottom: -12px;
          z-index: 3;
        }
        @media (min-width: 900px) {
          .stamp-pos {
            right: -14px;
          }
        }
      `}</style>
    </div>
  );
}
