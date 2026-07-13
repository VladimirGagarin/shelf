import Navbar from "./Shared/components/Navbar"
import './App.css'
import BarVisualizer from "./Shared/components/BarVisualizer";

function App() {
  const barData = [60, 80, 40, 90, 50];

  return (
    <>
      <Navbar />
      <section className="LandingPage">
        <h1>
          Welcome to <span className="shelf-box">SHELF</span>{" "}
          <span className="lab-text">LAB</span>
        </h1>
        <div className="landingpage-content">
          <div className="left-content">
            <span>Design.</span>
            <span>Optimize.</span>
            <span>Deploy.</span>
            <p>Algorithms That Power Real-World Innovation.</p>
          </div>
          <div className="right-content">
            
            <BarVisualizer data={barData} index={2} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App
