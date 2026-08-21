"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/content.config";
import { Glyph } from "@/components/decorations/Glyph";
import { GridBackground } from "@/components/decorations/GridBackground";

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
          <div className="relative overflow-hidden">
            <GridBackground />

            <div className="mobile-bar">
              <span className="lbl">index</span>
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
                        <Glyph name="chevron" className="ml-auto" size={16} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}

      <style jsx>{`
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
          padding: 18px 16px 28px;
          background: var(--stock);
          color: var(--on-stock);
        }
        .mobile-bar {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          border-bottom: var(--border-slab) solid var(--on-stock);
          padding-bottom: 14px;
          margin-bottom: 22px;
        }
        .mobile-close {
          cursor: pointer;
          display: inline-flex;
          padding: 10px;
          border: var(--border-card) solid var(--on-stock);
          background: none;
          color: var(--on-stock);
        }
        .mobile-list {
          position: relative;
          z-index: 1;
        }
        .mobile-list ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 14px;
        }
        .mobile-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          border: var(--border-card) solid var(--edge);
          box-shadow: var(--shadow-md);
          background: var(--stock);
          color: var(--on-stock);
          font-family: var(--font-mono);
          font-size: 1.05rem;
          font-weight: 700;
          text-transform: lowercase;
          letter-spacing: 0.02em;
        }
        .mobile-swatch {
          width: 18px;
          height: 18px;
          flex: none;
          border: var(--border-card) solid var(--on-stock);
        }
        .mobile-name {
          min-width: 0;
        }
        .mobile-row.on .mobile-swatch {
          background: var(--on-stock);
        }
        .mobile-row:active {
          box-shadow: 0 0 0 var(--edge);
          translate: var(--press) var(--press);
        }
      `}</style>
    </>
  );
}
