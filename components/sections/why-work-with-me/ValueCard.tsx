"use client";

import { useLayoutEffect, useRef, useState, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ValueProp } from "@/types";
import type { CardAccent } from "./accents";

interface ValueCardProps {
  value: ValueProp;
  accent: CardAccent;
  index: number;
  trackX: MotionValue<number>;
  viewportWidth: number;
}

export function ValueCard({ value, accent, index, trackX, viewportWidth }: ValueCardProps) {
  const Icon = value.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardCenter, setCardCenter] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      const el = cardRef.current;
      if (el) setCardCenter(el.offsetLeft + el.offsetWidth / 2);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const distance = useTransform(trackX, (v) => v + cardCenter - viewportWidth / 2);
  const falloff = Math.max(viewportWidth * 0.34, 300);
  const scale = useTransform(distance, [-falloff, 0, falloff], [0.86, 1.04, 0.86], { clamp: true });
  const focusOpacity = useTransform(distance, [-falloff, 0, falloff], [0.45, 1, 0.45], {
    clamp: true,
  });

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 180, damping: 22 });
  const springRotateY = useSpring(rotateY, { stiffness: 180, damping: 22 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    rotateX.set((py - 50) / -14);
    rotateY.set((px - 50) / 14);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div ref={cardRef} className="relative w-[360px] shrink-0 lg:w-[400px]">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.85 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "0px -10% 0px 0px" }}
        transition={{ duration: 0.7, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
        className="h-full"
      >
        <motion.div
          style={{ scale, opacity: focusOpacity }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 5 + (index % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
          whileHover={{ y: -14 }}
          className="group relative h-full"
        >
          <div
            aria-hidden
            className={cn(
              "absolute -inset-5 -z-10 rounded-[36px] bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-50",
              accent.gradient
            )}
          />

          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: "preserve-3d" }}
            className={cn(
              "relative h-full rounded-[28px] bg-gradient-to-br bg-[length:200%_200%] p-[1.5px] opacity-70 animate-gradient transition-opacity duration-500 group-hover:opacity-100",
              accent.gradient
            )}
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-[26.5px] bg-background-soft/95 shadow-[0_20px_60px_-20px_var(--shadow-card-lg)] backdrop-blur-2xl">
              <div className="relative h-28 shrink-0 overflow-hidden sm:h-32">
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-25", accent.gradient)} />
                <div
                  className="absolute inset-0 opacity-[0.15]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={cn(
                      "absolute h-20 w-20 rounded-full bg-gradient-to-br opacity-30 blur-2xl transition-transform duration-700 group-hover:scale-125",
                      accent.gradient
                    )}
                  />
                  <Icon className="relative h-10 w-10 text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-110" />
                </div>
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  {accent.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-heading text-base font-semibold text-foreground sm:text-lg">
                  {value.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
                <a
                  href="#contact"
                  className="group/cta mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-foreground"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
