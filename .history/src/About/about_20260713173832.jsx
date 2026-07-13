import "./about.css";
import Navbar from "../Shared/components/Navbar";
import { Link } from "react-router-dom";

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
          <Link to="/algorithms">
            <button>Explore the Lab</button>
          </Link>
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
        <div className="cta">
          <Link to="/research">
            <button>Explore the Lab</button>
          </Link>
        </div>
      </section>
);

const MissionSection = () => (
  <section className="mission-section">
        <h2>Our Mission</h2>
        <pre
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