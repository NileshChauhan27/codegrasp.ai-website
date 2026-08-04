"use client";

import { useState, useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { easing, duration } from "@/lib/motion";

export function DemoVideo() {
  const reducedMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Section id="demo" className="overflow-hidden">
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
            See DAMS run a feature from PRD to code
          </h2>
          <p className="mt-4 text-text-secondary">
            Create a project, atomize the PRD into task cards, generate queries,
            warm the SQLite cache, and let the agent write code from a curated
            scratchpad while native search stays blocked.
          </p>
          <p className="mt-2 text-sm text-text-tertiary">
            (4-minute walkthrough — full demo recording incoming.)
          </p>
        </div>

        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: duration.reveal, ease: easing.enter }}
          className="relative mx-auto mt-12 max-w-5xl"
        >
          {/* Ambient glow behind card */}
          <div
            className="absolute -inset-4 rounded-[2rem] opacity-20 blur-2xl transition-opacity duration-1000"
            style={{
              background:
                "linear-gradient(135deg, rgba(45,139,139,0.5), rgba(124,58,237,0.4))",
            }}
            aria-hidden="true"
          />

          <div
            ref={containerRef}
            className="relative overflow-hidden rounded-[1.25rem] border border-border-subtle bg-surface shadow-2xl ring-2 ring-accent ring-offset-4 ring-offset-surface"
          >
            <div className="aspect-video w-full">
              {isPlaying ? (
                <iframe
                  src="https://www.youtube.com/embed/YPKLZIjaayM?autoplay=1&rel=0&modestbranding=1"
                  title="DAMS PRD-to-Code Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              ) : (
                <div
                  onClick={() => setIsPlaying(true)}
                  className="group relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden bg-[#131517] select-none"
                >
                  <img
                    src="/features/kanban-dashboard.webp"
                    alt="DAMS PRD-to-Code Demo Preview"
                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-80 transform-gpu will-change-transform"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Accent themed overlay button */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#ff0000] border border-accent/20">
                    <span className="ml-1.5 h-0 w-0 border-y-8 border-y-transparent border-l-[14px] border-l-white" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <p className="mt-6 text-center text-sm text-text-tertiary">
          <a href="#" className="underline decoration-border hover:text-text-secondary">
            Read the demo transcript
          </a>{" "}
          (coming soon)
        </p>
      </Container>
    </Section>
  );
}
