"use client";

import { motion } from "framer-motion";
import { Palette, Eye } from "lucide-react";

const NODES = [
  { x: 40, y: 60 },
  { x: 360, y: 40 },
  { x: 380, y: 300 },
  { x: 20, y: 340 },
  { x: 200, y: 20 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [0, 4],
  [1, 4],
];

const PARTICLES = [
  { left: "6%", top: "20%", size: 5, color: "bg-primary", duration: 9, delay: 0 },
  { left: "88%", top: "16%", size: 4, color: "bg-secondary", duration: 11, delay: 1.2 },
  { left: "4%", top: "72%", size: 4, color: "bg-accent", duration: 10, delay: 0.6 },
  { left: "90%", top: "78%", size: 6, color: "bg-primary", duration: 12, delay: 1.8 },
];

export function HeroAura() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true">
      <svg
        viewBox="0 0 400 360"
        className="absolute inset-[-14%] h-[128%] w-[128%] opacity-40"
      >
        <defs>
          <linearGradient id="hero-aura-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="50%" stopColor="var(--secondary)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </linearGradient>
        </defs>

        {EDGES.map(([a, b], i) => {
          const from = NODES[a];
          const to = NODES[b];
          return (
            <motion.line
              key={i}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#hero-aura-line)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.6, 0.3, 0.6] }}
              transition={{
                pathLength: { duration: 1.6, delay: 0.4 + i * 0.15, ease: "easeOut" },
                opacity: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 },
              }}
            />
          );
        })}

        {NODES.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={3}
            fill="var(--accent)"
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          />
        ))}
      </svg>

      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className={`absolute select-none rounded-full ${p.color} blur-[1px]`}
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ y: [0, -16, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 10, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute -left-6 bottom-[18%] hidden items-center gap-1.5 rounded-xl glass-strong px-3 py-2 shadow-lg lg:flex"
      >
        <Palette className="h-3 w-3 text-secondary" />
        <span className="text-[9px] font-medium text-muted">Design System</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10, rotate: 3 }}
        animate={{ opacity: 1, y: 0, rotate: 3 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="absolute -right-4 top-[2%] hidden items-center gap-1.5 rounded-xl glass-strong px-3 py-2 shadow-lg lg:flex"
      >
        <Eye className="h-3 w-3 text-accent" />
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
        <span className="text-[9px] font-medium text-muted">Live Preview</span>
      </motion.div>

      <motion.div
        className="absolute inset-[-20%] opacity-0"
        animate={{ opacity: [0, 0.5, 0], x: ["-20%", "20%"] }}
        transition={{ duration: 7, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(75deg, transparent 40%, rgba(59,130,246,0.12) 48%, rgba(139,92,246,0.16) 50%, rgba(59,130,246,0.12) 52%, transparent 60%)",
        }}
      />
    </div>
  );
}
