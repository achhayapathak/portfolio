"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/content.config";
import { Glyph } from "@/components/decorations/Glyph";
import { GridBackground } from "@/components/decorations/GridBackground";
import { MarksOverlay } from "@/components/decorations/MarksOverlay";

/**
 * Mobile navigation sheet — full-screen overlay.
 * Only visible below 900px.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    setOpen(false);
    document.body.classList.remove("nav-open");
  }, [pathname]);

  const toggle = useCallback(() => {
    setOpen((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.add("nav-open");
      } else {
        document.body.classList.remove("nav-open");
      }
      return next;
    });
  }, []);

  return (
    <>
      {/* Trigger button — only visible on mobile */}
      <button
        onClick={toggle}
        className="mobile-trigger"
        aria-label="Open navigation"
        aria-expanded={open}
      >
        <Glyph name="menu" className="ico" size={17} />
        <span className="lbl" style={{ color: "var(--stock)" }}>
          index
        </span>
      </button>

      {/* Sheet overlay */}
      {open && (
        <div className="mobile-sheet" role="dialog" aria-label="Navigation">
          <div className="relative overflow-hidden" style={{ minHeight: "100%", paddingBottom: 40 }}>
            <GridBackground />
            <MarksOverlay />

            <div className="mobile-bar">
              <span className="lbl lbl-ink">FORM NV-00 &nbsp;·&nbsp; INDEX OF RECORDS</span>
              <button
                onClick={toggle}
                className="mobile-close"
                aria-label="Close navigation"
              >
                <Glyph name="close" className="ico" size={18} />
              </button>
            </div>

            <nav className="mobile-list">
              <ul>
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`mobile-row stock-${item.stock} ${isActive ? "on" : ""}`}
                        onClick={() => setOpen(false)}
                      >
                        <span className="mobile-swatch" />
                        <span className="mobile-name">{item.label}</span>
                        <span className="mobile-arrow">→</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}

      <style jsx global>{`
        .mobile-trigger {
          display: none;
          cursor: pointer;
          align-items: center;
          gap: 8px;
          padding: 9px 15px;
          border: 0 solid var(--ground);
          border-right-width: var(--border-card);
          border-bottom-width: var(--border-card);
          background: var(--on-stock);
          color: var(--stock);
          box-shadow: var(--shadow-sm);
          transition: box-shadow 0.15s ease, translate 0.15s ease,
            rotate 0.15s ease;
        }
        @media (max-width: 899px) {
          .mobile-trigger {
            display: inline-flex;
          }
        }
        @media (hover: hover) {
          .mobile-trigger:hover {
            box-shadow: 0 0 0 var(--edge);
            translate: var(--press) var(--press);
            rotate: var(--tilt);
          }
        }
        .mobile-sheet {
          position: fixed;
          inset: 0;
          z-index: 100;
          overflow: auto;
          padding: 24px 20px;
          background: var(--paper);
          color: var(--ink);
          animation: fade-in 0.15s ease-out;
        }
        .mobile-bar {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          border-bottom: var(--border-slab) solid var(--ink);
          padding-bottom: 14px;
          margin-bottom: 24px;
        }
        .mobile-close {
          cursor: pointer;
          display: inline-flex;
          padding: 8px;
          border: var(--border-card) solid var(--ink);
          background: var(--paper);
          color: var(--ink);
          box-shadow: 3px 3px 0 var(--ink);
        }
        .mobile-list {
          position: relative;
          z-index: 1;
        }
        .mobile-list ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .mobile-row {
          display: flex;
          align-items: center;
          padding: 16px 20px;
          border: var(--border-card) solid var(--ink);
          box-shadow: 4px 4px 0 var(--ink);
          background: var(--stock);
          color: var(--on-stock);
          font-family: var(--font-mono);
          font-size: 1.15rem;
          font-weight: 700;
          text-transform: lowercase;
          letter-spacing: 0.02em;
          text-decoration: none;
        }
        .mobile-swatch {
          width: 18px;
          height: 18px;
          flex: none;
          border: 2px solid var(--ink);
          background: transparent;
          margin-right: 14px;
        }
        .mobile-row.on .mobile-swatch {
          background: var(--ink);
        }
        .mobile-name {
          flex: 1;
        }
        .mobile-arrow {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 1.2rem;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
