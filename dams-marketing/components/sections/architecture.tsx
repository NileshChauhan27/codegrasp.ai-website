"use client";

import { useState } from "react";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { AnimatePresence, motion } from "framer-motion";
import { easing } from "@/lib/motion";
import { cn } from "@/lib/utils";
import {
  FileText,
  GitMerge,
  LayoutDashboard,
  Cpu,
  Terminal,
  Bot,
  ShieldCheck,
  Code,
} from "lucide-react";

const steps = [
  {
    id: "init",
    stepNumber: "01",
    title: "Project Init",
    subtitle: "`dams init` / `dams new`",
    description: "Initializes the workspace, setting up DAMS environment, configurations, and preparing for local-first context tracking.",
    metric: "Workspace loaded",
    badge: "Bootstrap",
    icon: FileText,
  },
  {
    id: "bootstrap",
    stepNumber: "02",
    title: "Context Bootstrap",
    subtitle: "Pre-compiled snippets",
    description: "Pre-compiles initial code snippets and harvests structural metadata, establishing a baseline to avoid search loops.",
    metric: "Zero-token start",
    badge: "Bootstrap",
    icon: Cpu,
  },
  {
    id: "scratchpad",
    stepNumber: "03",
    title: "Scratchpad Setup",
    subtitle: "Research scratchpad",
    description: "Creates the ephemeral, task-scoped research scratchpad (codeResearch.md) that stores fetched context for the agent.",
    metric: "Task-scoped",
    badge: "Bootstrap",
    icon: FileText,
  },
  {
    id: "decompose",
    stepNumber: "04",
    title: "PRD Decompose",
    subtitle: "PRD Spec parsing",
    description: "Parses the PRD spec file to structure the exact feature scopes, execution constraints, and architectural boundaries.",
    metric: "PRD imported",
    badge: "Decompose",
    icon: GitMerge,
  },
  {
    id: "atomize",
    stepNumber: "05",
    title: "Task Tree Gen",
    subtitle: "dams atomize hierarchy",
    description: "Decomposes the PRD requirements into highly granular, sequential, and dependency-resolved atomic task hierarchies.",
    metric: "Dependency-mapped",
    badge: "Decompose",
    icon: GitMerge,
  },
  {
    id: "ledger",
    stepNumber: "06",
    title: "Ledger Registry",
    subtitle: "SQLite DB database",
    description: "Registers the structured task hierarchy inside the local SQLite database ledger to persist task states and priorities.",
    metric: "Persisted ledger",
    badge: "Interface",
    icon: Code,
  },
  {
    id: "dashboard",
    stepNumber: "07",
    title: "Dashboard Load",
    subtitle: "Launches Web UI",
    description: "Launches the local DAMS Web UI Dashboard, enabling visual task management and interactive query editing.",
    metric: "Local UI active",
    badge: "Interface",
    icon: LayoutDashboard,
  },
  {
    id: "kanban",
    stepNumber: "08",
    title: "Kanban Render",
    subtitle: "Interactive board",
    description: "Renders tasks as interactive cards on the dashboard, displaying priority, active status, and associated files.",
    metric: "Real-time state",
    badge: "Interface",
    icon: LayoutDashboard,
  },
  {
    id: "selection",
    stepNumber: "09",
    title: "Task Selection",
    subtitle: "Developer activation",
    description: "Developer clicks and activates a task card on the Kanban board, setting the active target context for execution.",
    metric: "Task activated",
    badge: "Analyze",
    icon: LayoutDashboard,
  },
  {
    id: "query",
    stepNumber: "10",
    title: "Query Gen",
    subtitle: "Semantic & structural",
    description: "Backend analyzes active task requirements and generates 10–15 targeted search queries loaded into the UI.",
    metric: "10-15 queries",
    badge: "Analyze",
    icon: Cpu,
  },
  {
    id: "review",
    stepNumber: "11",
    title: "Query Review",
    subtitle: "Developer adjustment",
    description: "Developer reviews and refines the generated queries directly in the dashboard before trigger execution.",
    metric: "Validated queries",
    badge: "Analyze",
    icon: FileText,
  },
  {
    id: "warming",
    stepNumber: "12",
    title: "Cache Warming",
    subtitle: "SQLite cache warmth",
    description: "Developer triggers SQLite Cache Warming on the UI to retrieve relevant context snippets and dependency paths.",
    metric: "Cache warmed",
    badge: "Sandbox",
    icon: Terminal,
  },
  {
    id: "cast",
    stepNumber: "13",
    title: "cAST Harvesting",
    subtitle: "Chunkhound retrieval",
    description: "Chunkhound retrieves target code snippets using structure-aware cAST chunking and updates codeResearch.md.",
    metric: "+4.3pt retrieval gain",
    badge: "Sandbox",
    icon: Terminal,
  },
  {
    id: "dependency",
    stepNumber: "14",
    title: "Dependency Res",
    subtitle: "Graphify call chains",
    description: "Graphify resolves call chains, file relationships, and Leiden clusters to generate the dependency map.",
    metric: "Graphify mapping",
    badge: "Sandbox",
    icon: Cpu,
  },
  {
    id: "steering",
    stepNumber: "15",
    title: "Steering Inject",
    subtitle: "Update steering rules",
    description: "Updates workspace steering files (AGENTS.md / DAMS.md) to guide the LLM agent toward the pre-fetched cache.",
    metric: "Context steered",
    badge: "Sandbox",
    icon: Terminal,
  },
  {
    id: "proxy",
    stepNumber: "16",
    title: "AI Agent Sandbox",
    subtitle: "Search interception",
    description: "Intercepts native search calls (grep, rg, find, fd) to proxies, running the agent in a secure Docker sandbox.",
    metric: "Docker isolated",
    badge: "Agent",
    icon: Bot,
  },
  {
    id: "gate",
    stepNumber: "17",
    title: "Safety Gate",
    subtitle: "GritQL check validation",
    description: "Performs automated 'dams check' checks and regression traps. If checks fail, automatically triggers an auto-fix retry loop.",
    metric: "Zero regressions",
    badge: "Safety",
    icon: ShieldCheck,
  },
  {
    id: "codebase",
    stepNumber: "18",
    title: "Target Codebase",
    subtitle: "Workspace updates",
    description: "Applies verified code modifications directly to the repository workspace using atomic, well-documented git commits.",
    metric: "Verified commits",
    badge: "Codebase",
    icon: Code,
  },
];

