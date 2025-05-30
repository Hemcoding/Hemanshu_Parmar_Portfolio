import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Services from "./Pages/Services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "./Pages/Contact";
import { Element } from "react-scroll";
import Frelance from "./Pages/Frelance";
import Footer from "./Components/Footer";
import Toggle from "./Components/Toggle";
import Projects from "./Pages/Projects";

const App = () => {
  return (
    <>
      <Toggle />
      <Header />
      <Element name="Home">
        <Home />
      </Element>
      <Element name="About Me">
        <About />
      </Element>
      <Frelance />
      <Element name="Experience">
        <Experience />
      </Element>
      <Element name="Services">
        <Services />
      </Element>
      <Element name="Projects">
        <Projects />
      </Element>
      <Element name="Contact Me">
        <Contact />
      </Element>
      <Footer />
    </>
  );
};

export default App;
