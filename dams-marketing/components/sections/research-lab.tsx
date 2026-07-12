"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { easing, duration, stagger } from "@/lib/motion";
import { Check, FlaskConical, Rocket } from "lucide-react";

const roadmap = [
  {
    id: "dams-v2",
    name: "DAMS v2.0",
    description:
      "Flagship product. PRD-to-code task automation with defensive memory and agent-native tool interception.",
    status: "Shipped",
    active: true,
    icon: Check,
  },
  {
    id: "dams-edge",
    name: "DAMS-Edge",
    description:
      "Embedded-database variant for teams that need fully offline, on-device codebase intelligence.",
    status: "In research",
    active: false,
    icon: FlaskConical,
  },
  {
    id: "dams-ft",
    name: "DAMS-FT",
    description:
      "Fine-tuned local LLM variant optimized for code research, query generation, and context summarization.",
    status: "Planned",
    active: false,
    icon: Rocket,
  },
];

export function ResearchLab() {
  const reducedMotion = useReducedMotion();

  return (
    <Section id="research" className="relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: "rgba(124, 58, 237, 0.08)" }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-accent">
            Beyond one product
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
            Codebase Intelligence Research Lab
          </h2>
          <p className="mt-4 text-text-secondary">
            We study the top projects in codebase intelligence — retrieval engines,
            agent harnesses, knowledge graphs, observability, and local LLM tooling —
            and build practical, local-first products from what we learn.
          </p>
          <p className="mt-2 text-sm text-text-tertiary">
            DAMS ships as a container because OS-level PATH shims interfered with the host OS.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roadmap.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: duration.reveal,
                  ease: easing.enter,
                  delay: stagger.slow * index,
                }}
                className={`relative rounded-2xl border bg-surface p-6 transition-all hover:-translate-y-1 ${
                  item.active
                    ? "border-l-4 border-l-accent border-border-hover"
                    : "border-border-subtle hover:border-border-hover"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      item.active
                        ? "border border-accent/30 bg-accent/10 text-accent"
                        : "border border-border-subtle bg-surface-hover text-text-tertiary"
                    }`}
                  >
                    {item.status}
                  </span>
                  <Icon
                    className={`h-5 w-5 ${
                      item.active ? "text-accent" : "text-text-tertiary"
                    }`}
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-text-primary">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
