import React from "react";
import "./projects.css";
import { useDarkModeContext } from "../hooks/DarkModeContext";

const Projects = () => {
  const { isLightMode } = useDarkModeContext();
  return (
    <section
      id="main-projects"
      className="main-projects flex flex-col items-center"
    >
      <h3
        className={`font-bold text-4xl text-center mb-9 ${
          isLightMode ? "text-black" : "text-white"
        }`}
      >
        Projects
      </h3>
      <div className="projects flex flex-wrap justify-center">
        <div className="pro-container hover:-translate-y-4 duration-700">
          <h3
            className={`project-name ${
              isLightMode ? "text-black" : "text-white"
            }`}
          >
            IT Service manager
          </h3>
          <div className="proyects-container">
            <iframe src="https://dashboard-ctic.vercel.app/"></iframe>
          </div>
          <div className="tech-icons">
            <img
              src="https://vasquezciro-ep3.000webhostapp.com/assets/react-icon.png"
              alt="React.js"
            />

            <img
              src="https://vasquezciro-ep3.000webhostapp.com/assets/html5.png"
              alt="HTML:5"
            />
            <img
              src="https://vasquezciro-ep3.000webhostapp.com/assets/css.png"
              alt="CSS"
            />
            <img
              src="https://vasquezciro-ep3.000webhostapp.com/assets/js.png"
              alt="JavaScript"
            />
            <img
              src="https://vasquezciro-ep3.000webhostapp.com/assets/node.png"
              alt="Node.JS"
            />
            <img
              src="https://vasquezciro-ep3.000webhostapp.com/assets/mysql.png"
              alt="My Sql"
            />
          </div>

          <div className="proj-links">
            <a
              href="https://dashboard-ctic.vercel.app/"
              className={`${
                isLightMode
                  ? "text-black border-2 border-black hover:text-white hover:bg-black"
                  : "text-white border-2 border-white hover:text-black hover:bg-white"
              }`}
            >
              Visit
            </a>
            <a
              href="https://github.com/CiroAntony/dashboard-CTIC"
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
            <iframe src="https://challenge-oracle-one-theta.vercel.app/"></iframe>
          </div>
          <div className="tech-icons">
            <img
              src="https://vasquezciro-ep3.000webhostapp.com/assets/html5.png"
              alt="HTML:5"
            />
            <img
              src="https://vasquezciro-ep3.000webhostapp.com/assets/css.png"
              alt="CSS"
            />
            <img
              src="https://vasquezciro-ep3.000webhostapp.com/assets/js.png"
              alt="JavaScript"
            />
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
            <iframe src="https://task-manager-alpha-murex.vercel.app/"></iframe>
          </div>
          <div className="tech-icons">
            <img
              src="https://vasquezciro-ep3.000webhostapp.com/assets/html5.png"
              alt="HTML:5"
            />
            <img
              src="https://vasquezciro-ep3.000webhostapp.com/assets/css.png"
              alt="CSS"
            />
            <img
              src="https://vasquezciro-ep3.000webhostapp.com/assets/js.png"
              alt="JavaScript"
            />
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
            <iframe src="https://api-rick-morty-nu.vercel.app/"></iframe>
          </div>
          <div className="tech-icons">
            <img
              src="https://vasquezciro-ep3.000webhostapp.com/assets/html5.png"
              alt="HTML:5"
            />
            <img
              src="https://vasquezciro-ep3.000webhostapp.com/assets/css.png"
              alt="CSS"
            />
            <img
              src="https://vasquezciro-ep3.000webhostapp.com/assets/js.png"
              alt="JavaScript"
            />
            <img
              src="https://vasquezciro-ep3.000webhostapp.com/assets/api.png"
              alt="API"
            />
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
            <iframe src="https://generador-de-contrase-as.vercel.app/"></iframe>
          </div>
          <div className="tech-icons">
            <img
              src="https://vasquezciro-ep3.000webhostapp.com/assets/html5.png"
              alt="HTML:5"
            />
            <img
              src="https://vasquezciro-ep3.000webhostapp.com/assets/css.png"
              alt="CSS"
            />
            <img
              src="https://vasquezciro-ep3.000webhostapp.com/assets/js.png"
              alt="JavaScript"
            />
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
