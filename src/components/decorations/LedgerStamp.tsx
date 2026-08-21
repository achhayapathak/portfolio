"use client";

import React from "react";

interface LedgerStampProps {
  status: string;
  rotation?: number;
}

/**
 * Rubber-stamp effect with noise mask.
 * Renders a rotated label with SVG feTurbulence grain overlay
 * and mix-blend-mode: difference for the distressed look.
 */
export function LedgerStamp({ status, rotation = -12 }: LedgerStampProps) {
  return (
    <span
      role="status"
      className="app-stamp"
      style={{ "--rot": `${rotation}deg` } as React.CSSProperties}
      aria-label={`Status: ${status}`}
    >
      <span className="app-stamp-box">{status}</span>

      <style jsx>{`
        .app-stamp {
          display: inline-block;
          line-height: 0;
          mix-blend-mode: difference;
        }
        .app-stamp > .app-stamp-box {
          display: inline-block;
          transform: rotate(var(--rot, -12deg));
          mask-image: var(--grain);
          -webkit-mask-image: var(--grain);
          mask-size: 90px 46px;
          -webkit-mask-size: 90px 46px;
          --grain: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='90' height='46'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' seed='4'/><feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -1 0 0 0 1.18'/></filter><rect width='90' height='46' filter='url(%23n)'/></svg>");
        }
        .app-stamp-box {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          background: #fff;
          color: #000;
          padding: 5px 11px;
          border: 2.5px solid #000;
          box-shadow: inset 0 0 0 1.5px #fff, inset 0 0 0 3px #000;
          border-radius: 2px;
          white-space: nowrap;
          line-height: 1.35;
        }
      `}</style>
    </span>
  );
}
