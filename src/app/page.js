import SiteShell from "@/components/SiteShell";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <TechMarquee />
    </SiteShell>
  );
}