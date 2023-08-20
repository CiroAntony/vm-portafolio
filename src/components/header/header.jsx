import React from "react";
import "./header.css";
import { FaRegSun, FaRegMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import { useDarkModeContext } from "../hooks/DarkModeContext";

const Header = () => {
  const { isLightMode, toggleLightMode } = useDarkModeContext();

  const titulo = "</ Vasquez>";

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="main-header w-full flex justify-center">
      <nav
        className={`nav-container fixed z-50 flex justify-between items-center h-16 backdrop-blur-xl rounded-xl w-6/12 px-8 
        ${isLightMode
            ? "bg-white bg-opacity-25 text-black"
            : "backdrop-blur-xl text-white"
          }`}
      >
        <h1
          className={`logo font-bold text-[16px] ${isLightMode ? "text-black" : "text-white"
            }`}
        >
          <a href="/" className="logo-link">
            {titulo}
          </a>
        </h1>
        <div className="list-options flex list-none gap-6">
          <li className="list">
            <a
              href="#"
              onClick={(e) => handleSmoothScroll(e, "main-projects")}
              className={`link ${isLightMode ? "text-black" : "text-white"}`}
            >
              Projects
            </a>
          </li>
          <li className="list">
            <a
              href="#"
              onClick={(e) => handleSmoothScroll(e, "skills")}
              className={`link ${isLightMode ? "text-black" : "text-white"}`}
            >
              Skills
            </a>
          </li>
        </div>
        <div className="social-icons flex gap-2">
          {isLightMode ? (
            <FaRegMoon
              onClick={toggleLightMode}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaRegSun
              onClick={toggleLightMode}
              className="text-2xl cursor-pointer"
            />
          )}
          <a href="https://github.com/CiroAntony">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/antonyv19/">
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
