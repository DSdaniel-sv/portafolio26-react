import React, { useContext } from "react";
import "./ThemeToggle.css";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle-button" onClick={toggleTheme}>
      <i className={theme === "light" ? "fas fa-moon" : "fas fa-sun"}></i>
    </button>
  );
}
