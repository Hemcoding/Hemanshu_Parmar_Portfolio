import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-2xl font-bold text-orange-400">HEMANSHU.</div>

        <div className="text-center w-[50%] text-sm text-gray-500 dark:text-white">
          © {new Date().getFullYear()} Hemanshu. Design & Develop by Hemanshu.
          All rights reserved.
        </div>

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
    </footer>
  );
};

export default Footer;
