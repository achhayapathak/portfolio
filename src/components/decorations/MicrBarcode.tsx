import React from "react";

/**
 * MICR-style barcode rendered as SVG rects.
 * Encodes a name into a bank-check-style decorative barcode.
 */

// Simple character-to-bar encoding
function encodeChar(ch: string): Array<{ w: number; h: "full" | "half" }> {
  const code = ch.charCodeAt(0);
  const bars: Array<{ w: number; h: "full" | "half" }> = [];
  // Generate 2-4 bars per character based on char code
  const count = 2 + (code % 3);
  for (let i = 0; i < count; i++) {
    bars.push({
      w: 2 + ((code + i * 7) % 4), // width 2-5
      h: (code + i) % 3 === 0 ? "half" : "full",
    });
  }
  return bars;
}

function nameToRects(name: string): Array<{ x: number; w: number; y: number; h: number }> {
  const rects: Array<{ x: number; w: number; y: number; h: number }> = [];
  let x = 2;

  for (const ch of name.toLowerCase()) {
    if (ch === " ") {
      x += 8;
      continue;
    }
    const bars = encodeChar(ch);
    for (const bar of bars) {
      rects.push({
        x,
        w: bar.w,
        y: bar.h === "full" ? 2 : 8,
        h: bar.h === "full" ? 18 : 12,
      });
      x += bar.w + 3;
    }
    x += 2;
  }

  return rects;
}

export function MicrBarcode({ name }: { name: string }) {
  const rects = nameToRects(name);

  return (
    <div className="h-[22px]" aria-hidden="true">
      <svg
        preserveAspectRatio="none"
        role="img"
        viewBox="0 0 640 22"
        aria-label={`Routing band ${name}`}
        className="block h-full w-full"
        style={{ fill: "currentColor" }}
      >
        {rects.map((r, i) => (
          <rect key={i} x={r.x} width={r.w} y={r.y} height={r.h} />
        ))}
      </svg>
    </div>
  );
}
