import React from "react";
import "./about.css";
import { useDarkModeContext } from "../hooks/DarkModeContext";
import DogModel from "../hooks/DogModel";
const about = () => {
  const { isLightMode } = useDarkModeContext();
  return (
    <section id="main-about" className="w-full flex justify-center mb-36 ">
      <div className="main-about flex w-full justify-center items-center flex-col">
        <DogModel />
        <div
          className={`info-container w-4/12  p-5 rounded-xl mt-7 ${isLightMode ? "bg-black bg-opacity-10" : "bg-white bg-opacity-10"
            }`}
        >
          <div className="name-container mb-3">
            <div className="main-data flex justify-between items-center">
              <h1
                className={`name text-2xl font-bold ${isLightMode ? "text-black" : "text-white"
                  }`}
              >
                Ciro Antony Vasquez Mendez
              </h1>
              <a
                href="/CV/CV-Ciro-Vasquez.pdf"
                download="CV-Ciro-Vasquez.pdf"
                className={`download-button p-4  rounded-xl duration-700 ${isLightMode
                    ? "bg-[#EDEBE6] text-black hover:bg-[#2c2c2c] hover:text-white"
                    : "bg-[#2c2c2c] text-white hover:bg-[#EDEBE6] hover:text-black"
                  }`}
              >
                CV Download
              </a>
            </div>
            <span
              className={`tag text-sm ${isLightMode ? "text-black" : "text-white"
                }`}
            >
              (Front-end Web Developer)
            </span>
          </div>
          <h2
            className={`about font-medium ${isLightMode ? "text-black" : "text-white"
              }`}
          >
            About me
          </h2>
          <p
            className={`description w-2/1 ${isLightMode ? "text-black" : "text-white"
              }`}
          >
            Junior front-end web developer, dedicated to my profession and with
            experience in projects that I have created myself and developed
            during my time as a student. When I'm not online, I dedicate myself
            to exercising or reading.
          </p>
        </div>
      </div>
    </section>
  );
};

export default about;
