import SiteShell from "@/components/SiteShell";
import Experience from "@/components/Experience";

export const metadata = {
  title: "Experience",
  description: "Experience of Deepanshu Pal.",
};

export default function ExperiencePage() {
  return (
    <SiteShell>
      <Experience />
    </SiteShell>
  );
}