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
  return (
    <>
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
