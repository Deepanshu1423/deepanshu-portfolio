import SiteShell from "@/components/SiteShell";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact",
  description: "Contact Deepanshu Pal for MERN Stack Developer opportunities.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <Contact />
    </SiteShell>
  );
}