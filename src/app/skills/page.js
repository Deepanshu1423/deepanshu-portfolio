import SiteShell from "@/components/SiteShell";
import Skills from "@/components/Skills";

export const metadata = {
  title: "Skills",
  description: "Technical skills of Deepanshu Pal.",
};

export default function SkillsPage() {
  return (
    <SiteShell>
      <Skills />
    </SiteShell>
  );
}