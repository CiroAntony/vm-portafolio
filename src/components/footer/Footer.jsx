import React from "react";
import { useDarkModeContext } from "../hooks/DarkModeContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isLightMode } = useDarkModeContext();

  return (
    <div id="main-footer">
      <h2
        className={`text-center p-4 duration-700 ${
          isLightMode ? "text-black" : "text-white"
        }`}
      >
        ©{currentYear} Ciro Vasquez. All Rights Reserved.
      </h2>
    </div>
  );
};

export default Footer;
