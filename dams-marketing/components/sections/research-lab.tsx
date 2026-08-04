"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { easing, duration, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";
import {
  Check,
  FlaskConical,
  Rocket,
  Shield,
  Layers,
  Compass,
  Cpu,
  ArrowRight,
  Workflow,
} from "lucide-react";

const roadmap = [
  {
    id: "dams-v2",
    name: "DAMS",
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
    name: "DAMS-FT (Fine-Tuned)",
    description:
      "Fine-tuned local LLM variant optimized for code research, query generation, and context summarization. Powered by Gortex Extension.",
    status: "Featured Project",
    active: true,
    icon: Rocket,
  },
];

interface GortexCard {
  id: string;
  heading: string;
  description: string;
  column: string;
  image: string;
  metric: string;
  icon: any;
}

const gortexCards: GortexCard[] = [
  {
    id: "routing-engine",
    heading: "Bonsai-8B Routing Engine",
    description:
      "A local, fine-tuned query router achieving 100% tool selection accuracy. Fits in a lightweight 6GB VRAM footprint for cost-effective, secure self-hosting.",
    column: "Local Routing & Interception",
    image: "/features/FineTuning_Bonsai-8B_Router_Leaderboard.webp",
    metric: "100% Accuracy",
    icon: Cpu,
  },
  {
    id: "security-shield",
    heading: "PreToolUse Security Shield",
    description:
      "Automatically intercepts and hard-blocks unoptimized native search tools at runtime. Dynamically guides the model to high-performance graph endpoints instead of raw text scans.",
    column: "Local Routing & Interception",
    image: "/features/FineTuning_PreToolUse_Interception_Popup.webp",
    metric: "100% Intercepted",
    icon: Shield,
  },
  {
    id: "ast-navigation",
    heading: "AST Call Graph Navigation",
    description:
      "Traces code dependencies and caller trees with zero false positives. Uses tree-sitter AST nodes to map precise multi-hop reference paths across the entire repository.",
    column: "AST Code Navigation",
    image: "/features/FineTuning_AST_Call_Graph_Navigation.webp",
    metric: "0% False Positives",
    icon: Compass,
  },
  {
    id: "token-compression",
    heading: "GCX1 Token Compression",
    description:
      "Serializes and compresses code payloads to deliver a 27% to 40% reduction in token overhead. Maximizes active context window usage while slashing operational API costs.",
    column: "Context Optimization",
    image: "/features/FineTuning_Token_Compression.webp",
    metric: "27%–40% Token Saving",
    icon: Layers,
  },
];

const columns = [
  "Local Routing & Interception",
  "AST Code Navigation",
  "Context Optimization",
];

const damsFtSpecs = [
  {
    title: "DAMS-FT Model",
    description: "The high-performance, local model evolution of our standard DAMS RAG engine.",
  },
  {
    title: "Deterministic Routing",
    description: "Powered by Bonsai-8B to route developer prompts directly into AST code knowledge graphs.",
  },
  {
    title: "100% Reliability",
    description: "Achieves 100% tool mapping accuracy, completely eliminating model hallucination errors.",
  },
  {
    title: "Token Compression",
    description: "Uses our GCX1 wire protocol to slash LLM token overhead by 27% to 40%.",
  },
  {
    title: "Cost-Efficient",
    description: "Directly reduces external API operational inference costs and context latency.",
  },
  {
    title: "Defensive Interception",
    description: "Features an active PreToolUse Shield that intercepts and blocks raw text scans.",
  },
  {
    title: "Speculative Security",
    description: "Integrates an AST Parse Gate to validate code syntax before model inference.",
  },
  {
    title: "Resource Friendly",
    description: "Fits in a lightweight 6GB VRAM footprint for secure, local offline deployment.",
  },
  {
    title: "Sub-300ms Speed",
    description: "Delivers lightning-fast local query routing without relying on heavy cloud servers.",
  },
  {
    title: "Enterprise Ready",
    description: "The ultimate private, secure, and cost-optimized RAG engine for massive codebases.",
  },
];

