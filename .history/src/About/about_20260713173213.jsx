import "./about.css";
import Navbar from "../Shared/components/Navbar"

const HeroSection = () => (
  <section className="hero-section">
    <h1>ABOUT SHELFLAB</h1>
    <h2>Where Algorithms Solve Real Problems.</h2>
    <pre>
      We are an algorithm engineering laboratory dedicated to designing
      intelligent, efficient, and scalable solutions for businesses and
      developers.
    </pre>
  </section>
);

const WhoWeAreSection = () => (
  <section className="who-we-are-section">
        <h2>Who We Are</h2>
        <pre></pre>

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