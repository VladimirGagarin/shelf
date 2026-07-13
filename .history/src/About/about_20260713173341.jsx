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
        <div className="cta">
          <button>Learn More</button>
        </div>
  </section>
);

const WhoWeAreSection = () => (
  <section className="who-we-are-section">
        <h2>Who We Are</h2>
        <pre>
            ShelfLab is an algorithm engineering laboratory
            focused on transforming complex computational
            problems into practical software solutions.
        </pre>
        <pre>
            Our work combines computer science, optimization,
            artificial intelligence, visualization,
            and software engineering.
        </pre>

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