"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { CodeEditorPanel } from "@/components/ui/CodeEditorPanel";
import { TechOrbit } from "@/components/ui/TechOrbit";

const ORBIT_DOTS = [
  { angle: 0, size: 10, color: "bg-primary" },
  { angle: 120, size: 7, color: "bg-accent" },
  { angle: 240, size: 8, color: "bg-secondary" },
];

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const meshY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 25]);

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
          <motion.div
            style={{ rotate: ringRotate }}
            className="absolute flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72"
          >
            <div className="absolute inset-0 rounded-full border border-foreground/10" />
            <div
              className="absolute inset-0 animate-glow-pulse rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(59,130,246,0.35), rgba(139,92,246,0.35), rgba(34,211,238,0.35), rgba(59,130,246,0.35))",
                mask: "radial-gradient(closest-side, transparent calc(100% - 3px), black calc(100% - 2px))",
                WebkitMask:
                  "radial-gradient(closest-side, transparent calc(100% - 3px), black calc(100% - 2px))",
              }}
            />

            {ORBIT_DOTS.map((dot) => (
              <motion.span
                key={dot.angle}
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                style={{ rotate: dot.angle }}
                className="absolute inset-0"
              >
                <span
                  className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full ${dot.color} shadow-[0_0_12px_2px_rgba(59,130,246,0.6)]`}
                  style={{ width: dot.size, height: dot.size }}
                />
              </motion.span>
            ))}
          </motion.div>

          <CodeEditorPanel />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.3),transparent_60%)]" />
      </div>

      <TechOrbit />
    </motion.div>
  );
}
