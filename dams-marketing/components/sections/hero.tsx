"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { HeroMesh } from "./hero-mesh";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Sparkles, Container as ContainerIcon, Shield, Zap } from "lucide-react";
import { GITHUB_URL } from "@/lib/site";
import { easing, duration, stagger } from "@/lib/motion";

const trustPills = [
  { icon: Zap, label: "Local-first" },
  { icon: ContainerIcon, label: "Dockerized" },
  { icon: Sparkles, label: "Codebase-intelligence research" },
  { icon: Shield, label: "v2.0 shipped" },
];

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <Section id="hero" padding="hero" className="relative flex items-center justify-center overflow-hidden pt-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(45,139,139,0.12),transparent)]" aria-hidden="true" />
      <HeroMesh />

      <Container className="relative z-10 text-center">
        <motion.p
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.reveal, ease: easing.enter }}
          className="text-xs font-medium uppercase tracking-[0.08em] text-text-secondary"
        >
          DAMS v2.0 — Local-first codebase intelligence for AI coding agents
        </motion.p>

        <motion.h1
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.reveal, ease: easing.enter, delay: stagger.default }}
          className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ lineHeight: 1.05 }}
        >
          Stop searching. Start shipping features.
        </motion.h1>

        <motion.p
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.reveal, ease: easing.enter, delay: stagger.default * 2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary md:text-xl"
        >
          DAMS atomizes your PRD into tasks, warms a SQLite cache with the exact
          code snippets and Graphify references your agent needs, and blocks noisy
          native search tools — so the LLM builds the next feature without
          re-reading the codebase from scratch.
        </motion.p>

        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.reveal, ease: easing.enter, delay: stagger.default * 3 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg" className="group bg-accent text-white hover:bg-accent/90">
            <a href="#demo">
              Watch the demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <Github className="h-4 w-4" />
              See it on GitHub
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.reveal, ease: easing.enter, delay: stagger.default * 4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {trustPills.map((pill) => (
            <span
              key={pill.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-surface px-3 py-1.5 text-sm text-text-secondary"
            >
              <pill.icon className="h-3.5 w-3.5 text-accent" />
              {pill.label}
            </span>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
