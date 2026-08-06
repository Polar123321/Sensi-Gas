"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={`mobile-reveal ${className}`} initial={reduce ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .65, delay, ease: [0.2, 0.8, 0.2, 1] }}>
      {children}
    </motion.div>
  );
}

export function SpotlightCard({ children, className = "", code }: { children: ReactNode; className?: string; code?: string }) {
  return (
    <div className={`plate ${className}`}>
      {code && <span className="plate-code">{code}</span>}
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "text-center flex flex-col items-center" : ""}>
      <span className="kicker2">{eyebrow}</span>
      <h2 className="title2">{title}</h2>
      {text && <p className="dossier-lead">{text}</p>}
    </Reveal>
  );
}

export function SensorLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-wordmark inline-flex items-center font-semibold ${compact ? "text-xs" : "text-sm"}`} aria-label="SENSIGÁS">
      SENSIGÁS
    </span>
  );
}

export function StatusDot({ color = "var(--safe)" }: { color?: string }) {
  return <span className="dot" style={{ background: color, color }} aria-hidden="true" />;
}
