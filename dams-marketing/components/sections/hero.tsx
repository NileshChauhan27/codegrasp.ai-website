"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { HeroMesh } from "./hero-mesh";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Container as ContainerIcon, Shield, Zap } from "lucide-react";
import { Github } from "@/components/shared/icons";
import { GITHUB_URL } from "@/lib/site";
import { easing, duration, stagger } from "@/lib/motion";
import { HeroFlow } from "./hero-flow";

const trustPills = [
  { icon: Zap, label: "Local-first" },
  { icon: ContainerIcon, label: "Dockerized" },
  { icon: Sparkles, label: "Codebase-intelligence research" },
  { icon: Shield, label: "v2.0 shipped" },
];

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <Section id="hero" padding="hero" className="relative flex items-center justify-center overflow-hidden pt-32 lg:pt-40 pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(45,139,139,0.12),transparent)]" aria-hidden="true" />
      <HeroMesh />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Copy */}
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            <motion.div
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.reveal, ease: easing.enter }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>DAMS v2.0 — Local-first codebase memory</span>
            </motion.div>

            <motion.h1
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.reveal, ease: easing.enter, delay: stagger.default }}
              className="mt-6 text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl text-balance leading-[1.1]"
            >
              Protect AI agents with{" "}
              <span className="bg-gradient-to-r from-accent via-[#4fb3b3] to-[#7c3aed] bg-clip-text text-transparent">
                persistent defensive memory
              </span>
            </motion.h1>

            <motion.p
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.reveal, ease: easing.enter, delay: stagger.default * 2 }}
              className="mt-6 text-base text-text-secondary md:text-lg max-w-2xl lg:max-w-none"
            >
              A local-first development workbench that compiles code context, warms SQLite caches, and intercepts native search tools so agents write features without re-reading the codebase.
            </motion.p>

            <motion.div
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.reveal, ease: easing.enter, delay: stagger.default * 3 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row w-full sm:w-auto"
            >
              <Button
                render={<a href="#demo" />}
                nativeButton={false}
                size="lg"
                className="group w-full sm:w-auto bg-accent text-white hover:bg-accent/90"
              >
                Watch the demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                render={<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <span className="inline-flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  See it on GitHub
                </span>
              </Button>
            </motion.div>

            <motion.div
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.reveal, ease: easing.enter, delay: stagger.default * 4 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3"
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
          </div>

          {/* Right Column: Visual Animation */}
          <div className="lg:col-span-5 flex items-center justify-center w-full">
            <motion.div
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: duration.reveal + 0.2, ease: easing.enter, delay: stagger.default * 2 }}
              className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl border border-border-subtle bg-surface/30 p-4 shadow-2xl backdrop-blur-sm"
            >
              <HeroFlow />
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
