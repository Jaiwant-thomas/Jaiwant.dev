"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { HeroShowcase } from "@/components/ui/HeroShowcase";
import { HeroAura } from "@/components/ui/HeroAura";

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const meshY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 120, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    rotateX.set((py - 50) / -18);
    rotateY.set((px - 50) / 18);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: "preserve-3d" }}
      className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-sm xl:max-w-md"
    >
      <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-3xl glass shadow-2xl">
        <motion.div
          style={{ y: meshY }}
          className="absolute inset-[-20%] opacity-90"
        >
          <div className="absolute left-[10%] top-[8%] h-56 w-56 rounded-full bg-primary/30 blur-[70px]" />
          <div className="absolute bottom-[12%] right-[8%] h-64 w-64 rounded-full bg-secondary/30 blur-[80px]" />
          <div className="absolute left-[30%] top-[45%] h-40 w-40 rounded-full bg-accent/20 blur-[60px]" />
        </motion.div>

        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] [background-size:32px_32px]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <HeroShowcase />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.3),transparent_60%)]" />
      </div>

      <HeroAura />
    </motion.div>
  );
}
