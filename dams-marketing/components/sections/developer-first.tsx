"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { easing, duration } from "@/lib/motion";

const commands = [
  "$ dams init",
  "$ dams atomize PRD.md",
  "$ dams recompile",
  "$ dams check",
  "$ dams ui",
];

export function DeveloperFirst() {
  const reducedMotion = useReducedMotion();

  return (
    <Section id="developer" className="overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: duration.reveal, ease: easing.enter }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-accent">
              Developer-first
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
              Built for developers, not dashboards.
            </h2>
            <p className="mt-4 text-text-secondary">
              DAMS is a CLI at heart. Initialize a project, atomize a PRD, compile
              context, and enforce safety — all from the terminal. The web UI is a
              focused workbench that guides research, not another project-management
              tool.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                Markdown-native context: decisions, tasks, and skills live in
                `.dams/context/`.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                Local SQLite cache keeps code snippets on your machine.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                Open-source harness integration: oh-my-pi, pi.dev, Zed, Goose.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: duration.reveal, ease: easing.enter }}
            className="rounded-2xl border border-border-subtle bg-surface p-1 shadow-2xl ring-2 ring-accent ring-offset-4 ring-offset-surface select-none"
          >
            <div className="flex items-center gap-2 rounded-t-xl bg-surface-hover px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-xs text-text-tertiary">terminal</span>
            </div>
            <div className="overflow-x-auto p-5 font-mono text-sm">
              {commands.map((line, index) => (
                <motion.div
                  key={line}
                  initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: duration.fast,
                    delay: reducedMotion ? 0 : index * 0.1,
                    ease: easing.enter,
                  }}
                  className="py-1"
                >
                  <span className="text-accent">$</span>{" "}
                  <span className="text-text-primary">{line.slice(2)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
