"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, ShoppingBag, Users } from "lucide-react";
import { STATS } from "@/lib/data";

const yearsStat = STATS.find((s) => s.id === "experience");
const clientsStat = STATS.find((s) => s.id === "clients");

const SATELLITES = [
  {
    icon: Smartphone,
    title: "Responsive",
    accent: "secondary" as const,
    className: "absolute -right-4 -top-5 z-20 w-[26%] sm:-right-7 sm:-top-6 sm:w-[24%] xl:-right-10 xl:-top-9",
    rotate: 6,
    floatDelay: 0.9,
    floatDuration: 6.5,
  },
  {
    icon: ShoppingBag,
    title: "Shopify + WP",
    accent: "accent" as const,
    className: "absolute -bottom-5 -left-4 z-20 w-[30%] sm:-bottom-6 sm:-left-7 sm:w-[28%] xl:-bottom-10 xl:-left-10",
    rotate: -5,
    floatDelay: 0.3,
    floatDuration: 7,
  },
];

const ACCENT_STYLES = {
  primary: { icon: "bg-primary/15 text-primary", border: "from-primary/40 to-primary/10" },
  secondary: { icon: "bg-secondary/15 text-secondary", border: "from-secondary/40 to-secondary/10" },
  accent: { icon: "bg-accent/15 text-accent", border: "from-accent/40 to-accent/10" },
};

export function HeroShowcase() {
  return (
    <div className="relative w-[62%] sm:w-[56%]">
      {/* small floating trust badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 1.1 },
          scale: { duration: 0.6, delay: 1.1 },
          y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
        }}
        whileHover={{ scale: 1.08 }}
        className="absolute -right-10 bottom-8 z-30 hidden items-center gap-1.5 rounded-2xl glass-strong px-3 py-2 shadow-lg lg:flex xl:-right-14"
      >
        <Users className="h-3.5 w-3.5 text-primary" />
        <div className="leading-tight">
          <p className="text-[11px] font-bold text-foreground">{clientsStat?.value}{clientsStat?.suffix}</p>
          <p className="text-[8px] text-muted">Happy Clients</p>
        </div>
      </motion.div>

      {SATELLITES.map((s) => {
        const styles = ACCENT_STYLES[s.accent];
        return (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, scale: 0.85, rotate: s.rotate * 2 }}
            animate={{ opacity: 1, scale: 1, rotate: s.rotate, y: [0, -9, 0] }}
            transition={{
              opacity: { duration: 0.7, delay: s.floatDelay },
              scale: { duration: 0.7, delay: s.floatDelay },
              rotate: { duration: 0.7, delay: s.floatDelay },
              y: { duration: s.floatDuration, repeat: Infinity, ease: "easeInOut", delay: s.floatDelay + 0.5 },
            }}
            whileHover={{ scale: 1.06, rotate: 0, y: -4 }}
            className={s.className}
          >
            <div className={`rounded-2xl bg-gradient-to-br ${styles.border} p-px shadow-lg transition-shadow duration-300 hover:shadow-xl`}>
              <div className="flex flex-col items-center gap-1.5 rounded-[15px] glass-strong px-2 py-2.5 text-center">
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${styles.icon}`}>
                  <s.icon className="h-3.5 w-3.5" />
                </span>
                <p className="text-[9px] font-semibold leading-tight text-foreground">{s.title}</p>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* main identity card — the centerpiece */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ y: -6, scale: 1.015 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 rounded-[26px] bg-gradient-animated p-px shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35),0_8px_30px_-8px_rgba(139,92,246,0.35)] transition-shadow duration-500 hover:shadow-[0_28px_70px_-12px_rgba(0,0,0,0.4),0_12px_38px_-6px_rgba(139,92,246,0.5)]"
      >
        <div className="relative overflow-hidden rounded-[25px] bg-background-soft/95 px-5 py-6 backdrop-blur-2xl sm:px-6 sm:py-7">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.08), transparent 35%)" }}
          />

          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-[0_0_24px_-4px_rgba(59,130,246,0.8)] sm:h-14 sm:w-14"
          >
            <Code2 className="h-6 w-6 sm:h-7 sm:w-7" />
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="relative mt-4"
          >
            <p className="font-heading text-base font-bold text-foreground sm:text-lg">Frontend Developer</p>
            <p className="mt-1 text-[11px] text-muted sm:text-xs">React · Next.js · TypeScript</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="relative mt-5 flex items-center gap-4 border-t border-foreground/10 pt-4"
          >
            <div>
              <p className="text-gradient font-heading text-lg font-bold sm:text-xl">
                {yearsStat?.value}{yearsStat?.suffix}
              </p>
              <p className="text-[9px] text-muted sm:text-[10px]">Years Experience</p>
            </div>
            <div className="h-8 w-px bg-foreground/10" />
            <div>
              <p className="text-gradient font-heading text-lg font-bold sm:text-xl">100%</p>
              <p className="text-[9px] text-muted sm:text-[10px]">Responsive Builds</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
