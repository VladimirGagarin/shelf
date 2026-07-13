import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsMenuOpen(false); // Close menu on desktop
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event) => {
      if (isMenuOpen && event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen, isMobile]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
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
      title: "Solutions",
      children: [
        { label: "Services", link: "/services" },
        { label: "Industries", link: "/industries" },
        { label: "Case Studies", link: "/case-studies" },
        { label: "Request Solution", link: "/request" },
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
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar-container">
          {/* Logo */}
          <div className="nav-logo">
            <a href="/" aria-label="ShelfLab Home">
              <h2 className="hero-title">
                <span className="shelf-box">SHELF</span>
                <span className="lab-text">LAB</span>
              </h2>
            </a>
          </div>

          {/* Desktop Menu */}
          {!isMobile && (
            <div className="nav-menu">
              <ul className="nav-list">
                {navItems.map((item, index) => (
                  <li key={index} className="nav-item">
                    <button
                      className="nav-link"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {item.title}
                    </button>
                    <ul className="dropdown-menu">
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <a href={child.link} className="dropdown-link">
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              ref={buttonRef}
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`mobile-menu ${isMenuOpen ? "open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="mobile-menu-content">
            <ul className="mobile-nav-list">
              {navItems.map((item, index) => (
                <li key={index} className="mobile-nav-item">
                  <div className="mobile-nav-header">
                    <span>{item.title}</span>
                  </div>
                  <ul className="mobile-submenu">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <a
                          href={child.link}
                          className="mobile-nav-link"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}