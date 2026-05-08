import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import AboutSection from "@/components/sections/AboutSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import SpeakingSection from "@/components/sections/SpeakingSection";
import InsightsSection from "@/components/sections/InsightsSection";
import MediaSection from "@/components/sections/MediaSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollReveal>
        <main className="flex-1">
          <HeroSection />
          <TrustSection />
          <AboutSection />
          <ExpertiseSection />
          <SpeakingSection />
          <InsightsSection />
          <MediaSection />
          <PhilosophySection />
          <ContactSection />
        </main>
      </ScrollReveal>
      <Footer />
    </>
  );
}
