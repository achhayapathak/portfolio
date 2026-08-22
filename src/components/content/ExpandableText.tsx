"use client";

import React, { useState, useRef, useEffect } from "react";

/**
 * ExpandableText
 * Automatically clamps content to a specific number of lines (default 5).
 * If the content exceeds this limit, it displays a "+ read full entry" button.
 */
export function ExpandableText({ 
  children, 
  lines = 5 
}: { 
  children: React.ReactNode;
  lines?: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        const el = contentRef.current;
        
        // If we are currently expanded, we need to temporarily clamp to measure
        const originalStyle = el.style.display;
        const originalClamp = el.style.webkitLineClamp;
        const originalOrient = el.style.webkitBoxOrient;
        const originalOverflow = el.style.overflow;
        
        if (isExpanded) {
          el.style.display = "-webkit-box";
          el.style.webkitLineClamp = lines.toString();
          el.style.webkitBoxOrient = "vertical";
          el.style.overflow = "hidden";
        }
        
        const overflowing = el.scrollHeight > el.clientHeight;
        setHasOverflow(overflowing);
        
        if (isExpanded) {
          el.style.display = originalStyle;
          el.style.webkitLineClamp = originalClamp;
          el.style.webkitBoxOrient = originalOrient;
          el.style.overflow = originalOverflow;
        }
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [children, lines, isExpanded]);

  return (
    <div className="expandable-wrapper">
      <div 
        ref={contentRef} 
        className={`expandable-content ${!isExpanded ? "clamped" : ""}`}
      >
        {children}
      </div>
      
      {hasOverflow && (
        <button 
          className="more-btn" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "– show less" : "+ read full entry"}
        </button>
      )}

      <style jsx>{`
        .expandable-wrapper {
          position: relative;
        }
        .clamped {
          display: -webkit-box;
          -webkit-line-clamp: ${lines};
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .more-btn {
          display: inline-block;
          margin-top: 10px;
          padding: 2px 0;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--on-stock);
          background: transparent;
          border: none;
          border-bottom: 2px solid var(--on-stock);
          text-transform: uppercase;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .more-btn:hover {
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
}
