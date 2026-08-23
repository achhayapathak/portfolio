"use client";

import React, { useEffect, useState } from "react";
import { Glyph } from "@/components/decorations/Glyph";

/**
 * Dark mode toggle button.
 * Persists preference to localStorage, respects system preference.
 */
export function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className="toggle-btn"
      aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
    >
      <Glyph name={dark ? "sun" : "moon"} size={17} />
      <span className="lbl" style={{ color: "var(--stock)" }}>
        {dark ? "dark" : "light"}
      </span>

      <style jsx>{`
        .toggle-btn {
          cursor: pointer;
          display: inline-flex;
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
        @media (hover: hover) {
          .toggle-btn:hover {
            box-shadow: 0 0 0 var(--edge);
            translate: var(--press) var(--press);
            rotate: var(--tilt);
          }
        }
      `}</style>
    </button>
  );
}
