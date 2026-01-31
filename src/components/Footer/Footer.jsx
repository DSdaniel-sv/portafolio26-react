import React from "react";
import "./Footer.css";
import "./MediaQueryFooter.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <hr />
      <div className="social-icons">
        <a
          href="https://www.facebook.com/daniel.yulbriner.silva.valencia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/danielyulbrinersilva/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.tiktok.com/@dsdaniel25"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-tiktok"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-yulbriner-silva-valencia-2669ba205/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <p>
        Copyright {currentYear} © DanielDev - Todos los derechso reservados.
      </p>
    </footer>
  );
}
