import SiteShell from "@/components/SiteShell";
import About from "@/components/About";

export const metadata = {
  title: "About",
  description: "About Deepanshu Pal, MERN Stack Developer.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <About />
    </SiteShell>
  );
}