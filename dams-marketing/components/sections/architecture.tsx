"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { motion, useReducedMotion } from "framer-motion";
import { easing, duration } from "@/lib/motion";

const nodes = [
  { id: "user", label: "User", x: 10, y: 25, ring: "outer" },
  { id: "prd", label: "PRD", x: 18, y: 12, ring: "outer" },
  { id: "git", label: "Git History", x: 15, y: 40, ring: "outer" },
  { id: "codebase", label: "Target Codebase", x: 85, y: 25, ring: "outer" },

  { id: "atomizer", label: "PRD Atomizer", x: 28, y: 18, ring: "process" },
  { id: "kanban", label: "Kanban Dashboard", x: 35, y: 28, ring: "process" },
  { id: "queries", label: "Generate Queries", x: 45, y: 15, ring: "process" },
  { id: "cache", label: "Warm SQLite Cache", x: 50, y: 32, ring: "process" },
  { id: "chunkhound", label: "Chunkhound", x: 62, y: 18, ring: "process" },
  { id: "graphify", label: "Graphify", x: 68, y: 30, ring: "process" },

  { id: "scratchpad", label: "Ephemeral Scratchpad", x: 42, y: 45, ring: "inner" },
  { id: "graphify-deps", label: "Graphify Dependencies", x: 58, y: 45, ring: "inner" },
  { id: "steering", label: "Steering Files", x: 30, y: 50, ring: "inner" },
  { id: "compiler", label: "Context Compiler", x: 70, y: 50, ring: "inner" },

  { id: "gate", label: "Agent-Native Tool Interception", x: 50, y: 62, ring: "gate" },
  { id: "native", label: "Native tools (grep, glob, ast-grep)", x: 72, y: 66, ring: "native" },
  { id: "agent", label: "AI Agent", x: 50, y: 80, ring: "center" },
];

const connections = [
  { from: "prd", to: "atomizer" },
  { from: "atomizer", to: "kanban" },
  { from: "kanban", to: "queries" },
  { from: "queries", to: "chunkhound" },
  { from: "queries", to: "graphify" },
  { from: "chunkhound", to: "cache" },
  { from: "graphify", to: "graphify-deps" },
  { from: "cache", to: "scratchpad" },
  { from: "scratchpad", to: "steering" },
  { from: "graphify-deps", to: "compiler" },
  { from: "steering", to: "agent" },
  { from: "compiler", to: "agent" },
  { from: "native", to: "gate" },
  { from: "gate", to: "agent" },
  { from: "codebase", to: "chunkhound" },
  { from: "user", to: "kanban" },
  { from: "git", to: "compiler" },
];

export function Architecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = rect.top - windowHeight;
      const end = rect.bottom;
      const total = end - start;
      const current = -start;
      const ratio = Math.min(Math.max(current / total, 0), 1);
      setProgress(ratio);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  const activeNodes = new Set<string>();
  const p = progress;

  if (p > 0.05) activeNodes.add("user");
  if (p > 0.1) activeNodes.add("prd");
  if (p > 0.1) activeNodes.add("git");
  if (p > 0.1) activeNodes.add("codebase");
  if (p > 0.2) activeNodes.add("atomizer");
  if (p > 0.25) activeNodes.add("kanban");
  if (p > 0.3) activeNodes.add("queries");
  if (p > 0.35) activeNodes.add("chunkhound");
  if (p > 0.35) activeNodes.add("graphify");
  if (p > 0.45) activeNodes.add("cache");
  if (p > 0.5) activeNodes.add("scratchpad");
  if (p > 0.5) activeNodes.add("graphify-deps");
  if (p > 0.55) activeNodes.add("steering");
  if (p > 0.55) activeNodes.add("compiler");
  if (p > 0.65) activeNodes.add("gate");
  if (p > 0.65) activeNodes.add("native");
  if (p > 0.75) activeNodes.add("agent");

  return (
    <Section id="architecture" className="relative min-h-[150vh] overflow-hidden">
      <div className="sticky top-0 flex min-h-screen items-center py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-accent">
              System architecture
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
              From PRD to code, guarded at every step.
            </h2>
          </div>

          <div
            ref={containerRef}
            className="relative mx-auto mt-12 aspect-[16/9] w-full max-w-5xl rounded-2xl border border-border-subtle bg-surface p-4 md:p-8"
            role="img"
            aria-label="DAMS architecture diagram showing PRD atomization, Kanban, query generation, cache warming, scratchpad, Graphify dependencies, steering files, and agent-native tool interception"
          >
            <svg
              viewBox="0 0 100 90"
              className="h-full w-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2d8b8b" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {connections.map((conn, i) => {
                const from = nodes.find((n) => n.id === conn.from)!;
                const to = nodes.find((n) => n.id === conn.to)!;
                const fromActive = activeNodes.has(from.id);
                const toActive = activeNodes.has(to.id);
                const visible = fromActive && toActive;
                return (
                  <line
                    key={i}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke={visible ? "url(#lineGrad)" : "rgba(255,255,255,0.04)"}
                    strokeWidth={visible ? 0.6 : 0.3}
                  />
                );
              })}

              {nodes.map((node) => {
                const active = activeNodes.has(node.id);
                const size = node.ring === "center" ? 4.2 : node.ring === "gate" ? 3.2 : 2.2;
                const color =
                  node.ring === "center"
                    ? "#2d8b8b"
                    : node.ring === "gate"
                    ? "#f59e0b"
                    : node.ring === "native"
                    ? "#71717a"
                    : active
                    ? "#2d8b8b"
                    : "#3f3f46";
                return (
                  <g key={node.id}>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={size}
                      fill={active ? color : "#27272a"}
                      stroke={color}
                      strokeWidth={active ? 0.6 : 0.3}
                      opacity={active ? 1 : 0.5}
                    >
                      {node.ring === "center" && active && (
                        <animate
                          attributeName="r"
                          values={`${size};${size + 0.8};${size}`}
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      )}
                    </circle>
                    <text
                      x={node.x}
                      y={node.y + size + 3.5}
                      textAnchor="middle"
                      fill={active ? "#f4f4f5" : "#71717a"}
                      fontSize="2.2"
                      fontWeight={500}
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}

              {/* Fallback toggle indicator near gate */}
              {activeNodes.has("gate") && (
                <g transform="translate(50, 68)">
                  <rect x="-8" y="0" width="16" height="5" rx="2.5" fill="#24282c" stroke="#2d8b8b" strokeWidth="0.3" />
                  <circle cx="-3" cy="2.5" r="1.8" fill="#2d8b8b">
                    <animate
                      attributeName="cx"
                      values="-3;3;-3"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              )}
            </svg>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: duration.reveal, ease: easing.enter }}
              className="absolute bottom-4 left-4 right-4 rounded-lg border border-border-subtle bg-surface/90 p-3 text-center text-xs text-text-secondary backdrop-blur md:bottom-8 md:left-8 md:right-auto md:max-w-xs md:text-left"
            >
              Native tools route to DAMS by default. A programmatic toggle lets the
              agent fall back when DAMS search is not enough.
            </motion.div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
