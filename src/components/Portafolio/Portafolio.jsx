import React from "react";
import "./Portafolio.css";
import "./MediaQueryPorta.css";
import image1 from "../../assets/img/img-proyect/1.PNG";
import image2 from "../../assets/img/img-proyect/2.PNG";
import image3 from "../../assets/img/img-proyect/3.PNG";
import image4 from "../../assets/img/img-proyect/4.PNG";

const portafolioItems = [
  {
    id: 1,
    title: "WAPSI",
    description:
      "Wapsi - Servicios Integrales, desarrollado con JS & CSS, NodeJS",
    image: image1,
    demonLink: "https://proyect-practice.vercel.app/",
  },
  {
    id: 2,
    title: "Tienda Virtual - Autopartes",
    description: "Desarrollado con React-CSS",
    image: image2,
    demonLink: "https://proyecto-react-autopartes.vercel.app/",
  },
  {
    id: 3,
    title: "Biblioteca Virtual de cursos Online",
    description: "Desarrollado con JS & CSS, NodeJS",
    image: image3,
    demonLink: "https://tienda-cursos-mu.vercel.app/",
  },
  {
    id: 4,
    title: "Github Search",
    description: "Desarrollado con React Material-UI",
    image: image4,
    demonLink: "",
  },
];

export default function Portafolio() {
  return (
    <div className="portafolio">
      <h1>Portafolio</h1>
      <div className="portafolio-container">
        {portafolioItems.map((item) => (
          <div className="portafolio-card" key={item.id}>
            <img
              className="portafolio-image"
              src={item.image}
              alt={item.title}
            />
            <div className="portafolio-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a
                href={item.demonLink}
                target="_blank"
                rel="noopener norererrer"
                className="demo-button"
              >
                Ver Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
