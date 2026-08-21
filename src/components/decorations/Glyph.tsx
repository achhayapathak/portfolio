import React from "react";

/**
 * Glyph icon system — stroke-only SVGs.
 * 20px wide, square stroke-linecap, miter join.
 * Matches the reference's app-glyph component.
 */

type GlyphName =
  | "mail"
  | "card"
  | "more"
  | "arrow"
  | "code"
  | "link"
  | "sun"
  | "moon"
  | "menu"
  | "close"
  | "chevron";

const paths: Record<GlyphName, React.ReactNode> = {
  mail: <path d="M3 5 H21 V19 H3 Z M3 5 L12 13 L21 5" />,
  card: (
    <>
      <path d="M3 5 H21 V19 H3 Z" />
      <path d="M6 9 H11 V13 H6 Z" />
      <path d="M6 16 H11" />
      <path d="M14 9.5 H18 M14 13 H18 M14 16 H18" />
    </>
  ),
  more: <path d="M12 3.6 V20.4 M3.6 12 H20.4" strokeWidth="3" />,
  arrow: (
    <>
      <path d="M3 12 H21" />
      <path d="M14 5 L21 12 L14 19" />
    </>
  ),
  code: (
    <>
      <path d="M8 6 L2 12 L8 18" />
      <path d="M16 6 L22 12 L16 18" />
    </>
  ),
  link: (
    <>
      <path d="M10 14 L14 10" />
      <path d="M15 9 L18 6 A3 3 0 0 0 14 2 L11 5" />
      <path d="M9 15 L6 18 A3 3 0 0 0 10 22 L13 19" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2 V5 M12 19 V22 M2 12 H5 M19 12 H22 M4.9 4.9 L7 7 M17 17 L19.1 19.1 M19.1 4.9 L17 7 M7 17 L4.9 19.1" />
    </>
  ),
  moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />,
  menu: <path d="M3 6 H21 M3 12 H21 M3 18 H21" />,
  close: <path d="M6 6 L18 18 M18 6 L6 18" />,
  chevron: <path d="M9 6 L15 12 L9 18" />,
};

interface GlyphProps {
  name: GlyphName;
  className?: string;
  size?: number;
}

export function Glyph({ name, className = "", size = 20 }: GlyphProps) {
  return (
    <span className={`inline-block flex-none ${className}`} style={{ width: size }}>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        className="block h-auto w-full"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
        }}
      >
        {paths[name]}
      </svg>
    </span>
  );
}

export type { GlyphName };
