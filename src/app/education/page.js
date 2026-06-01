import SiteShell from "@/components/SiteShell";
import Education from "@/components/Education";

export const metadata = {
  title: "Education",
  description: "Education details of Deepanshu Pal.",
};

export default function EducationPage() {
  return (
    <SiteShell>
      <Education />
    </SiteShell>
  );
}