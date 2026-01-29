import React from "react";
import { Hero, About, Skills } from "../util/Alias";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
