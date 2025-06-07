import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled || mobileMenuOpen ? "bg-white dark:bg-gray-700 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-5 md:px-7 lg:px-8 py-4 md:py-7 lg:py-5">
        <span className="text-3xl sm:text-3xl md:text-4xl lg:text-2xl font-extrabold text-orange-400 transition-all duration-300">
          HEMANSHU.
        </span>

        <div className="hidden lg:flex items-center space-x-6">
          {[
            "Home",
            "About Me",
            "Experience",
            "Services",
            "Projects",
            "Contact Me",
          ].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="link-active"
              className="text-gray-900 dark:text-white hover:text-orange-400 dark:hover:text-orange-400 cursor-pointer transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
         
          <div className="flex space-x-5 text-xl">
            <a
              href="https://github.com/Hemcoding"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={25}
                className="text-orange-400 transition duration-300 ease-in-out hover:scale-150"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/hemanshu-parmar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={25}
                className="text-orange-400 transition duration-300 ease-in-out hover:scale-150"
              />
            </a>
            <a href="mailto:hemanshup2002@gmail.com">
              <FaEnvelope
                size={25}
                className="text-orange-400 transition duration-300 ease-in-out hover:scale-150"
              />
            </a>
          </div>
        </div>

        <div className="lg:hidden">
          {mobileMenuOpen ? (
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={40} className="text-orange-400" />
            </button>
          ) : (
            <button onClick={() => setMobileMenuOpen(true)}>
              <Menu size={40} className="text-orange-400" />
            </button>
          )}
        </div>
      </div>

      <div
        className={`fixed inset-0 z-1 bg-transparent backdrop-blur-lg bg-opacity-30 transition-opacity duration-1000 ease-in-out ${
          mobileMenuOpen ? "block" : "hidden"
        } lg:hidden`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 -right-1 h-full w-3/4 sm:w-3/4 rounded-l-2xl bg-white dark:bg-gray-700 shadow-2xl z-50 transform transition-transform duration-1000 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-between items-center p-6">
          <span className="text-3xl font-extrabold text-orange-400">
            HEMANSHU.
          </span>
          <button onClick={() => setMobileMenuOpen(false)}>
            <X size={40} className="text-gray-800 dark:text-white" />
          </button>
        </div>

        <div className="flex flex-col items-center space-y-8 mt-6">
          {[
            { id: "home", label: "Home" },
            { id: "aboutme", label: "About Me" },
            { id: "experience", label: "Experience" },
            { id: "services", label: "Services" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact Me" },
          ].map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              offset={-75}
              spy={true}
              activeClass="link-active"
              className="text-gray-900 dark:text-white hover:text-orange-500 text-xl md:text-2xl font-medium cursor-pointer transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex space-x-5 text-xl">
            <a
              href="https://github.com/Hemcoding"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={25}
                className="text-orange-400 transition duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/hemanshu-parmar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={25}
                className="text-orange-400 transition duration-300"
              />
            </a>
            <a href="mailto:hemanshup2002@gmail.com">
              <FaEnvelope
                size={25}
                className="text-orange-400 transition duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
