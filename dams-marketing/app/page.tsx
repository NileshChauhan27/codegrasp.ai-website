import { SkipLink } from "@/components/shared/skip-link";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { DemoVideo } from "@/components/sections/demo-video";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { Architecture } from "@/components/sections/architecture";
import { ResearchLab } from "@/components/sections/research-lab";
import { WhyDams } from "@/components/sections/why-dams";
import { DeveloperFirst } from "@/components/sections/developer-first";
import { TechStack } from "@/components/sections/tech-stack";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DAMS — Defensive Agentic Memory System",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Linux, macOS, Windows",
    "description": "DAMS is a local, Dockerized codebase-intelligence workbench that atomizes PRDs into tasks, warms a SQLite cache with code snippets, and lets AI agents write the next feature without re-reading the codebase.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SkipLink />
      <Header />
      <main id="main-content" className="flex flex-1 flex-col">
        <Hero />
        <DemoVideo />
        <FeatureShowcase />
        <Architecture />
        <ResearchLab />
        <WhyDams />
        <DeveloperFirst />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
