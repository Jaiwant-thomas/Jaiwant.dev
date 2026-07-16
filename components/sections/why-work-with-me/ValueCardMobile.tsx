"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ValueProp } from "@/types";
import type { CardAccent } from "./accents";

interface ValueCardMobileProps {
  value: ValueProp;
  accent: CardAccent;
  index: number;
}

export function ValueCardMobile({ value, accent, index }: ValueCardMobileProps) {
  const Icon = value.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
      whileTap={{ scale: 0.97 }}
      className="w-[78vw] shrink-0 snap-center sm:w-[320px]"
    >
      <div
        className={cn(
          "group relative h-full rounded-[26px] bg-gradient-to-br p-[1.5px]",
          accent.gradient
        )}
      >
        <div className="relative flex h-full flex-col overflow-hidden rounded-[24.5px] bg-background-soft/95 shadow-[0_16px_40px_-16px_var(--shadow-card-lg)]">
          <div className="relative h-24 shrink-0 overflow-hidden">
            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-25", accent.gradient)} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={cn(
                  "absolute h-16 w-16 rounded-full bg-gradient-to-br opacity-30 blur-2xl",
                  accent.gradient
                )}
              />
              <Icon className="relative h-9 w-9 text-white" />
            </div>
            <span className="absolute left-3.5 top-3.5 inline-flex items-center rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              {accent.badge}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-heading text-base font-semibold text-foreground">{value.title}</h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{value.description}</p>
            <a
              href="#contact"
              className="group/cta mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-foreground"
            >
              Learn more
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
