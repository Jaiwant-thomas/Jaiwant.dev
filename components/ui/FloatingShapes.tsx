"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function FloatingShapes({ variant = "default" }: { variant?: "default" | "dense" }) {
  const { scrollYProgress } = useScroll();
  const yUp = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const yDown = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y: yDown }}
        className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/20 blur-[100px] animate-float-slow"
      />
      <motion.div
        style={{ y: yUp }}
        className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-secondary/20 blur-[120px] animate-float"
      />
      <motion.div
        style={{ y: yDown }}
        className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-accent/10 blur-[100px] animate-float-slow"
      />
      {variant === "dense" && (
        <>
          <div className="absolute right-1/4 bottom-10 h-48 w-48 rounded-full bg-primary/10 blur-[80px] animate-float" />
          <div className="absolute left-1/4 top-0 h-40 w-40 rounded-full bg-secondary/10 blur-[80px] animate-float-slow" />
        </>
      )}
      <div className="noise-overlay" />
    </div>
  );
}
