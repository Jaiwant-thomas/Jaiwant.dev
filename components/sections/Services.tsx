"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { SERVICES } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="section-container">
        <SectionHeading
          eyebrow="Services"
          title="How I can help your business grow"
          description="End-to-end frontend development services tailored to your goals."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              >
                <GlassCard className="group h-full p-7">
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:text-accent">
                      <Icon className="h-6 w-6" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
