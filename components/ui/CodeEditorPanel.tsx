"use client";

import { motion } from "framer-motion";
import { FileCode2 } from "lucide-react";

const CHART_BARS = [40, 70, 45, 90, 60];

export function CodeEditorPanel() {
  return (
    <div className="relative w-[58%] sm:w-[54%]">
      {/* mini browser chip — peeks from behind, bottom-left */}
      <div className="absolute -bottom-3 -left-3 z-0 -rotate-3 rounded-xl glass-strong p-2.5 shadow-lg">
        <div className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
        </div>
        <div className="mt-2 space-y-1">
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-primary to-secondary" />
          <div className="h-1 w-9 rounded-full bg-foreground/15" />
        </div>
      </div>

      {/* mini chart chip — peeks from behind, top-right */}
      <div className="absolute -right-3 -top-3 z-0 flex h-14 w-16 rotate-3 items-end gap-1 rounded-2xl glass-strong p-2.5 shadow-lg">
        {CHART_BARS.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: "20%" }}
            animate={{ height: [`${h * 0.5}%`, `${h}%`, `${h * 0.5}%`] }}
            transition={{ duration: 2.4 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
            className="w-full rounded-full"
            style={{
              background:
                i % 3 === 0 ? "var(--primary)" : i % 3 === 1 ? "var(--secondary)" : "var(--accent)",
            }}
          />
        ))}
      </div>

      {/* main editor window */}
      <div className="relative z-10 rounded-[26px] bg-gradient-to-br from-primary/40 via-secondary/40 to-accent/30 p-px shadow-2xl">
        <div className="overflow-hidden rounded-[25px] bg-background-soft/90 backdrop-blur-xl z-[999]">
          <div className="flex items-center gap-2 border-b border-foreground/10 px-3.5 py-2.5 sm:px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
            <span className="ml-2 flex items-center gap-1.5 text-[10px] font-medium text-muted sm:text-[11px]">
              <FileCode2 className="h-3 w-3" />
              Hero.tsx
            </span>
          </div>

          <div className="space-y-1 px-3.5 py-2.5 font-mono text-[9px] leading-relaxed sm:px-4 sm:text-[10px]">
            <CodeLine n={1}>
              <Tok c="secondary">const</Tok> <Tok c="foreground">developer</Tok>{" "}
              <Tok c="muted">=</Tok> <Tok c="accent">&quot;Jaiwant&quot;</Tok>
              <Tok c="muted">;</Tok>
            </CodeLine>
            <CodeLine n={2}>
              <Tok c="secondary">function</Tok> <Tok c="foreground">buildAwesome</Tok>
              <Tok c="muted">() {"{"}</Tok>
            </CodeLine>
            <CodeLine n={3} indent>
              <Tok c="secondary">return</Tok> <Tok c="primary">&lt;Portfolio</Tok>{" "}
              <Tok c="accent">amazing</Tok> <Tok c="primary">/&gt;</Tok>
              <Tok c="muted">;</Tok>
            </CodeLine>
            <CodeLine n={4}>
              <Tok c="muted">{"}"}</Tok>
            </CodeLine>
            <CodeLine n={5}>
              <Tok c="secondary">export default</Tok> <Tok c="foreground">developer</Tok>
              <Tok c="muted">;</Tok>
              <BlinkCursor />
            </CodeLine>
          </div>

          <div className="border-t border-foreground/10 bg-foreground/[0.02] px-3.5 py-2 font-mono text-[9px] text-muted sm:px-4 sm:text-[10px]">
            <p>
              <span className="text-accent">▲</span> Next.js ready in 128ms
            </p>
            <p className="flex items-center gap-1">
              <span className="text-primary">$</span>
              <BlinkCursor />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeLine({ n, indent, children }: { n: number; indent?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="w-3 shrink-0 text-right text-foreground/30 select-none">{n}</span>
      <span className={indent ? "pl-3" : ""}>{children}</span>
    </div>
  );
}

const TOKEN_COLORS = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  foreground: "text-foreground/90",
  muted: "text-muted",
} as const;

function Tok({ c, children }: { c: keyof typeof TOKEN_COLORS; children: React.ReactNode }) {
  return <span className={TOKEN_COLORS[c]}>{children}</span>;
}

function BlinkCursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="ml-0.5 inline-block h-3 w-1.5 translate-y-[1px] bg-accent"
    />
  );
}
