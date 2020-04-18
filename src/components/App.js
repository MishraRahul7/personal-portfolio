import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Project from "../components/Project";
import Skill from "../components/Skill";
import "./Styles.css";
const App = (props) => {
  return (
    <React.Fragment>
      <About />
      <Skill />
      <Project />
      <Education />
      <Contact />
    </React.Fragment>
  );
};

export default App;
