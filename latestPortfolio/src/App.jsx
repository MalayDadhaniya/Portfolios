import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Iconlink from "./component/Iconlink";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";
import Skill from "./pages/Skill";
import Project from "./pages/Project";

const App = () => {
  return (
    <div className="mainDiv">
      <Navbar />
      <Home />
      <About />
      <Experience />
      {/* <Iconlink /> */}
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
