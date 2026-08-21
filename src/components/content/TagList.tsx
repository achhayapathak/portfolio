"use client";
import React from "react";

/**
 * TagList — flex row of rotated tag pills.
 * Uses the .app-tag class from globals.css which handles the rotation pattern.
 */
export function TagList({ tags }: { tags: string[] }) {
  if (!tags.length) return null;

  return (
    <ul className="tag-list">
      {tags.map((tag) => (
        <li key={tag}>
          <span className="app-tag">{tag}</span>
        </li>
      ))}

      <style jsx>{`
        .tag-list {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin: 16px 0 0;
          padding: 0;
        }
      `}</style>
    </ul>
  );
}
