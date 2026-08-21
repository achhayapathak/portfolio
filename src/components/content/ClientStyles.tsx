"use client";

import React from "react";

/**
 * ClientStyles — wraps children and provides styled-jsx
 * that can't be used in Server Components.
 */
export function WorkStyles({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <style jsx global>{`
        .work-grid {
          display: grid;
          gap: 36px 26px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .work-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .bullet-list {
          list-style: disc;
          padding-left: 18px;
          margin: 10px 0 0;
        }
        .bullet-list li {
          margin-bottom: 4px;
          font-size: 0.88rem;
        }
      `}</style>
    </>
  );
}

export function GridStyles({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <style jsx global>{`
        .content-grid {
          display: grid;
          gap: 36px 26px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .content-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
}

export function CardSummaryStyles({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <style jsx global>{`
        .card-summary {
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
