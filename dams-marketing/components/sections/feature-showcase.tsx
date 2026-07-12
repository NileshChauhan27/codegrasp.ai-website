"use client";

import { useState } from "react";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { FeatureSwitchList } from "./feature-switch-list";
import { FeatureStage } from "./feature-stage";

export function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Allow hover preview, but commit selection only on click.
  const displayIndex = hoveredIndex ?? activeIndex;

  return (
    <Section id="features" className="min-h-screen overflow-hidden">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-accent">
            The DAMS workflow
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
            Persistent memory. Defensive by design.
          </h2>
          <p className="mt-4 text-text-secondary">
            From PRD to working code — every step keeps the agent focused on what matters.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-6 lg:grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">
          <div className="order-2 lg:order-1 h-full flex flex-col">
            <FeatureStage featureIndex={displayIndex} />
          </div>
          <div className="order-1 lg:order-2">
            <FeatureSwitchList
              activeIndex={activeIndex}
              onSelect={setActiveIndex}
              onHover={setHoveredIndex}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
