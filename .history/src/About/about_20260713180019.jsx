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
        <pre>
            To engineer algorithms that improve
            how organizations make decisions,
            optimize operations,
            and build intelligent software.
        </pre>

        <h2>Our Vision</h2>
        <pre>
            To become one of the world's
            leading algorithm engineering laboratories,
            bridging research with real-world innovation.
        </pre>
      </section>
);

const PrinciplesSection = () => {
    const cards = [
        { title: "Innovation", icon: "🧠", tagline: "Research-driven engineering." },
        { title: "Performance", icon: "⚡", tagline: "Efficiency matters." },
        { title: "Experimentation", icon: "🧪,", tagline: "Every solution is tested." },
        { title: "Real Impact", icon: "🤝", tagline: "Technology that solves problems." },
    ]

    return (
        <section className="principles-section">
            <h2>Our Principles</h2>
            <div className="principles-cards">
                {cards.map((card, index) => (
                    <div key={index} className="principle-card">
                        <span className="principle-icon">{card.icon}</span>
                        <h3>{card.title}</h3>
                        <p>{card.tagline}</p>
                    </div>
                ))}
            </div>
        </section>
    )
    }
    
const WorkflowSection = () => {
    const steps = ["Problem", "Research", "Design", "Prototype", "Testing", "Deployment"];
    return (
        <section className="workflow-section">
            <h2>Our Workflow</h2>
            <div className="workflow-steps">
                {steps.map((step, index) => (
                    <div className= "step-card" key={index}>
                        <div className="workflow-step">
                            <span className="step-number">{index + 1}</span>
                            <h3>{step}</h3>
                        </div>

                        <div className="arrow">
                            <span className="arrow">↓</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

const IndustriesSection = () => {
    const indutries = {
        array1: ["Healthcare", "Scheduling", "AI"],
        array2: ["Finance", "Fraud Detection", "Risk", "Optimization"],
        array3: ["Retail", "Inventory", "Recommendation", "Forecasting"],
        array4: [ "Sports", "Analytics", "Insights", "Simulation"],
    };

    return (
        <section className="industries-section">
            <h2>Industries We Serve</h2>
            <div className="industries-cards">
                {indutries.map((arr, index) => (
                    arr.map((industry, subIndex) => (
                ))}
            </div>
        </section>
    )
}

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