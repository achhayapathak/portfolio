"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * SectionReveal — Framer Motion wrapper for viewport-triggered fade-up.
 */
export function SectionReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
}
