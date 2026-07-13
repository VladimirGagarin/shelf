import Navbar from "./Shared/components/Navbar"
import './App.css'

function App() {
  

  return (
    <>
      <Navbar />
      <section className="LandingPage">
        <h1>
          Welcome to <span className="shelf-box">SHELF</span>{" "}
          <span className="lab-text">LAB</span>
        </h1>
        <div className="left-content">
          <span></span>
          <span></span>
          Design. Optimize. Deploy. Algorithms That Power
          Real-World Innovation.
        </div>
      </section>
    </>
  );
}

export default App
