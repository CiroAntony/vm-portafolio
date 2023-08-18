import React from "react";
import "./skills.css";
import { useDarkModeContext } from "../hooks/DarkModeContext";
import html from "../../assets/html5.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.png";
import mysql from "../../assets/mysql.png";
import git from "../../assets/git.png";

const skills = () => {
  const { isLightMode } = useDarkModeContext();
  return (
    <section id="skills" className="mt-24">
      <h2
        className={`skills-title text-4xl font-bold text-center ${
          isLightMode ? "text-black" : "text-white"
        }`}
      >
        Skills
      </h2>
      <div
        className={`jskills-container flex flex-wrap items-center justify-center m-2 text-center ${
          isLightMode ? "text-black" : "text-white"
        }`}
      >
        <div className="icons hover:-translate-y-4 duration-700">
          <img src={html} alt="html" />
          <p className="lan-name">HTML:5</p>
        </div>
        <div className="icons hover:-translate-y-4 duration-700">
          <img src={css} alt="css" />
          <p className="lan-name">CSS</p>
        </div>
        <div className="icons hover:-translate-y-4 duration-700">
          <img src={js} alt="javascript" />
          <p className="lan-name">JS</p>
        </div>
        <div className="icons hover:-translate-y-4 duration-700">
          <img src={react} alt="React.js" />
          <p className="lan-name">ReactJS</p>
        </div>
        <div className="icons hover:-translate-y-4 duration-700">
          <img src={tailwind} alt="Tailwind" />
          <p className="lan-name">Tailwind</p>
        </div>
        <div className="icons hover:-translate-y-4 duration-700">
          <img src={mysql} alt="Mysql" />
          <p className="lan-name">My Sql</p>
        </div>
        <div className="icons hover:-translate-y-4 duration-700">
          <img src={git} alt="Git" />
          <p className="lan-name">Git</p>
        </div>
      </div>
    </section>
  );
};

export default skills;
