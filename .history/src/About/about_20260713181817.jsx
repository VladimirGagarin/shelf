import "./about.css";
import Navbar from "../Shared/components/Navbar";
import { Link } from "react-router-dom";
import {
  FaMicroscope,
  FaRocket,
  FaFlask,
  FaHandshake,
  FaArrowRight,
  FaChartLine,
  FaShieldAlt,
  FaBrain,
  FaRobot,
  FaDatabase,
  FaCogs,
  FaLightbulb,
} from "react-icons/fa";

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-content">
      <span className="hero-badge">Algorithm Engineering Lab</span>
      
      {/* Updated heading with styled SHELF and LAB */}
      <h1 className="hero-title">
        ABOUT <span className="shelf-box">SHELF</span><span className="lab-text">LAB</span>
      </h1>
      
      <h2>Where Algorithms Solve Real Problems.</h2>
      <p className="hero-description">
        We are an algorithm engineering laboratory dedicated to designing
        intelligent, efficient, and scalable solutions for businesses and
        developers.
      </p>
      <div className="cta-group">
        <Link to="/algorithms" className="btn-primary">
          Explore the Lab <FaArrowRight />
        </Link>
        <Link to="/research" className="btn-secondary">
          View Research
        </Link>
      </div>
    </div>
    <div className="hero-visual">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  </section>
);

