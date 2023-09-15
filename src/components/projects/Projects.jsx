import React from "react";
import "./projects.css";
import { useDarkModeContext } from "../hooks/DarkModeContext";
import notas from "../../assets/notas.png";
import encrypt from "../../assets/encryptor.png";
import task from "../../assets/task.png";
import rick from "../../assets/rick.png";
import pass from "../../assets/passgen.png";

/* icons */
import react from "../../assets/react-icon.png";
import html from "../../assets/html5.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import tailwind from "../../assets/tailwind.png";
import mysql from "../../assets/mysql.png";
import node from "../../assets/node.png";
import api from "../../assets/api.png";

const Projects = () => {
  const { isLightMode } = useDarkModeContext();
  return (
    <section
      id="main-projects"
      className="main-projects flex flex-col items-center"
    >
      <h3
        className={`font-bold text-3xl text-center mb-9 ${
          isLightMode ? "text-black" : "text-white"
        }`}
      >
        My Projects
      </h3>
      <div className="projects flex flex-wrap justify-center">
        <div className="pro-container hover:-translate-y-4 duration-700">
          <h3
            className={`project-name ${
              isLightMode ? "text-black" : "text-white"
            }`}
          >
            Notes
          </h3>
          <div className="proyects-container">
            <img src={notas} alt="Notes app" />{" "}
          </div>
          <div className="tech-icons">
            <img src={react} alt="React.js" />
            <img src={html} alt="HTML:5" />
            <img src={css} alt="CSS" />
            <img src={js} alt="JavaScript" />
            <img src={tailwind} alt="tailwind" />
          </div>

          <div className="proj-links">
            <a
              href="https://ur-notes.vercel.app/"
              className={`${
                isLightMode
                  ? "text-black border-2 border-black hover:text-white hover:bg-black"
                  : "text-white border-2 border-white hover:text-black hover:bg-white"
              }`}
            >
              Visit
            </a>
            <a
              href="https://github.com/CiroAntony/UrNotes"
              className={`${
                isLightMode
                  ? "text-black border-2 border-black hover:text-white hover:bg-black"
                  : "text-white border-2 border-white hover:text-black hover:bg-white"
              }`}
            >
              Respository
            </a>
          </div>
        </div>

        <div className="pro-container hover:-translate-y-4 duration-700">
          <h3
            className={`project-name ${
              isLightMode ? "text-black" : "text-white"
            }`}
          >
            Text Encryptor
          </h3>

          <div className="proyects-container">
            <img src={encrypt} alt="Text Encryptor" />{" "}
          </div>
          <div className="tech-icons">
            <img src={html} alt="HTML:5" />
            <img src={css} alt="CSS" />
            <img src={js} alt="JavaScript" />{" "}
          </div>
          <div className="proj-links">
            <a
              href="https://challenge-oracle-one-theta.vercel.app/"
              className={`${
                isLightMode
                  ? "text-black border-2 border-black hover:text-white hover:bg-black"
                  : "text-white border-2 border-white hover:text-black hover:bg-white"
              }`}
            >
              Visit
            </a>
            <a
              href="https://github.com/CiroAntony/EncryptDecrypt-Challenge-Oracle-ONE"
              className={`${
                isLightMode
                  ? "text-black border-2 border-black hover:text-white hover:bg-black"
                  : "text-white border-2 border-white hover:text-black hover:bg-white"
              }`}
            >
              Respository
            </a>
          </div>
        </div>

        <div className="pro-container hover:-translate-y-4 duration-700">
          <h3
            className={`project-name ${
              isLightMode ? "text-black" : "text-white"
            }`}
          >
            To-do App
          </h3>
          <div className="proyects-container">
            <img src={task} alt="To-do App" />{" "}
          </div>
          <div className="tech-icons">
            <img src={html} alt="HTML:5" />
            <img src={css} alt="CSS" />
            <img src={js} alt="JavaScript" />{" "}
          </div>
          <div className="proj-links">
            <a
              href="https://task-manager-alpha-murex.vercel.app/"
              className={`${
                isLightMode
                  ? "text-black border-2 border-black hover:text-white hover:bg-black"
                  : "text-white border-2 border-white hover:text-black hover:bg-white"
              }`}
            >
              Visit
            </a>
            <a
              href="https://github.com/CiroAntony/task-manager"
              className={`${
                isLightMode
                  ? "text-black border-2 border-black hover:text-white hover:bg-black"
                  : "text-white border-2 border-white hover:text-black hover:bg-white"
              }`}
            >
              Respository
            </a>
          </div>
        </div>

        <div className="pro-container hover:-translate-y-4 duration-700">
          <h3
            className={`project-name ${
              isLightMode ? "text-black" : "text-white"
            }`}
          >
            Rick&Morty Website
          </h3>
          <div className="proyects-container">
            <img src={rick} alt="Rick&Morty Website" />{" "}
          </div>
          <div className="tech-icons">
            <img src={html} alt="HTML:5" />
            <img src={css} alt="CSS" />
            <img src={js} alt="JavaScript" />
            <img src={api} alt="API" />
          </div>
          <div className="proj-links">
            <a
              href="https://api-rick-morty-nu.vercel.app/"
              className={`${
                isLightMode
                  ? "text-black border-2 border-black hover:text-white hover:bg-black"
                  : "text-white border-2 border-white hover:text-black hover:bg-white"
              }`}
            >
              Visit
            </a>
            <a
              href="https://github.com/CiroAntony/API-Rick-Morty"
              className={`${
                isLightMode
                  ? "text-black border-2 border-black hover:text-white hover:bg-black"
                  : "text-white border-2 border-white hover:text-black hover:bg-white"
              }`}
            >
              Respository
            </a>
          </div>
        </div>

        <div className="pro-container hover:-translate-y-4 duration-700">
          <h3
            className={`project-name ${
              isLightMode ? "text-black" : "text-white"
            }`}
          >
            Password Generator
          </h3>
          <div className="proyects-container">
            <img src={pass} alt="Password Generator" />{" "}
          </div>
          <div className="tech-icons">
            <img src={html} alt="HTML:5" />
            <img src={css} alt="CSS" />
            <img src={js} alt="JavaScript" />
          </div>
          <div className="proj-links">
            <a
              href="https://generador-de-contrase-as.vercel.app/"
              className={`${
                isLightMode
                  ? "text-black border-2 border-black hover:text-white hover:bg-black"
                  : "text-white border-2 border-white hover:text-black hover:bg-white"
              }`}
            >
              Visit
            </a>
            <a
              href="https://github.com/CiroAntony/Generador-de-contrase-as"
              className={`${
                isLightMode
                  ? "text-black border-2 border-black hover:text-white hover:bg-black"
                  : "text-white border-2 border-white hover:text-black hover:bg-white"
              }`}
            >
              Respository
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
