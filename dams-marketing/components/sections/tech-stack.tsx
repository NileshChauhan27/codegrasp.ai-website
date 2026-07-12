"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { techStack } from "@/lib/tech-stack";
import { TechIcon } from "./tech-icon";
import { easing, duration, stagger } from "@/lib/motion";

export function TechStack() {
  const reducedMotion = useReducedMotion();

  return (
    <Section id="stack" className="overflow-hidden">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
            Built on a modern AI stack
          </h2>
          <p className="mt-4 text-text-secondary">
            Python, React, FastAPI, Ollama, Chunkhound, Graphify, DuckDB, Typer,
            GritQL, ragas, MCP, Obsidian.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: duration.reveal,
                ease: easing.enter,
                delay: stagger.fast * index,
              }}
              className="flex flex-col items-center gap-2"
            >
              <TechIcon name={tech.name} />
              <span className="text-xs text-text-tertiary">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
