import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import "./MediaQueryNav.css";
import logoLight from "../../assets/img/logo_light.png";
import logoDark from "../../assets/img/logo_dark.png";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="">
      <img
        src={theme === "light" ? logoLight : logoDark}
        alt="logo"
        className="logo"
      />
      <ul className={menuOpen ? "active" : ""}>
        <li className="">
          <a href="#" onClick={(e) => handleScroll(e, "hero")}>
            Home
          </a>
          <a href="#about" onClick={(e) => handleScroll(e, "about")}>
            About me
          </a>
          <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>
            Skills
          </a>
          <a href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")}>
            Portafolio
          </a>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
            Contact
          </a>
          <i
            className="fa-solid fa-xmark"
            onClick={() => setMenuOpen(false)}
          ></i>
        </li>
      </ul>
      <ThemeToggle />
      <i className="fa-solid fa-bars" onClick={() => setMenuOpen(true)}></i>
    </nav>
  );
}