export function Architecture() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const displayStepIndex = hoveredStep ?? activeStep;
  const displayStep = steps[displayStepIndex];

  // Helper for desktop path highlighting
  const getPathProps = (fromIdx: number, toIdx: number) => {
    const isActive = displayStepIndex === fromIdx || displayStepIndex === toIdx;
    return {
      stroke: isActive ? "var(--accent)" : "var(--border-subtle)",
      strokeWidth: isActive ? 2.5 : 1.5,
      markerEnd: isActive ? "url(#arrow-active)" : "url(#arrow-default)",
      className: cn(
        "transition-all duration-300 fill-none",
        isActive ? "drop-shadow-[0_0_4px_rgba(45,139,139,0.5)]" : ""
      ),
    };
  };

  return (
    <Section id="architecture" className="relative overflow-hidden">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-accent">
            System architecture
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
            From PRD to code, guarded at every step.
          </h2>
        </div>

        {/* 1. Desktop Flowchart SVG (6 cols, 3 rows) */}
        <div className="hidden md:block mt-12 w-full max-w-5xl mx-auto border border-border-subtle bg-surface/50 rounded-2xl p-6 shadow-lg overflow-x-auto">
          <svg
            viewBox="0 0 1020 320"
            className="w-full h-auto select-none min-w-[960px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Marker for default path arrows */}
              <marker
                id="arrow-default"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 6 5 L 0 8.5 z" fill="var(--border-subtle)" />
              </marker>

              {/* Marker for active path arrows */}
              <marker
                id="arrow-active"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 6 5 L 0 8.5 z" fill="var(--accent)" />
              </marker>
            </defs>

            {/* FLOW LINES & CONNECTORS */}
            {/* Row 0: 0 -> 1 -> 2 -> 3 -> 4 -> 5 */}
            <path d="M 160,47.5 H 185" {...getPathProps(0, 1)} />
            <path d="M 325,47.5 H 350" {...getPathProps(1, 2)} />
            <path d="M 490,47.5 H 515" {...getPathProps(2, 3)} />
            <path d="M 655,47.5 H 680" {...getPathProps(3, 4)} />
            <path d="M 820,47.5 H 845" {...getPathProps(4, 5)} />

            {/* Row 0 to Row 1 Wrap: 5 -> 6 */}
            <path d="M 915,75 V 120" {...getPathProps(5, 6)} />

            {/* Row 1: 6 -> 7 -> 8 -> 9 -> 10 -> 11 */}
            <path d="M 845,147.5 H 820" {...getPathProps(6, 7)} />
            <path d="M 680,147.5 H 655" {...getPathProps(7, 8)} />
            <path d="M 515,147.5 H 490" {...getPathProps(8, 9)} />
            <path d="M 350,147.5 H 325" {...getPathProps(9, 10)} />
            <path d="M 185,147.5 H 160" {...getPathProps(10, 11)} />

            {/* Row 1 to Row 2 Wrap: 11 -> 12 */}
            <path d="M 90,175 V 220" {...getPathProps(11, 12)} />

            {/* Row 2: 12 -> 13 -> 14 -> 15 -> 16 -> 17 */}
            <path d="M 160,247.5 H 185" {...getPathProps(12, 13)} />
            <path d="M 325,247.5 H 350" {...getPathProps(13, 14)} />
            <path d="M 490,247.5 H 515" {...getPathProps(14, 15)} />
            <path d="M 655,247.5 H 680" {...getPathProps(15, 16)} />
            <path d="M 820,247.5 H 845" {...getPathProps(16, 17)} />

            {/* Safety Gate Pass label */}
            <text
              x="832.5"
              y="238"
              fill={displayStepIndex === 16 || displayStepIndex === 17 ? "var(--accent)" : "var(--text-tertiary)"}
              className="text-[8px] font-mono font-semibold transition-colors duration-300"
              textAnchor="middle"
            >
              PASS
            </text>

            {/* Safety Gate Fail Retry Loop: Step 17 to 16 */}
            <path
              d="M 750,220 C 750,185 585,185 585,220"
              {...getPathProps(16, 15)}
            />
            <text
              x="667.5"
              y="195"
              fill={displayStepIndex === 16 || displayStepIndex === 15 ? "var(--accent)" : "var(--text-tertiary)"}
              className="text-[8px] font-mono font-semibold tracking-wide transition-colors duration-300"
              textAnchor="middle"
            >
              AUTO-FIX RETRY
            </text>

            {/* NODE CARDS */}
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = displayStepIndex === index;

              // Calculate row and col for desktop layout
              const row = Math.floor(index / 6);
              const col = row === 1 ? 5 - (index % 6) : index % 6;

              const x = 20 + col * 165;
              const y = 20 + row * 100;

              const isSafetyGate = index === 16;

              return (
                <foreignObject key={step.id} x={x - 8} y={y - 8} width={156} height={71} className="pointer-events-none">
                  <div
                    onClick={() => setActiveStep(index)}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className={cn(
                      "pointer-events-auto w-[140px] h-[55px] m-2 flex flex-col justify-center px-3 py-1.5 rounded-xl border text-left transition-all duration-300 cursor-pointer select-none",
                      isSafetyGate
                        ? isActive
                          ? "border-warning bg-warning/10 shadow-lg shadow-warning/5 ring-2 ring-warning ring-offset-4 ring-offset-surface"
                          : "border-warning/40 border-dashed bg-surface hover:border-warning/80"
                        : isActive
                        ? "border-accent bg-accent/10 shadow-lg shadow-accent/5 ring-2 ring-accent ring-offset-4 ring-offset-surface"
                        : "border-border-subtle bg-surface hover:border-border-hover"
                    )}
                  >
                    <div className="flex items-center gap-1.5 overflow-hidden">
                      <IconComponent
                        className={cn(
                          "h-3.5 w-3.5 shrink-0",
                          isSafetyGate
                            ? isActive
                              ? "text-warning"
                              : "text-warning/70"
                            : isActive
                            ? "text-accent"
                            : "text-text-secondary"
                        )}
                      />
                      <span className="text-[10px] font-semibold text-text-primary truncate">
                        {step.title}
                      </span>
                    </div>
                    <span
                      className={cn(
                        "text-[8px] font-mono truncate mt-0.5",
                        isSafetyGate ? "text-warning/80" : "text-text-tertiary"
                      )}
                    >
                      {step.stepNumber} • {step.badge}
                    </span>
                  </div>
                </foreignObject>
              );
            })}
          </svg>
        </div>

        {/* 2. Mobile Flowchart SVG (visible on mobile, hidden on md+) */}
        <div className="block md:hidden mt-8 w-full border border-border-subtle bg-surface/50 rounded-2xl p-4 shadow-lg">
          <svg
            viewBox="0 0 350 1360"
            className="w-full h-auto select-none"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <marker
                id="arrow-default"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 6 5 L 0 8.5 z" fill="var(--border-subtle)" />
              </marker>

              <marker
                id="arrow-active"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 6 5 L 0 8.5 z" fill="var(--accent)" />
              </marker>
            </defs>

            {/* FLOW LINES & CONNECTORS */}
            {steps.map((_, index) => {
              if (index === 17) return null;
              const yStart = 65 + index * 75;
              const yEnd = 90 + index * 75;
              return (
                <path
                  key={`line-${index}`}
                  d={`M 175,${yStart} V ${yEnd}`}
                  {...getPathProps(index, index + 1)}
                />
              );
            })}

            {/* Mobile Safety Gate Pass label */}
            <text
              x="190"
              y="1292.5"
              fill={displayStepIndex === 16 || displayStepIndex === 17 ? "var(--accent)" : "var(--text-tertiary)"}
              className="text-[8px] font-mono font-semibold transition-colors duration-300"
              textAnchor="start"
            >
              PASS
            </text>

            {/* Mobile Safety Gate Fail Retry Loop: Step 17 to 16 */}
            <path
              d="M 295,1240 H 325 V 1165 H 295"
              {...getPathProps(16, 15)}
            />
            <text
              x="335"
              y="1202.5"
              fill={displayStepIndex === 16 || displayStepIndex === 15 ? "var(--accent)" : "var(--text-tertiary)"}
              className="text-[8px] font-mono font-semibold tracking-wide transition-colors duration-300"
              textAnchor="middle"
              transform="rotate(90 335 1202.5)"
            >
              FAIL: AUTO-FIX RETRY
            </text>

            {/* MOBILE NODE CARDS */}
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = displayStepIndex === index;
              const y = 40 + index * 75;

              const isSafetyGate = index === 16;

              return (
                <foreignObject key={step.id} x={47} y={y - 33} width={256} height={66} className="pointer-events-none">
                  <div
                    onClick={() => setActiveStep(index)}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className={cn(
                      "pointer-events-auto w-[240px] h-[50px] m-2 flex flex-col justify-center px-4 py-1.5 rounded-xl border text-left transition-all duration-300 cursor-pointer select-none",
                      isSafetyGate
                        ? isActive
                          ? "border-warning bg-warning/10 shadow-lg shadow-warning/5 ring-2 ring-warning ring-offset-4 ring-offset-surface"
                          : "border-warning/40 border-dashed bg-surface hover:border-warning/80"
                        : isActive
                        ? "border-accent bg-accent/10 shadow-lg shadow-accent/5 ring-2 ring-accent ring-offset-4 ring-offset-surface"
                        : "border-border-subtle bg-surface hover:border-border-hover"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <IconComponent
                          className={cn(
                            "h-3.5 w-3.5 shrink-0",
                            isSafetyGate
                              ? isActive
                                ? "text-warning"
                                : "text-warning/70"
                              : isActive
                              ? "text-accent"
                              : "text-text-secondary"
                          )}
                        />
                        <span className="text-[11px] font-semibold text-text-primary truncate">
                          {step.title}
                        </span>
                      </div>
                      <span
                        className={cn(
                          "rounded-full px-1.5 py-0.5 text-[8px] font-medium tracking-wide uppercase shrink-0",
                          isSafetyGate
                            ? isActive
                              ? "bg-warning/20 text-warning border border-warning/30"
                              : "bg-surface-hover text-warning border border-warning/20"
                            : isActive
                            ? "bg-accent/20 text-accent border border-accent/30"
                            : "bg-surface-hover text-text-tertiary border border-border-subtle"
                        )}
                      >
                        {step.badge}
                      </span>
                    </div>
                    <span
                      className={cn(
                        "text-[9px] font-mono truncate mt-0.5",
                        isSafetyGate ? "text-warning/80" : "text-text-tertiary"
                      )}
                    >
                      {step.stepNumber} • {step.subtitle}
                    </span>
                  </div>
                </foreignObject>
              );
            })}
          </svg>
        </div>

        {/* Detail Panel */}
        <div className="mt-12 w-full max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={displayStep.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: easing.enter }}
              className="rounded-2xl border border-border-subtle bg-surface p-6 md:p-8 shadow-xl ring-2 ring-accent ring-offset-4 ring-offset-surface"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-accent">
                      Step {displayStep.stepNumber}
                    </span>
                    <span className="text-xs bg-accent/10 border border-accent/20 text-accent rounded-full px-2.5 py-0.5 font-medium uppercase tracking-wider">
                      {displayStep.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
                      {displayStep.title}
                    </h3>
                    <p className="mt-1 text-sm font-mono text-text-tertiary">
                      {displayStep.subtitle}
                    </p>
                  </div>

                  <p className="text-base text-text-secondary leading-relaxed">
                    {displayStep.description}
                  </p>
                </div>

                {/* Metric Box */}
                <div className="shrink-0 flex flex-col justify-center rounded-xl border border-accent/20 bg-accent/5 p-5 min-w-[200px] text-center">
                  <span className="text-xs text-text-tertiary uppercase tracking-wider font-semibold">
                    Performance Metric
                  </span>
                  <span className="mt-2 text-xl font-bold text-accent font-mono">
                    {displayStep.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-8 text-center text-xs text-text-secondary max-w-lg mx-auto">
          Native tools route to DAMS by default. A programmatic toggle lets the
          agent fall back when DAMS search is not enough.
        </p>
      </Container>
    </Section>
  );
}
