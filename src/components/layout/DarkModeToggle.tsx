"use client";

import React, { useSyncExternalStore } from "react";
import { Glyph } from "@/components/decorations/Glyph";

function subscribeTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.attributeName === "class") callback();
    }
  });
  observer.observe(document.documentElement, { attributes: true });
  return () => {
    window.removeEventListener("storage", callback);
    observer.disconnect();
  };
}

function getThemeSnapshot() {
  return (
    document.documentElement.classList.contains("dark") ||
    localStorage.getItem("theme") === "dark"
  );
}

function getServerThemeSnapshot() {
  return false;
}

const emptySubscribe = () => () => {};

/**
 * Dark mode toggle button.
 * Persists preference to localStorage, respects system preference.
 */
export function DarkModeToggle() {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const isDark = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  const toggle = () => {
    const next = !isDark;
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!isMounted) return null;

  return (
    <button
      onClick={toggle}
      className="toggle-btn"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <Glyph name={isDark ? "sun" : "moon"} size={17} />
      <span className="lbl" style={{ color: "var(--stock)" }}>
        {isDark ? "dark" : "light"}
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
