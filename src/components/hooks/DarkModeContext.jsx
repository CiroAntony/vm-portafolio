import React, { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("isLightMode");
    if (savedMode !== null) {
      setIsLightMode(savedMode === "true");
    }
  }, []);

  const toggleLightMode = () => {
    setIsLightMode((prevMode) => !prevMode);

    localStorage.setItem("isLightMode", (!isLightMode).toString());
  };

  return (
    <DarkModeContext.Provider value={{ isLightMode, toggleLightMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeContext = () => {
  return useContext(DarkModeContext);
};
