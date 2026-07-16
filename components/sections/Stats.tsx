"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/data";

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl glass-strong px-6 py-14 sm:px-12">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-secondary/20 blur-[100px]" />

          <div className="relative grid grid-cols-2 gap-10 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-heading text-4xl font-bold text-gradient sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
