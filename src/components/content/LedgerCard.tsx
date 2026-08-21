"use client";
import React from "react";
import type { StockColor, EntryStatus } from "@/data/content.config";
import { LedgerStamp } from "@/components/decorations/LedgerStamp";

/**
 * LedgerCard — the core brutalist card component.
 * Features: CardPlate (offset shadow), CardNotch (corner cut),
 * inverted header, and optional stamp.
 */
export function LedgerCard({
  stock,
  headTitle,
  headSubtitle,
  date,
  status,
  stampRotation,
  children,
}: {
  stock: StockColor;
  headTitle: string;
  headSubtitle?: string;
  date?: string;
  status?: EntryStatus;
  stampRotation?: number;
  children: React.ReactNode;
}) {
  return (
    <div className={`slot stock-${stock}`}>
      <div className="card-wrapper">
        {/* Shadow plate */}
        <div className="plate" aria-hidden="true" />

        <article className="app-card app-notch">
          {/* Inverted header */}
          <header className="app-card-head flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="card-title">{headTitle}</h3>
              {headSubtitle && (
                <p className="card-subtitle">{headSubtitle}</p>
              )}
            </div>
          </header>

          {/* Card body */}
          <div className="card-body">{children}</div>
        </article>

        {/* Date below card */}
        {date && <p className="lbl card-date">{date}</p>}
      </div>

      {/* Stamp */}
      {status && (
        <div className="stamp-pos">
          <LedgerStamp
            status={status}
            rotation={stampRotation ?? (status === "pending" ? -13 : -8)}
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
        .card-wrapper:hover .plate {
          translate: 12px 12px;
          rotate: var(--tilt);
        }
        .card-wrapper .app-card {
          position: relative;
          z-index: 1;
        }
        .card-title {
          font-family: var(--font-sans);
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: 0.01em;
          text-transform: none;
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
        .card-body {
          padding: 16px;
        }
        @media (min-width: 640px) {
          .card-body {
            padding: 20px;
          }
        }
        .card-date {
          margin: 6px 0 0;
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
