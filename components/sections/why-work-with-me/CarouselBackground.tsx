"use client";

import { motion, useMotionValue, useTransform, type MotionValue } from "framer-motion";

interface CarouselBackgroundProps {
  progress?: MotionValue<number>;
}

export function CarouselBackground({ progress }: CarouselBackgroundProps) {
  const fallback = useMotionValue(0);
  const p = progress ?? fallback;

  const blobX1 = useTransform(p, [0, 1], [0, -100]);
  const blobX2 = useTransform(p, [0, 1], [0, 120]);
  const blobY = useTransform(p, [0, 1], [0, -60]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ x: blobX1 }}
        className="absolute -left-40 top-6 h-[26rem] w-[26rem] rounded-full bg-primary/15 blur-[130px] animate-float-slow"
      />
      <motion.div
        style={{ x: blobX2 }}
        className="absolute -right-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-secondary/15 blur-[120px] animate-float"
      />
      <motion.div
        style={{ y: blobY }}
        className="absolute left-1/3 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/10 blur-[110px]"
      />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="noise-overlay" />

      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-foreground/30 animate-float-slow"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${6 + (i % 5)}s`,
          }}
        />
      ))}

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
