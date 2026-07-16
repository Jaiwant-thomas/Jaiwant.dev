"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { SKILL_CATEGORIES } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & technologies I work with"
          description="A focused, modern stack for building fast and reliable websites."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {SKILL_CATEGORIES.map((category, ci) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: ci * 0.1 }}
              >
                <GlassCard className="h-full p-7 sm:p-8" tilt={false}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                      <CategoryIcon className="h-5 w-5" />
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div className="mt-7 space-y-5">
                    {category.skills.map((skill, si) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div key={skill.name}>
                          <div className="mb-2 flex items-center justify-between text-sm">
                            <span className="flex items-center gap-2 font-medium text-foreground">
                              <SkillIcon className="h-4 w-4 text-accent" />
                              {skill.name}
                            </span>
                            <span className="text-xs text-muted">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-foreground/[0.06]">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                delay: 0.15 + si * 0.08,
                                ease: "easeOut",
                              }}
                              className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
