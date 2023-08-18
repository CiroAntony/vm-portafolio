import React from "react";
import "./App.css";
import Header from "./components/header/header.jsx";
import About from "./components/about/about.jsx";
import Projects from "./components/projects/Projects.jsx";
import Skills from "./components/skills/skills.jsx";
import { useDarkModeContext } from "./components/hooks/DarkModeContext";
import Footer from "./components/footer/Footer";

const App = () => {
  const { isLightMode } = useDarkModeContext();

  return (
    <div
      className={`main-app ${isLightMode ? "bg-[#edebe6]" : "bg-[#202023]"}`}
    >
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
