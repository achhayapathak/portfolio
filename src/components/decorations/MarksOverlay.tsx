import React from "react";

/**
 * Random SVG marks overlay (crosshairs, targets, squares, arrows).
 * Each mark is positioned absolutely with % offsets and pixel widths
 * extracted from the reference site.
 */

interface Mark {
  type: "crosshair" | "target" | "squares" | "arrow" | "asterisk";
  left: string;
  top: string;
  width: string;
  rotate: string;
}

const defaultMarks: Mark[] = [
  { type: "squares", left: "12%", top: "18%", width: "38px", rotate: "15deg" },
  { type: "crosshair", left: "28%", top: "55%", width: "32px", rotate: "-30deg" },
  { type: "target", left: "45%", top: "25%", width: "44px", rotate: "15deg" },
  { type: "arrow", left: "62%", top: "70%", width: "50px", rotate: "30deg" },
  { type: "asterisk", left: "80%", top: "35%", width: "28px", rotate: "0deg" },
  { type: "squares", left: "90%", top: "60%", width: "36px", rotate: "-15deg" },
];

function MarkSvg({ type }: { type: Mark["type"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "square" as const,
    strokeLinejoin: "miter" as const,
  };

  switch (type) {
    case "crosshair":
      return (
        <svg viewBox="0 0 24 24" focusable="false" {...common}>
          <path d="M12 2 V22 M2 12 H22 M5 5 L19 19 M19 5 L5 19" {...common} />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24" focusable="false" {...common}>
          <circle cx="12" cy="12" r="7" {...common} />
          <path d="M12 1 V7 M12 17 V23 M1 12 H7 M17 12 H23" {...common} />
        </svg>
      );
    case "squares":
      return (
        <svg viewBox="0 0 24 24" focusable="false" {...common}>
          <path d="M2 2 H22 V22 H2 Z" {...common} />
          <path d="M7 7 H17 V17 H7 Z" {...common} />
          <path d="M11 11 H13 V13 H11 Z" {...common} />
        </svg>
      );
    case "arrow":
      return (
        <svg viewBox="0 0 24 24" focusable="false" {...common}>
          <path d="M3 12 H21" {...common} />
          <path d="M14 5 L21 12 L14 19" {...common} />
        </svg>
      );
    case "asterisk":
      return (
        <svg viewBox="0 0 24 24" focusable="false" {...common}>
          <path d="M12 2 V22 M2 12 H22 M5 5 L19 19 M19 5 L5 19" {...common} />
        </svg>
      );
  }
}

export function MarksOverlay({ marks = defaultMarks }: { marks?: Mark[] }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={{ color: "var(--on-stock)", opacity: 0.1 }}
    >
      {marks.map((m, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: m.left,
            top: m.top,
            width: m.width,
            height: "auto",
            translate: "-50% -50%",
            transformOrigin: "50% 50%",
            rotate: m.rotate,
          }}
        >
          <MarkSvg type={m.type} />
        </div>
      ))}
    </div>
  );
}
