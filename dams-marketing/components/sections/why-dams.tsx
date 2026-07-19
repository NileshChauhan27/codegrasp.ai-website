"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { easing, duration } from "@/lib/motion";
import {
  BookOpen,
  FileText,
  Network,
  Terminal,
  ShieldAlert,
  ShieldCheck,
  Zap,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const valueProps = [
  {
    icon: BookOpen,
    title: "Markdown Context Wiki",
    description: "Obsidian-compatible Markdown files serve as the single source of truth for decisions, safety contracts, regression traps, and task trees.",
  },
  {
    icon: FileText,
    title: "Freshness-Scored Steering",
    description: "Compiles a token-budgeted AGENTS.md context steering file dynamically with freshness scoring so the AI agent always knows the workspace state.",
  },
  {
    icon: Network,
    title: "Graphify AST Mapping",
    description: "Traces project call graphs and AST dependencies up to depth 2, achieving 71.5× token reduction vs raw code dumps during LLM discovery.",
  },
  {
    icon: Terminal,
    title: "Search Interception Shims",
    description: "Installs OS-level bash shims for grep, rg, and find inside the isolated Docker container, ensuring your developer host machine remains completely untouched and clean.",
  },
  {
    icon: ShieldAlert,
    title: "Regression Traps",
    description: "Auto-extracts past bugs from git commit histories and injects them as invariants in the agent's context window to prevent the same bug from returning.",
  },
  {
    icon: ShieldCheck,
    title: "Pre-Commit Safety Gates",
    description: "Enforces custom codebase rules and conventions before commits ship, blocking AI agents from introducing violating code changes.",
  },
  {
    icon: Zap,
    title: "Proactive Cache Warming",
    description: "Warms ast-dependency code caches in SQLite in the background dynamically when tasks are activated to eliminate LLM tool response latency.",
  },
];

export function WhyDams() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start centered (2 on left, 3 visible, 2 on right)
  const [isMobile, setIsMobile] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      const max = mobile ? 6 : 4;
      setCurrentIndex((prev) => Math.min(prev, max));
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const maxIndex = isMobile ? 6 : 4;

  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <Section id="why" className="overflow-hidden">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
            Why DAMS
          </h2>
          <p className="mt-4 text-text-secondary">
            Built for long-running AI coding projects where context is everything.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-12">
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 -right-4 z-20 flex justify-between pointer-events-none">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-surface/80 text-text-primary backdrop-blur-md transition-all hover:border-accent hover:bg-surface disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              aria-label="Previous cards"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              disabled={currentIndex === maxIndex}
              className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-surface/80 text-text-primary backdrop-blur-md transition-all hover:border-accent hover:bg-surface disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              aria-label="Next cards"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Slider viewport */}
          <div className="overflow-hidden mx-[-12px] px-3">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.3333)}%)`,
              }}
            >
              {valueProps.map((prop) => {
                const Icon = prop.icon;
                return (
                  <div
                    key={prop.title}
                    className="w-full md:w-1/3 shrink-0 px-3 py-4"
                  >
                    <motion.div
                      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: duration.reveal,
                        ease: easing.enter,
                      }}
                      className="h-full rounded-2xl border border-border-subtle bg-surface p-6 transition-all hover:-translate-y-1 hover:border-border-hover md:p-8 ring-2 ring-accent ring-offset-4 ring-offset-surface select-none flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="mt-5 text-xl font-semibold text-text-primary">
                          {prop.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                          {prop.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
