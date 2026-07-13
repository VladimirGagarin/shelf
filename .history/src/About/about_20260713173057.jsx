import "./about.css";
import Navbar from "../Shared/components/Navbar"

const HeroSection = () => (
  <section className="hero-section">
    <h1>ABOUT SHELFLAB</h1>
    <h
    <p>Learn more about our mission and values.</p>
  </section>
);

export default function AboutPage() {
    return (
      <>
        <Navbar />

        <HeroSection />

        <WhoWeAreSection />

        <MissionSection />

        <PrinciplesSection />

        <WorkflowSection />

        <IndustriesSection />

        <WhyShelfLabSection />

        <CTASection />

        <Footer />
      </>
    );
}