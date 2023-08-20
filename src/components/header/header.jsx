import { React, useState } from "react";
import "./header.css";
import { FaRegSun, FaRegMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { useDarkModeContext } from "../hooks/DarkModeContext";

const Header = () => {
  const { isLightMode, toggleLightMode } = useDarkModeContext();
  const [showMenu, setShowMenu] = useState(false);

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

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="main-header w-full flex justify-center">
      <nav
        className={`nav-container fixed z-50 flex justify-between items-center h-16 backdrop-blur-xl rounded-xl w-6/12 px-8 
        ${isLightMode
            ? "bg-white bg-opacity-25 text-black"
            : "backdrop-blur-xl text-white"
          } max-lg:w-10/12 max-sm:w-11/12`}
      >
        <h1
          className={`logo font-bold text-[16px] ${isLightMode ? "text-black" : "text-white"
            }`}
        >
          <a href="/" className="logo-link">
            {titulo}
          </a>
        </h1>
        <div
          className={`list-options flex list-none gap-6 
    ${showMenu ? "max-sm:block" : "max-sm:hidden"
            } max-sm:absolute max-sm:top-[100%] max-sm:left-[77%]  max-sm:p-4 max-sm:rounded-xl max-sm:duration-700 ${isLightMode ? "max-sm:bg-[#eae2ce]" : "max-sm:bg-[#878585]"
            }`}
        >
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
        <div className="social-icons flex gap-2 max-sm:gap-6">
          <div className="redes flex gap-2">
            <a href="https://github.com/CiroAntony">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/antonyv19/">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
          <div className="clicks-container flex gap-1">
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
            <BiMenuAltRight
              onClick={handleMenu}
              className="hidden max-sm:block text-2xl cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
