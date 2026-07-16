"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { VALUE_PROPS } from "@/lib/data";
import { CARD_ACCENTS } from "@/components/sections/why-work-with-me/accents";
import { ValueCard } from "@/components/sections/why-work-with-me/ValueCard";
import { ValueCardMobile } from "@/components/sections/why-work-with-me/ValueCardMobile";
import { CarouselBackground } from "@/components/sections/why-work-with-me/CarouselBackground";

function CarouselHeading({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-4 text-center ${className}`}>
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
      >
        Why Work With Me
      </motion.span>
      <h2 className="font-heading text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
        <AnimatedHeadline
          as="span"
          text="A partner invested in your project's success"
          highlightWords={["partner", "projects", "success"]}
        />
      </h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl text-base text-muted sm:text-lg"
      >
        Here&apos;s what you can expect when we work together.
      </motion.p>
    </div>
  );
}

export function WhyWorkWithMe() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [maxTranslate, setMaxTranslate] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState<number | null>(null);
  const [viewportWidth, setViewportWidth] = useState(0);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    const measure = () => {
      const distance = Math.max(track.scrollWidth - viewport.clientWidth, 0);
      setMaxTranslate(distance);
      setViewportWidth(viewport.clientWidth);
      setWrapperHeight(viewport.clientHeight + distance);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    ro.observe(viewport);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 42,
    mass: 0.4,
    restDelta: 0.0005,
  });

  const x = useTransform(smoothProgress, [0, 1], [0, -maxTranslate]);

  return (
    <section id="why-work-with-me" className="relative">
      {/* Desktop / tablet — pinned, scroll-driven horizontal carousel */}
      <div
        ref={wrapperRef}
        style={{ height: wrapperHeight ? `${wrapperHeight}px` : "220vh" }}
        className="relative hidden md:block"
      >
        <div
          ref={viewportRef}
          className="sticky top-0 flex h-screen flex-col overflow-hidden py-16 sm:py-20"
        >
          <CarouselBackground progress={smoothProgress} />

          <div className="section-container relative z-10 shrink-0">
            <CarouselHeading className="mb-10" />
          </div>

          <div className="relative z-10 flex flex-1 items-center overflow-hidden">
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex items-stretch gap-6 px-[max(1.5rem,calc(50vw_-_200px))] lg:gap-8"
            >
              {VALUE_PROPS.map((value, i) => (
                <ValueCard
                  key={value.id}
                  value={value}
                  index={i}
                  accent={CARD_ACCENTS[i % CARD_ACCENTS.length]}
                  trackX={x}
                  viewportWidth={viewportWidth}
                />
              ))}
            </motion.div>
          </div>

          <div className="relative z-10 mt-6 flex shrink-0 items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
            <span className="h-px w-8 bg-foreground/20" />
            Keep scrolling
            <span className="h-px w-8 bg-foreground/20" />
          </div>
        </div>
      </div>

      {/* Mobile — swipeable, snap-scrolling carousel */}
      <div className="relative overflow-hidden py-24 md:hidden">
        <CarouselBackground />
        <div className="section-container relative z-10">
          <CarouselHeading className="mb-12" />
        </div>
        <div className="relative z-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {VALUE_PROPS.map((value, i) => (
            <ValueCardMobile
              key={value.id}
              value={value}
              index={i}
              accent={CARD_ACCENTS[i % CARD_ACCENTS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
