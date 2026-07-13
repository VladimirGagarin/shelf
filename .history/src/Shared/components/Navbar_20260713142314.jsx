import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isOnMobile, setIsOnMobile] = useState(false);

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

    return (
        <nav className="navbar">
          {is}
    </nav>
  );
}
