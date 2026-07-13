import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isOnMobile, setIsOnMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsOnMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const displayMenu = () => { 
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
  {
    title: "Solutions",
    children: [
      { label: "Services", link: "/services" },
      { label: "Industries", link: "/industries" },
      { label: "Case Studies", link: "/case-studies" },
      { label: "Request Solution", link: "/request" },
    ],
  },
  {
    title: "Lab",
    children: [
      { label: "Algorithms", link: "/algorithms" },
      { label: "Experiments", link: "/experiments" },
      { label: "Challenges", link: "/challenges" },
      { label: "Demos", link: "/demos" },
    ],
  },
  {
    title: "Research",
    children: [
      { label: "Research Lab", link: "/research" },
      { label: "Benchmarks", link: "/benchmarks" },
      { label: "Publications", link: "/publications" },
    ],
  },
  {
    title: "Resources",
    children: [
      { label: "Blog", link: "/blog" },
      { label: "Tutorials", link: "/tutorials" },
      { label: "Documentation", link: "/docs" },
    ],
  },
  {
    title: "Company",
    children: [
      { label: "About", link: "/about" },
      { label: "Careers", link: "/careers" },
      { label: "Contact", link: "/contact" },
    ],
  },
];

    return (
      <>
        <nav className="navbar">
          {isOnMobile ? (
            <div className="mobile-navbar">
              <div className="nav-logo">
                <h2>ShelfLab</h2>
              </div>
              <div className="nav-button" onClick={displayMenu}>
                <FaBars className="hamburger-icon" />
              </div>
            </div>
          ) : (
            <div className="desktop-navbar">
              <div className="nav-logo">
                <h2>ShelfLab</h2>
              </div>
              <div className="nav-menu">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
            </nav>
            
        {isOnMobile && isMenuOpen && (
            <div className="mobile-menu">
                <ul>
                    {navI.map((item, index) => (
                        <li key={index}>
                            <a href={item.link}>
                                {item.icon}
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )}
      </>
    );
    }
