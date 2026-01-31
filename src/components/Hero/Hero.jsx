import React from "react";
import "./Hero.css";
import "./MediaQueryHero.css";
import myPhoto from "../../assets/img/myPhoto.png";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="text-container">
        <span>Hola Soy,</span>
        <h1>Daniel Silva Valencia</h1>
        <p>
          Mi pasion por la programacion y la programacion web, con habilidades
          en Python, Javascript, CSS, ReactJS, mongoDB y Node.js, me impulsan a
          buscar y crear soluciones que sean atractivas, como funcionales y
          efectivas.
        </p>
        <a href="https://wa.me/51990519686" target="_blank" className="btn">
          Contactame
        </a>
      </div>
      <div className="image-container">
        <div className="circle-bg"></div>
        <img className="foto" src={myPhoto} alt="miFoto" />
      </div>
    </div>
  );
}
