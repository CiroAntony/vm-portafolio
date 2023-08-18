import React from "react";
import "./header.css";
import { FaRegSun, FaRegMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import { useDarkModeContext } from "../hooks/DarkModeContext";

const Header = () => {
  const { isLightMode, toggleLightMode } = useDarkModeContext();

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
        ${
          isLightMode
            ? "backdrop-blur-xl text-black"
            : "backdrop-blur-xl text-white"
        }`}
      >
        <h1 className={`logo ${isLightMode ? "text-black" : "text-white"}`}>
          <a href="/" className="logo-link">
            Vasquez
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
          <li className="list">
            <a
              href="/contact"
              className={`link ${isLightMode ? "text-black" : "text-white"}`}
            >
              ContactMe
            </a>
          </li>
        </div>
        <div className="icons flex gap-3">
          {isLightMode ? (
            <FaRegMoon onClick={toggleLightMode} />
          ) : (
            <FaRegSun onClick={toggleLightMode} />
          )}
          <FaGithub />
          <FaLinkedin />
        </div>
      </nav>
    </header>
  );
};

export default Header;
