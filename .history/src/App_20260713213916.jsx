import Navbar from "./Shared/components/Navbar";
import "./App.css";
import BarVisualizer from "./Shared/components/BarVisualizer";
import { FaArrowRight, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function App() {
  const barData = [60, 80, 40, 90, 50, 70, 85, 55];

  return (
    <>
      <Navbar />
      <main className="landing-page">
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-left">
              <div className="hero-badge">
                🚀 Next-Gen Algorithm Engineering
              </div>

              <h1 className="hero-title">
                Welcome to <br />
                <span className="shelf-box">SHELF</span>
                <span className="lab-text">LAB</span>
              </h1>

              <div className="hero-tagline">
                <span className="tagline-item">Design.</span>
                <span className="tagline-item">Optimize.</span>
                <span className="tagline-item">Deploy.</span>
              </div>

              <p className="hero-description">
                Algorithms That Power Real-World Innovation.
              </p>

              <div className="hero-actions">
                <Link to="/algorithms" className="btn-primary">
                  Explore Algorithms <FaArrowRight />
                </Link>
                <Link to="/research" className="btn-secondary">
                  View Research
                </Link>
              </div>

              <div className="hero-social">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className="hero-right">
              <div className="visualizer-container">
                <div className="visualizer-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="visualizer-title">
                    Algorithm Performance
                  </span>
                </div>
                <BarVisualizer />
                <div className="visualizer-footer">
                  <span>Efficiency: 94%</span>
                  <span>|</span>
                  <span>Optimized: Yes</span>
                </div>
              </div>

              <div className="floating-stats">
                <div className="stat-card">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Algorithms</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Industries</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Publications</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
