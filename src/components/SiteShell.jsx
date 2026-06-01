import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import BackToTop from "@/components/BackToTop";

const SiteShell = ({ children }) => {
  return (
    <main className="relative overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <BackToTop />
      <Navbar />

      {children}

      <Footer />
    </main>
  );
};

export default SiteShell;