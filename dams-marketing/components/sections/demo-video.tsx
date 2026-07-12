"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { easing, duration } from "@/lib/motion";

export function DemoVideo() {
  const reducedMotion = useReducedMotion();

  return (
    <Section id="demo" className="overflow-hidden">
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
            See DAMS run a feature from PRD to code
          </h2>
          <p className="mt-4 text-text-secondary">
            Create a project, atomize the PRD into Kanban cards, generate queries,
            warm the SQLite cache, and let the agent write code from a curated
            scratchpad while native search stays blocked.
          </p>
          <p className="mt-2 text-sm text-text-tertiary">
            (5-minute walkthrough — full demo recording incoming.)
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

          <div className="relative overflow-hidden rounded-[1.25rem] border border-border-subtle bg-surface shadow-2xl">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                title="DAMS PRD-to-Code Demo"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
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
