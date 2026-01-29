import React from "react";
import "./Skills.css";
import "./MediaQuerySkills.css";

export default function Skills() {
  return (
    <div className="skills">
      <h1>Mis Habilidades</h1>
      <div className="skills-base">
        <div className="skills-box">
          <i className="fas fa-laptop-code"></i>
          <h3>Desarrollo Web</h3>
          <p>
            Me especializo en desarrollo web para crear sitions modernos y
            funcionales utilizando tecnologias HTML, CSS, JavaScript, y ReactJS.
            Siempre me enfoco en ofrecer soluciones optimizadas y escalables.
          </p>
        </div>

        <div className="skills-box">
          <i className="fas fa-drafting-compass"></i>
          <h3>Diseño UI/UX</h3>
          <p>
            Mi enfoque en diseño de interfaz de usuario (UI) y experiencia de
            usuario (UX) busca crear experiencias visualmente atractivas y
            faciles de usar para mejorar la interaccion del usuario con las
            aplicaciones.
          </p>
        </div>

        <div className="skills-box">
          <i className="fa-brands fa-react"></i>
          <h3>Aplicaciones Web React</h3>
          <p>
            Desarrollo aplicaciones web personalizadas con ReactJS, enfocandome
            en crear experiencias de usaurio dinamicas, rapidas y responsivas.
          </p>
        </div>
      </div>
    </div>
  );
}
