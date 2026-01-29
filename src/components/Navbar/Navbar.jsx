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

  return (
    <nav className="">
      <img
        src={theme === "light" ? logoLight : logoDark}
        alt="logo"
        className="logo"
      />
      <ul className={menuOpen ? "active" : ""}>
        <li className="">
          <a href="#">Home</a>
          <a href="#">About me</a>
          <a href="#">Skills</a>
          <a href="#">Portafolio</a>
          <a href="#">Contact</a>
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
