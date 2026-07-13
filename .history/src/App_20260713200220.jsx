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
        <div classNam></div>
        <div className="left-content">
          <span>Design.</span>
          <span>Optimize.</span>
          <span>Deploy.</span>
          <p>Algorithms That Power Real-World Innovation.</p>
        </div>
      </section>
    </>
  );
}

export default App
