"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { TIMELINE } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="2+ years building for the web"
          description="From formal education to hands-on professional experience — here's the journey so far."
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE.map((entry, i) => {
              const Icon = entry.type === "experience" ? Briefcase : GraduationCap;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="relative pl-16 sm:grid sm:grid-cols-2 sm:gap-10 sm:pl-0"
                >
                  <div
                    className={`absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full glass-strong text-accent shadow-lg sm:left-1/2 sm:-translate-x-1/2`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div
                    className={
                      isLeft
                        ? "sm:col-start-1 sm:pr-14"
                        : "sm:col-start-2 sm:pl-14"
                    }
                  >
                    <GlassCard className="p-6 sm:p-7" tilt={false}>
                      <span className="inline-flex items-center rounded-full bg-foreground/[0.06] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                        {entry.period}
                      </span>
                      <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                        {entry.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-primary">
                        {entry.organization}
                      </p>
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                        <MapPin className="h-3.5 w-3.5" />
                        {entry.location}
                      </p>
                      <ul className="mt-4 space-y-2 text-left text-sm leading-relaxed text-muted">
                        {entry.points.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
