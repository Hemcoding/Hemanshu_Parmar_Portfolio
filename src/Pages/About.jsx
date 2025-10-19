import React from "react";
import { Button } from "../Components/ui/button";
import {
  FaLaptopCode,
  FaCoffee,
  FaMusic,
  FaRunning,
  FaPaintBrush,
  FaBook,
  FaHeartbeat,
} from "react-icons/fa";
import { PiCookingPotFill } from "react-icons/pi";
import Certificates from "./Certificates";
import { Link } from "react-scroll";
import Passport_photograph from "../assets/Passport_Photograph.png";
import HTML from "../assets/html.png";
import CSS from "../assets/CSS.png";
import JavaScript from "../assets/js_logo.png";
import ReactJS from "../assets/react.svg";
import Redux from "../assets/redux.png";
import NodeJS from "../assets/nodeJs_logo.png";
import MongoDB from "../assets/mongodb.png";
import ExpressJS from "../assets/express-js.png";
import TailwindCSS from "../assets/tailwind.png";
import Python from "../assets/python.png";
import Git from "../assets/git.png";
import Figma from "../assets/figma.png";
import { motion } from "motion/react";

const About = () => {
  const hobbies = [
    { icon: <FaLaptopCode />, label: "Developing" },
    { icon: <FaCoffee />, label: "Coffee" },
    { icon: <FaMusic />, label: "Music" },
    { icon: <PiCookingPotFill />, label: "Cooking" },
    { icon: <FaRunning />, label: "Sports" },
    { icon: <FaPaintBrush />, label: "Painting" },
    { icon: <FaBook />, label: "Reading" },
    { icon: <FaHeartbeat />, label: "Other Activity" },
  ];

  const techStack = [
    { name: "HTML", logo: HTML },
    { name: "CSS", logo: CSS },
    { name: "JavaScript", logo: JavaScript },
    { name: "ReactJS", logo: ReactJS },
    { name: "Redux", logo: Redux },
    { name: "NodeJS", logo: NodeJS },
    { name: "MongoDB", logo: MongoDB },
    { name: "ExpressJS", logo: ExpressJS },
    { name: "Tailwind CSS", logo: TailwindCSS },
    { name: "Python", logo: Python },
    { name: "Git", logo: Git },
    { name: "Figma", logo: Figma },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: (i) => ({
      opacity: 0,
      x: i % 2 === 0 ? -80 : 80, // alternate left-right entry
      rotate: i % 2 === 0 ? -5 : 5,
      scale: 0.9,
    }),
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="aboutme"
      className="w-full bg-white dark:bg-gray-700 scroll-pt-100 py-20"
    >
      <div className="flex justify-center w-full mb-20">
        <div className="flex flex-wrap lg:flex-nowrap justify-between w-full sm:w-3/4 px-4">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ amount: 0.2 }}
            className="flex justify-center lg:justify-start w-full lg:w-1/2 pb-20 lg:pb-0"
          >
            <div className="border-2 border-gary-900 dark:border-white rounded-full">
              <div className="flex items-end w-75 h-100 lg:w-90 lg:h-120 rounded-full shadow-2xl hover:shadow-2xs bg-orange-400 mt-3 ml-3">
                <img
                  className="w-80 h-90 lg:w-90 lg:h-110 rounded-b-full"
                  src={Passport_photograph}
                  alt="Hemanshu Parmar"
                  srcSet=""
                />
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center w-full lg:w-1/2 space-y-5 px-4">
            <motion.h2
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ amount: 0.2 }}
              className="font-bold text-2xl sm:text-3xl"
            >
              I'm Passionate Full Stack Web Developer
            </motion.h2>
            <div className="text-gray-500 dark:text-white text-justify space-y-3">
              <motion.p
                initial={{ opacity: 0, x: 140 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ amount: 0.2 }}
              >
                Hi, I’m Hemanshu — a passionate web developer with hands-on
                experience in building responsive and user-friendly websites. I
                specialize in frontend development using React.js, and I also
                have a solid foundation in backend technologies like Node.js and
                MongoDB.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 160 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ amount: 0.2 }}
              >
                I enjoy turning complex problems into simple, efficient
                solutions and love learning new tools to improve my craft.
                Whether it’s creating sleek interfaces or working behind the
                scenes, I’m always focused on delivering clean, functional, and
                reliable web applications.
              </motion.p>
            </div>
            <Link to="Projects" smooth={true} duration={500} offset={-80}>
              <motion.div
                initial={{ opacity: 0, x: 180 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ amount: 0.2 }}
              >
                <Button className="bg-orange-100 w-32 text-orange-400 shadow-lg hover:bg-orange-400 hover:shadow-sm hover:text-white">
                  See Work
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      <motion.div
        className="flex flex-col items-center mx-auto px-4 max-w-7xl mb-20"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
      >
        <motion.h2
          className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          My Tech Stack
        </motion.h2>

        <motion.p
          className="text-gray-500 dark:text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Technologies I've been working with recently
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8 w-full">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05, // stagger effect
              }}
            >
              <motion.img
                src={tech.logo}
                alt={tech.name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
              <span className="text-gray-700 dark:text-white font-medium">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className="pb-16 bg-white dark:bg-gray-700 px-4 lg:px-0 sm:pb-0"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <div className="text-center mb-10">
          <motion.h2
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 dark:text-white"
          >
            Hobbies & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto"
          >
            A blend of passions and proficiencies that fuel my creativity and
            growth.
          </motion.p>
        </div>

        <motion.div className="max-w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {hobbies.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-white hover:shadow-md transition-all duration-300 group cursor-pointer"
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: "spring", stiffness: 100, damping: 12 },
                },
              }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-orange-100 rounded-xl transform rotate-45 z-0 group-hover:bg-orange-400 transition-colors duration-300" />
                <div className="relative z-10 text-orange-500 text-xl flex items-center justify-center h-full group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              <span className="text-gray-900 dark:text-white font-medium group-hover:text-orange-500 dark:group-hover:text-orange-500 transition-colors duration-300">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <Certificates />
    </section>
  );
};

export default About;