export function ResearchLab() {
  const reducedMotion = useReducedMotion();
  const [activeCard, setActiveCard] = useState<GortexCard>(gortexCards[0]);
  const [hoveredCard, setHoveredCard] = useState<GortexCard | null>(null);

  const displayCard = hoveredCard ?? activeCard;

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
                className={cn(
                  "relative rounded-2xl border bg-surface p-6 transition-all hover:-translate-y-1 select-none ring-2 ring-accent ring-offset-4 ring-offset-surface transform-gpu will-change-[transform,opacity]",
                  item.active
                    ? "border-l-4 border-l-accent border-border-hover"
                    : "border-border-subtle hover:border-border-hover"
                )}
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

        {/* Visual Showcase: DAMS-FT Showcase section */}
        <div className="mt-20 border-t border-border-subtle pt-16">
          
          {/* Part 1: Info specifications grid */}
          <div className="mb-16">
            <div className="mx-auto max-w-3xl text-center mb-10">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent uppercase tracking-wider animate-pulse">
                <Rocket className="h-3.5 w-3.5 animate-bounce" /> Local Model Evolution
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-text-primary md:text-3xl">
                The DAMS-FT Local-First Model
              </h3>
              <p className="mt-3 text-text-secondary text-sm md:text-base">
                DAMS-FT is the high-performance local model evolution of our standard DAMS RAG engine.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {damsFtSpecs.map((spec, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border-subtle bg-surface/40 p-4 transition-all hover:border-border-hover select-none transform-gpu will-change-[transform,opacity]"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent text-[10px] font-bold">
                      {index + 1}
                    </span>
                    <h4 className="text-xs font-bold text-text-primary">
                      {spec.title}
                    </h4>
                  </div>
                  <p className="mt-1.5 text-[11px] text-text-secondary leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Part 2: Interactive Pipeline Stage Showcase */}
          <div className="border-t border-border-subtle/50 pt-16">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent uppercase tracking-wider">
                <Workflow className="h-3.5 w-3.5" /> Pipeline Demonstration
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-text-primary md:text-3xl">
                Gortex Extension Pipeline
              </h3>
              <p className="mt-3 text-text-secondary text-sm md:text-base">
                Explore the pipeline stages below to preview how DAMS-FT intercepts, routes, navigates, and compresses context for codebase intelligence tasks.
              </p>
            </div>

            {/* Grid layout matching the style of the main showcase (FeatureShowcase) */}
            <div className="grid gap-6 flex-col lg:grid-cols-[1.2fr_1fr] xl:grid-cols-[1.3fr_1fr] lg:h-[480px] xl:h-[520px] items-stretch">
              
              {/* Left: Preview Panel / Stage */}
              <div className="order-2 lg:order-1 relative flex flex-col justify-between rounded-xl border border-border-subtle bg-surface p-5 sm:p-6 ring-2 ring-accent ring-offset-4 ring-offset-surface h-full transform-gpu will-change-[transform,opacity]">
                {/* Radial glow */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full blur-[80px]"
                  style={{ background: "rgba(45, 139, 139, 0.1)" }}
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -bottom-10 -left-10 h-64 w-64 rounded-full blur-[80px]"
                  style={{ background: "rgba(124, 58, 237, 0.08)" }}
                  aria-hidden="true"
                />

                <div className="relative flex flex-1 items-center justify-center py-2 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={displayCard.id}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: duration.layout, ease: easing.enter }}
                      className="relative flex items-center justify-center w-full h-[220px] sm:h-[280px] lg:h-full rounded-lg overflow-hidden border border-border-subtle bg-[#131517] shadow-xl"
                    >
                      <img
                        src={displayCard.image}
                        alt={displayCard.heading}
                        className="max-h-full max-w-full object-contain transform-gpu will-change-[transform,opacity]"
                        loading="lazy"
                        decoding="async"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={displayCard.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: duration.layout, ease: easing.enter }}
                    className="relative z-10 mt-4 border-t border-border-subtle pt-4 shrink-0"
                  >
                    <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent">
                      {displayCard.metric}
                    </span>
                    <h4 className="mt-2 text-lg font-semibold text-text-primary">
                      {displayCard.heading}
                    </h4>
                    <p className="mt-1.5 text-xs text-text-secondary leading-relaxed">
                      {displayCard.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right: Board of columns & cards */}
              <div className="order-1 lg:order-2 flex flex-row gap-3 overflow-x-auto snap-x snap-mandatory pb-4 pt-2 lg:flex-col lg:h-full lg:justify-between lg:overflow-x-visible lg:pb-0 lg:pt-0 scrollbar-none">
                {gortexCards.map((card) => {
                  const active = displayCard.id === card.id;
                  const Icon = card.icon;
                  return (
                    <button
                      key={card.id}
                      onClick={() => setActiveCard(card)}
                      onMouseEnter={() => setHoveredCard(card)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onFocus={() => setHoveredCard(card)}
                      onBlur={() => setHoveredCard(null)}
                      className={cn(
                        "relative flex shrink-0 w-[280px] snap-start lg:w-auto items-center gap-3 rounded-lg border px-4 py-4 lg:py-0 lg:px-5 lg:flex-1 text-left transition-all duration-200 focus-visible:outline-none focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-surface active:ring-2 active:ring-accent active:ring-offset-4 active:ring-offset-surface cursor-pointer transform-gpu will-change-[transform,opacity]",
                        active
                          ? "border-border-hover bg-surface-active ring-2 ring-accent ring-offset-4 ring-offset-surface"
                          : "border-border-subtle bg-surface hover:border-border-hover lg:hover:translate-x-1"
                      )}
                    >
                      {active && (
                        <span
                          className="absolute left-0 top-1/2 h-10 w-[3px] -translate-y-1/2 rounded-r bg-accent hidden lg:block animate-pulse"
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-md border transition-transform duration-200",
                          active
                            ? "border-accent/40 bg-accent/10 text-accent"
                            : "border-border-subtle bg-surface-hover text-text-secondary"
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3
                            className={cn(
                              "text-sm font-medium transition-colors",
                              active ? "text-text-primary" : "text-text-secondary"
                            )}
                          >
                            {card.heading}
                          </h3>
                          <span className="text-[10px] text-accent font-medium px-1.5 py-0.5 rounded border border-accent/20 bg-accent/5">
                            {card.metric}
                          </span>
                        </div>
                        <p className="mt-0.5 line-clamp-2 text-xs text-text-tertiary">
                          {card.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
