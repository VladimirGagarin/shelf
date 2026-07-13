import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
    const [isOnMobile, setIsOnMobile] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>My App</h2>
        </div>
        <div className="nav-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="nav-toggle">
          <FaBars />
        </div>
      </div>
    </nav>
  );
}
