"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { easing, duration, stagger } from "@/lib/motion";
import { Search, Layers, ShieldCheck } from "lucide-react";

const valueProps = [
  {
    icon: Search,
    title: "Stop re-reading the codebase",
    description:
      "Query once, cache forever. The agent uses the curated scratchpad instead of endlessly looping grep.",
  },
  {
    icon: Layers,
    title: "Tasks stay coherent across sessions",
    description:
      "Kanban cards carry decisions, dependencies, and regression traps from one session to the next.",
  },
  {
    icon: ShieldCheck,
    title: "Safe by default",
    description:
      "Native search tools are intercepted at the harness level by default; safety contracts are checked before commits ship, and the entire stack runs in a Docker container so host-OS shims never interfere with the developer machine. Native tools remain available as a programmatic fallback when DAMS search is not enough.",
  },
];

export function WhyDams() {
  const reducedMotion = useReducedMotion();

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

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={prop.title}
                initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: duration.reveal,
                  ease: easing.enter,
                  delay: stagger.default * index,
                }}
                className="rounded-2xl border border-border-subtle bg-surface p-6 transition-all hover:-translate-y-1 hover:border-border-hover md:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-text-primary">
                  {prop.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {prop.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
