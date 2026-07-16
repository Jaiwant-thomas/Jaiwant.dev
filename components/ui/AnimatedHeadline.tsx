"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  delay?: number;
  as?: "h1" | "span";
}

export function AnimatedHeadline({
  text,
  className,
  highlightWords = [],
  delay = 0,
  as = "span",
}: AnimatedHeadlineProps) {
  const words = text.split(" ");
  const normalizedHighlights = highlightWords.map((w) => w.toLowerCase());
  let charIndex = 0;
  const Wrapper = as;

  return (
    <Wrapper className={cn(className)} aria-label={text}>
      {words.map((word, wi) => {
        const isHighlighted = normalizedHighlights.includes(
          word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        );
        const startIndex = charIndex;
        charIndex += word.length;

        if (isHighlighted) {
          return (
            <Fragment key={wi}>
              <motion.span
                aria-hidden="true"
                initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.55,
                  delay: delay + startIndex * 0.02,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-gradient inline-block whitespace-nowrap"
              >
                {word}
              </motion.span>
              {wi < words.length - 1 ? " " : null}
            </Fragment>
          );
        }

        return (
          <Fragment key={wi}>
            <span aria-hidden="true" className="inline-block whitespace-nowrap">
              {word.split("").map((char, ci) => {
                const index = startIndex + ci;
                return (
                  <motion.span
                    key={ci}
                    initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.55,
                      delay: delay + index * 0.02,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
            {wi < words.length - 1 ? " " : null}
          </Fragment>
        );
      })}
    </Wrapper>
  );
}