const WhoWeAreSection = () => (
  <section className="who-we-are-section">
    <div className="section-container">
      <div className="section-header">
        <span className="section-tag">About Us</span>
        <h2>Who We Are</h2>
        <p className="section-subtitle">
          Transforming complex computational problems into practical solutions
        </p>
      </div>
      <div className="who-we-are-grid">
        <div className="who-we-are-content">
          <p>
            ShelfLab is an algorithm engineering laboratory focused on
            transforming complex computational problems into practical software
            solutions.
          </p>
          <p>
            Our work combines computer science, optimization, artificial
            intelligence, visualization, and software engineering.
          </p>
          <Link to="/research" className="btn-primary">
            Explore Our Research <FaArrowRight />
          </Link>
        </div>
        <div className="who-we-are-stats">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Algorithms Developed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">Industry Partners</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Research Publications</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MissionSection = () => (
  <section className="mission-section">
    <div className="section-container">
      <div className="mission-grid">
        <div className="mission-card">
          <div className="mission-icon">🚀</div>
          <h3>Our Mission</h3>
          <p>
            To engineer algorithms that improve how organizations make
            decisions, optimize operations, and build intelligent software.
          </p>
        </div>
        <div className="mission-card">
          <div className="mission-icon">🌟</div>
          <h3>Our Vision</h3>
          <p>
            To become one of the world's leading algorithm engineering
            laboratories, bridging research with real-world innovation.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const PrinciplesSection = () => {
  const cards = [
    {
      title: "Innovation",
      icon: <FaBrain />,
      tagline: "Research-driven engineering.",
      description:
        "Pushing boundaries with cutting-edge research and development.",
    },
    {
      title: "Performance",
      icon: <FaChartLine />,
      tagline: "Efficiency matters.",
      description:
        "Optimizing every solution for maximum efficiency and speed.",
    },
    {
      title: "Experimentation",
      icon: <FaFlask />,
      tagline: "Every solution is tested.",
      description: "Rigorous testing and validation for reliable results.",
    },
    {
      title: "Real Impact",
      icon: <FaHandshake />,
      tagline: "Technology that solves problems.",
      description: "Creating meaningful solutions that make a difference.",
    },
  ];

  return (
    <section className="principles-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Core Values</span>
          <h2>Our Principles</h2>
          <p className="section-subtitle">
            Guiding our approach to algorithm engineering
          </p>
        </div>
        <div className="principles-cards">
          {cards.map((card, index) => (
            <div key={index} className="principle-card">
              <div className="principle-icon-wrapper">
                <span className="principle-icon">{card.icon}</span>
              </div>
              <h3>{card.title}</h3>
              <p className="principle-tagline">{card.tagline}</p>
              <p className="principle-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkflowSection = () => {
  const steps = [
    {
      title: "Problem",
      icon: <FaLightbulb />,
      description: "Understand and define the challenge",
    },
    {
      title: "Research",
      icon: <FaMicroscope />,
      description: "Explore existing solutions and approaches",
    },
    {
      title: "Design",
      icon: <FaCogs />,
      description: "Create algorithm architecture",
    },
    {
      title: "Prototype",
      icon: <FaFlask />,
      description: "Build and test initial version",
    },
    {
      title: "Testing",
      icon: <FaShieldAlt />,
      description: "Validate and optimize performance",
    },
    {
      title: "Deployment",
      icon: <FaRocket />,
      description: "Launch and monitor in production",
    },
  ];

  return (
    <section className="workflow-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Process</span>
          <h2>Our Workflow</h2>
          <p className="section-subtitle">
            How we transform ideas into solutions
          </p>
        </div>
        <div className="workflow-steps">
          {steps.map((step, index) => (
            <div className="workflow-step-wrapper" key={index}>
              <div className="step-card">
                <div className="step-number">{index + 1}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <FaArrowRight />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustriesSection = () => {
  const industries = [
    {
      category: "Healthcare",
      icon: <FaMicroscope />,
      items: ["Scheduling", "AI", "Predictive Analytics"],
    },
    {
      category: "Finance",
      icon: <FaChartLine />,
      items: ["Fraud Detection", "Risk", "Optimization"],
    },
    {
      category: "Retail",
      icon: <FaDatabase />,
      items: ["Inventory", "Recommendation", "Forecasting"],
    },
    {
      category: "Sports",
      icon: <FaRobot />,
      items: ["Analytics", "Insights", "Simulation"],
    },
  ];

  return (
    <section className="industries-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Expertise</span>
          <h2>Industries We Serve</h2>
          <p className="section-subtitle">
            Applying algorithm engineering across diverse sectors
          </p>
        </div>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon">{industry.icon}</div>
              <h3>{industry.category}</h3>
              <ul className="industry-items">
                {industry.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyShelfLabSection = () => {
  const pillars = [
    {
      title: "Algorithm Engineering",
      icon: <FaCogs />,
      description: "Building robust, efficient, and scalable algorithms",
    },
    {
      title: "Interactive Demos",
      icon: <FaFlask />,
      description: "Visualizing complex algorithms in action",
    },
    {
      title: "Business Solutions",
      icon: <FaHandshake />,
      description: "Delivering measurable results and ROI",
    },
  ];

  return (
    <section className="why-shelflab-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2>Why ShelfLab?</h2>
          <p className="section-subtitle">
            Unlike traditional software companies, ShelfLab combines research,
            interactive visualization, and consulting to deliver
            algorithm-driven solutions.
          </p>
        </div>
        <div className="why-shelflab-grid">
          {pillars.map((pillar, index) => (
            <div key={index} className="why-shelflab-card">
              <div className="pillar-icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="cta-section">
    <div className="section-container">
      <div className="cta-content">
        <h2>Ready to Solve Your Next Challenge?</h2>
        <p>
          Whether you're building a startup, optimizing operations, or
          researching new ideas, ShelfLab is ready to help.
        </p>
        <Link to="/request" className="btn-primary btn-large">
          Request a Solution <FaArrowRight />
        </Link>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-brand">
        <h2>ShelfLab</h2>
        <p>Algorithm Engineering Laboratory</p>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h4>Company</h4>
          <Link to="/about">About</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <Link to="/blog">Blog</Link>
          <Link to="/tutorials">Tutorials</Link>
          <Link to="/docs">Documentation</Link>
        </div>
        <div className="footer-column">
          <h4>Connect</h4>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} ShelfLab. All rights reserved.</p>
    </div>
  </footer>
);

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhoWeAreSection />
        <MissionSection />
        <PrinciplesSection />
        <WorkflowSection />
        <IndustriesSection />
        <WhyShelfLabSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
