import React, { useEffect, useState } from "react";
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
import { ArrowUpCircle } from "lucide-react";

const App = () => {

   const [showScrollUp, setShowScrollUp] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 200); // show after 200px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


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

      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-white dark:bg-gray-800 dark:hover:bg-gray-600 text-white rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          <ArrowUpCircle size={40} color="#ff8904" />
        </button>
      )}
    </>
  );
};

export default App;
