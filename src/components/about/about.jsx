import React from "react";
import "./about.css";
import { useDarkModeContext } from "../hooks/DarkModeContext";
import DogModel from "../hooks/DogModel";
const about = () => {
  const { isLightMode } = useDarkModeContext();
  return (
    <section id="about" className="w-full flex justify-center mb-36 ">
      <div className="main-about flex w-full justify-center items-center flex-col">
        <DogModel />
        <div
          className={`info-container w-4/12  p-5 rounded-xl mt-7 ${isLightMode ? "bg-black bg-opacity-10" : "bg-white bg-opacity-10"
            }`}
        >
          <div className="name-container mb-3">
            <h1
              className={`name text-2xl font-bold ${isLightMode ? "text-black" : "text-white"
                }`}
            >
              Ciro Antony Vasquez Mendez
            </h1>
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
