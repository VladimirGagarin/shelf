import Navbar from "./Shared/components/Navbar"
import './App.css'

function App() {
  

  return (
    <>
      <Navbar />
      <section className="LandingPage">
        <h1>Welcome to <span className="shelf-box">SHELF</span> <span className="lab-text">LAB</span> </h1>
        <p>This is the main content area.</p>
      </section>
      <section className="LandingPage"></section>
    </>
  )
}

export default App
