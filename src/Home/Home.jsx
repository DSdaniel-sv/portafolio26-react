import React from "react";
import { Hero, About, Skills, Portafolio, Contacto } from "../util/Alias";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Skills />
      <Portafolio />
      <Contacto />
    </div>
  );
}
