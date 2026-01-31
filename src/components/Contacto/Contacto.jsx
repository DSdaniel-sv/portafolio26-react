import React from "react";
import "./Contacto.css";
import "./MediaQueryContact.css";

export default function Contacto() {
  return (
    <div className="contact">
      <h1>Contacto</h1>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-content">
            <i className="fas fa-usercircle icon"></i>
            <h2>INFORMACION DE CONTACTO</h2>
            <p>
              <i className="fas fa-envelope"></i>
              danielsilvavalencia25@gmail.com
            </p>
            <p>
              <i className="fas fa-phone"></i>
              +51 990519686
            </p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Envia tu Mensaje</h2>
          <form action="https://formspree.io/f/maqjrgwy" method="POST">
            <input name="name" type="text" placeholder="Hombres" required />
            <input name="email" type="email" placeholder="Correo@gmail.com" required />
            <textarea name="message" placeholder="Mensaje" required></textarea>
            <button type="submit">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </div>
  );
}
