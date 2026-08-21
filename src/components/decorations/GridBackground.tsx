import React from "react";

/**
 * 4-layer repeating CSS grid-lines overlay.
 * Major lines every 5 cells, minor lines at each cell.
 * Placed absolutely behind content.
 */
export function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        color: "var(--ink)",
        backgroundImage: [
          "repeating-linear-gradient(to right, currentColor 0 1px, transparent 1px calc(14px * 5))",
          "repeating-linear-gradient(to bottom, currentColor 0 1px, transparent 1px calc(14px * 5))",
          "repeating-linear-gradient(to right, color-mix(in srgb, currentColor 45%, transparent) 0 1px, transparent 1px 14px)",
          "repeating-linear-gradient(to bottom, color-mix(in srgb, currentColor 45%, transparent) 0 1px, transparent 1px 14px)",
        ].join(","),
      }}
    />
  );
}
