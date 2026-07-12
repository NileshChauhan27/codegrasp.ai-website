"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { CONTACT_EMAIL, DOCS_URL } from "@/lib/site";
import { easing, duration } from "@/lib/motion";

export function CTA() {
  const reducedMotion = useReducedMotion();

  return (
    <Section id="cta" className="overflow-hidden">
      <Container>
        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: duration.reveal, ease: easing.enter }}
          className="relative overflow-hidden rounded-3xl border border-border-subtle bg-surface px-6 py-16 text-center md:px-12 md:py-24"
        >
          {/* Ambient glow */}
          <div
            className="pointer-events-none absolute -inset-20 opacity-20 blur-3xl transition-opacity duration-1000"
            style={{
              background:
                "linear-gradient(135deg, rgba(45,139,139,0.6), rgba(124,58,237,0.5))",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
              Ship the next feature without re-reading the codebase.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-secondary">
              Get started with the documentation, or reach out to talk about the
              codebase-intelligence research behind DAMS.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                render={<a href={DOCS_URL} target="_blank" rel="noopener noreferrer" />}
                size="lg"
                className="group bg-accent text-white hover:bg-accent/90"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Read the Documentation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                render={<a href={`mailto:${CONTACT_EMAIL}`} />}
                variant="outline"
                size="lg"
              >
                Contact
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
