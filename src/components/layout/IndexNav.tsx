"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/content.config";

/**
 * Desktop navigation — horizontal row of tabs with color swatches.
 * Hidden on mobile (<900px).
 */
export function IndexNav() {
  const pathname = usePathname();

  return (
    <nav className="index-nav" aria-label="Section index">
      <ul className="index-list">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`part stock-${item.stock} ${isActive ? "on" : ""}`}
              >
                <span className="swatch" />
                <span className="part-label">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <style jsx>{`
        .index-nav {
          position: relative;
          z-index: 1;
        }
        @media (max-width: 899px) {
          .index-nav {
            display: none;
          }
        }
        .index-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }
      `}</style>
      <style jsx global>{`
        .part {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px 6px 8px;
          border: 2px solid var(--ink);
          background: var(--paper);
          font-family: var(--font-mono);
          text-transform: capitalize;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
          cursor: pointer;
        }
        .part-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.06em;
        }
        .swatch {
          width: 13px;
          height: 13px;
          border: 2px solid var(--ink);
          background: var(--stock);
          flex: none;
        }
        .part:hover {
          box-shadow: 3px 3px 0 var(--ink);
          transform: translate(-1px, -1px);
        }
        .part.on {
          background: var(--stock);
          box-shadow: 3px 3px 0 var(--ink);
        }
        .part.on .swatch {
          background: var(--ink);
        }
      `}</style>
    </nav>
  );
}
