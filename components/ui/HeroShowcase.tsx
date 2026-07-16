"use client";

import { motion } from "framer-motion";
import { Lock, Image as ImageIcon, MousePointer2 } from "lucide-react";

const GRID_CARDS = [
  { icon: ImageIcon, tone: "from-primary/50 to-primary/10" },
  { icon: MousePointer2, tone: "from-secondary/50 to-secondary/10" },
  { icon: ImageIcon, tone: "from-accent/50 to-accent/10" },
];

const stack = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } },
};

const piece = {
  hidden: { opacity: 0, y: 10, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroShowcase() {
  return (
    <div className="relative w-[64%] sm:w-[58%]">
      {/* back layer — mobile viewport, suggests responsive design */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -14 }}
        animate={{ opacity: 1, y: [0, -8, 0], rotate: -12 }}
        transition={{
          opacity: { duration: 0.7, delay: 0.15 },
          rotate: { duration: 0.7, delay: 0.15 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        className="absolute -left-8 bottom-6 z-0 w-14 rounded-xl glass-strong p-2 shadow-xl sm:-left-10 sm:w-16"
      >
        <div className="mx-auto mb-1.5 h-1 w-4 rounded-full bg-foreground/20" />
        <div className="space-y-1">
          <div className="h-6 rounded-md bg-gradient-to-br from-primary/40 to-secondary/30" />
          <div className="h-1 w-full rounded-full bg-foreground/15" />
          <div className="h-1 w-2/3 rounded-full bg-foreground/10" />
        </div>
      </motion.div>

      {/* middle layer — tablet viewport, peeking top-right */}
      <motion.div
        initial={{ opacity: 0, y: -20, rotate: 12 }}
        animate={{ opacity: 1, y: [0, -10, 0], rotate: 10 }}
        transition={{
          opacity: { duration: 0.7, delay: 0.3 },
          rotate: { duration: 0.7, delay: 0.3 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
        }}
        className="absolute -right-6 -top-6 z-0 w-24 rounded-xl glass-strong p-2.5 shadow-xl sm:-right-8 sm:w-28"
      >
        <div className="flex items-center justify-between">
          <div className="h-1.5 w-6 rounded-full bg-gradient-to-r from-secondary to-accent" />
          <div className="flex gap-0.5">
            <span className="h-1 w-1 rounded-full bg-foreground/20" />
            <span className="h-1 w-1 rounded-full bg-foreground/20" />
          </div>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-1">
          <div className="col-span-2 h-8 rounded-md bg-gradient-to-br from-secondary/40 to-transparent" />
          <div className="h-8 rounded-md bg-gradient-to-br from-accent/40 to-transparent" />
        </div>
      </motion.div>

      {/* front layer — the centerpiece: a live website preview assembling itself */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ y: -6, scale: 1.015 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 rounded-[26px] bg-gradient-animated p-px shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35),0_8px_30px_-8px_rgba(139,92,246,0.35)] transition-shadow duration-500 hover:shadow-[0_28px_70px_-12px_rgba(0,0,0,0.4),0_12px_38px_-6px_rgba(139,92,246,0.5)]"
      >
        <div className="relative overflow-hidden rounded-[25px] bg-background-soft/95 backdrop-blur-2xl">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.08), transparent 35%)" }}
          />

          {/* browser chrome — an address bar, not an editor titlebar */}
          <div className="relative flex items-center gap-2 border-b border-foreground/10 px-3.5 py-2.5 sm:px-4">
            <span className="h-2 w-2 rounded-full bg-primary/50" />
            <span className="h-2 w-2 rounded-full bg-secondary/50" />
            <div className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-foreground/[0.04] px-3 py-1">
              <Lock className="h-2.5 w-2.5 text-muted" />
              <span className="text-[9px] font-medium text-muted sm:text-[10px]">jaiwantthomas.dev</span>
            </div>
          </div>

          <motion.div
            variants={stack}
            initial="hidden"
            animate="visible"
            className="relative space-y-3 px-3.5 py-3.5 sm:px-4 sm:py-4"
          >
            {/* mini navbar */}
            <motion.div variants={piece} className="flex items-center justify-between">
              <div className="h-1.5 w-8 rounded-full bg-gradient-to-r from-primary to-secondary" />
              <div className="hidden gap-1.5 sm:flex">
                <div className="h-1 w-4 rounded-full bg-foreground/15" />
                <div className="h-1 w-4 rounded-full bg-foreground/15" />
                <div className="h-1 w-4 rounded-full bg-foreground/15" />
              </div>
              <div className="h-3.5 w-8 rounded-full bg-foreground/10" />
            </motion.div>

            {/* headline block */}
            <motion.div variants={piece} className="space-y-1.5 pt-1">
              <div className="h-2.5 w-4/5 rounded-full bg-foreground/25" />
              <div className="h-2.5 w-3/5 rounded-full bg-foreground/25" />
              <div className="h-1.5 w-2/5 rounded-full bg-foreground/10" />
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={piece} className="flex gap-2 pt-1">
              <div className="h-5 w-16 rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_16px_-2px_rgba(59,130,246,0.7)]" />
              <div className="h-5 w-12 rounded-full border border-foreground/15" />
            </motion.div>

            {/* mini portfolio grid — the "design assembling" moment */}
            <motion.div variants={piece} className="grid grid-cols-3 gap-1.5 pt-1.5">
              {GRID_CARDS.map(({ icon: Icon, tone }, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.85, 1, 0.85] }}
                  transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  className={`flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br ${tone}`}
                >
                  <Icon className="h-3 w-3 text-foreground/50" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
