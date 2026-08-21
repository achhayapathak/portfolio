"use client";
import React from "react";

/**
 * Carbon-copy title with offset shadow text.
 * Uses a data-text attribute and ::before pseudo for
 * a 2px shifted duplicate, matching the reference's
 * app-carbon-title component.
 */
export function CarbonTitle({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={`carbon-title ${className}`}>
      <span className="carbon-wrap" data-text={text}>
        <span className="carbon-top">{text}</span>
      </span>

      <style jsx>{`
        .carbon-title {
          display: inline;
        }
        .carbon-wrap {
          position: relative;
          display: inline-block;
        }
        .carbon-wrap::before {
          content: attr(data-text);
          display: block;
          position: absolute;
          inset: 0;
          transform: translate(2px, 2px);
          color: var(--on-stock);
          opacity: 0.32;
          user-select: none;
          pointer-events: none;
          font: inherit;
          letter-spacing: inherit;
          text-transform: inherit;
        }
        .carbon-top {
          position: relative;
          display: block;
          font: inherit;
          letter-spacing: inherit;
          text-transform: inherit;
        }
      `}</style>
    </span>
  );
}
