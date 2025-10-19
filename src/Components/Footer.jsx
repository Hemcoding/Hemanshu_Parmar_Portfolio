import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import {motion} from "motion/react"

const Footer = () => {
  return (
    // <footer className="bg-gray-900 text-gray-300 py-10 px-5">
    //   <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
    //     <div className="text-2xl font-bold text-orange-400">HEMANSHU.</div>

    //     <div className="text-center w-[50%] text-sm text-gray-500 dark:text-white">
    //       © {new Date().getFullYear()} Hemanshu. Design & Develop by Hemanshu.
    //       All rights reserved.
    //     </div>

    //     <div className="flex space-x-5 text-xl">
    //       <a
    //         href="https://github.com/Hemcoding"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaGithub
    //           size={25}
    //           className="text-orange-400 transition duration-300 ease-in-out hover:scale-150"
    //         />
    //       </a>
    //       <a
    //         href="https://www.linkedin.com/in/hemanshu-parmar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaLinkedin
    //           size={25}
    //           className="text-orange-400 transition duration-300 ease-in-out hover:scale-150"
    //         />
    //       </a>
    //       <a href="mailto:hemanshup2002@gmail.com">
    //         <FaEnvelope
    //           size={25}
    //           className="text-orange-400 transition duration-300 ease-in-out hover:scale-150"
    //         />
    //       </a>
    //     </div>
    //   </div>
    // </footer>
    <footer className="bg-gray-900 text-gray-300 py-10 px-5">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
  >
    {/* Logo */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="text-2xl font-bold text-orange-400"
    >
      HEMANSHU.
    </motion.div>

    {/* Center text */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-center w-[50%] text-sm text-gray-500 dark:text-white"
    >
      © {new Date().getFullYear()} Hemanshu. Design & Develop by Hemanshu.
      All rights reserved.
    </motion.div>

    {/* Social Icons */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex space-x-5 text-xl"
    >
      <a
        href="https://github.com/Hemcoding"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div
          whileHover={{ scale: 1.3, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaGithub
            size={25}
            className="text-orange-400 transition duration-300 ease-in-out"
          />
        </motion.div>
      </a>

      <a
        href="https://www.linkedin.com/in/hemanshu-parmar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div
          whileHover={{ scale: 1.3, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaLinkedin
            size={25}
            className="text-orange-400 transition duration-300 ease-in-out"
          />
        </motion.div>
      </a>

      <a href="mailto:hemanshup2002@gmail.com">
        <motion.div
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaEnvelope
            size={25}
            className="text-orange-400 transition duration-300 ease-in-out"
          />
        </motion.div>
      </a>
    </motion.div>
  </motion.div>
</footer>
  );
};

export default Footer;
