import React from "react";
import { Link } from "react-scroll";
import { motion } from "motion/react";

const Frelance = () => {
  return (
    <motion.section
      className="w-full bg-[#5c452a] text-white py-20 px-4 flex justify-center items-center"
    >
      <div className="max-w-4xl text-center flex flex-col items-center gap-6">
        <motion.h2
          className="text-2xl md:text-4xl font-bold"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I Am Available For Freelancer Projects.
        </motion.h2>
        <motion.p
          className="text-sm md:text-base text-gray-300 dark:text-gray-400 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I take up freelance projects to build websites and digital solutions.
          Bringing ideas to life with clean design and efficient development.
        </motion.p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="contact" smooth={true} duration={500} offset={-80}>
            <button className="bg-orange-400 cursor-pointer px-6 py-2 shadow-lg rounded-md text-white font-semibold hover:bg-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/30 hover:scale-105 active:scale-95">
              Hire Me
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Frelance;
