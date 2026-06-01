import SiteShell from "@/components/SiteShell";
import Projects from "@/components/Projects";

export const metadata = {
  title: "Projects",
  description: "Projects built by Deepanshu Pal.",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <Projects />
    </SiteShell>
  );
}