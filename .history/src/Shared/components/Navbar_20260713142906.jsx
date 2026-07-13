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

    const mmenuItems = [
        { icon: <FaBars />, label: "Home", link: "/" },
        { icon: <FaBars />, label: "About", link: "/about" },
        { icon: <FaBars />, label: "Contact", link: "/contact" },

    ]

    return (
        <>
        <nav className="navbar">
                {isOnMobile ? (
                    <div className="mobile-navbar" >
                        <div className="nav-logo">
                <h2>ShelfLab</h2>
              </div>
              <FaBars className="hamburger-icon" />
            </div>
          ) : (
            <div className="desktop-navbar">
              <div className="nav-logo">
                <h2>ShelfLab</h2>
              </div>
              <div className="nav-menu">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>
          )}
        </nav>
        </>
      );
    }
