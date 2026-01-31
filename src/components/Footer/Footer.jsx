import React from "react";
import "./Footer.css";
import "./MediaQueryFooter.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <hr />
      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>
      <p>
        Copyright {currentYear} © DanielDev - Todos los derechso reservados.
      </p>
    </footer>
  );
}
