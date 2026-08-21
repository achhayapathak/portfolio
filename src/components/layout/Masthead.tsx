"use client";

import React from "react";
import Link from "next/link";
import { site } from "@/data/content.config";
import { CarbonTitle } from "./CarbonTitle";
import { IndexNav } from "./IndexNav";
import { MobileNav } from "./MobileNav";
import { DarkModeToggle } from "./DarkModeToggle";
import { GridBackground } from "@/components/decorations/GridBackground";
import { MarksOverlay } from "@/components/decorations/MarksOverlay";

/**
 * Masthead header — the main branded panel at the top.
 * CSS Grid with brand / index / toggle areas.
 */
export function Masthead() {
  return (
    <header className="masthead app-panel stock-cream">
      <GridBackground />
      <MarksOverlay />

      <div className="brand">
        <Link href="/" className="brand-link">
          <CarbonTitle
            text={site.name}
            className="brand-name"
          />
        </Link>
        <p className="lbl lbl-ink brand-sub">
          {site.title} &nbsp;·&nbsp; {site.location}
        </p>
      </div>

      <div className="controls">
        <DarkModeToggle />
        <MobileNav />
      </div>

      <IndexNav />

      <style jsx>{`
        .masthead {
          margin-top: 18px;
          padding: 20px 22px;
          display: grid;
          gap: 18px;
          grid-template-columns: 1fr;
          grid-template-areas:
            "brand"
            "index"
            "toggle";
          overflow: hidden;
        }
        @media (min-width: 900px) {
          .masthead {
            grid-template-columns: minmax(0, 1fr) auto;
            grid-template-areas:
              "brand toggle"
              "index index";
            align-items: center;
            gap: 20px 26px;
          }
        }
        .brand {
          grid-area: brand;
          position: relative;
          z-index: 1;
          min-width: 0;
        }
        .brand-link:focus-visible {
          outline-offset: 5px;
        }
        .brand-sub {
          margin: 9px 0 0;
        }
        .controls {
          grid-area: toggle;
          position: relative;
          z-index: 60;
          justify-self: start;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
      `}</style>
      <style jsx global>{`
        .brand-name {
          font-family: var(--font-mono);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          font-size: clamp(1.55rem, 5.4vw, 2.6rem);
          line-height: 1;
        }
      `}</style>
    </header>
  );
}
