import React from "react";
import "./About.css";
import "./MediaQueryAbout.css";
import myPhoto from "../../assets/img/Myfoto.png";

export default function About() {
  return (
    <div className="about-details" id="about">
      <div className="circle-bg"></div>
      <img src={myPhoto} alt="mifoto" />
      <div className="about-infos">
        <h1 className="">Sobre mi</h1>
        <p>
          Soy un programador junior con un fuerte interés en el desarrollo de
          software, especialmente en lenguaje(s) de programación Python,
          JavaScript, Java. Mi enfoque se centra en escribir código limpio,
          eﬁciente y bien documentado. Busco adquirir experiencia profesional y
          seguir aprendiendo dentro de un equipo de desarrollo dinámico.
        </p>
        <div className="experience-section">
          <div className="experience">
            <i className="fas fa-plus"></i>
            <span>2</span>
            <p>Años de experiencia</p>
          </div>
          <div className="experience">
            <i className="fas fa-plus"></i>
            <span>20</span>
            <p>Proyectos Realizados</p>
          </div>
          <div className="experience">
            <i className="fas fa-plus"></i>
            <span>5</span>
            <p>Trabajos profesionales</p>
          </div>
        </div>
      </div>
    </div>
  );
}
