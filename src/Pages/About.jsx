import React from "react";
import { Button } from "@/components/ui/button";
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
    { name: "HTML", logo: "src/assets/html.png" },
    { name: "CSS", logo: "src/assets/CSS.png" },
    { name: "JavaScript", logo: "src/assets/js_logo.png" },
    { name: "ReactJS", logo: "src/assets/react.svg" },
    { name: "Redux", logo: "src/assets/redux.png" },
    { name: "NodeJS", logo: "src/assets/nodeJs_logo.png" },
    { name: "MongoDB", logo: "src/assets/mongodb.png" },
    { name: "ExpressJS", logo: "src/assets/express-js.png" },
    { name: "Tailwind CSS", logo: "src/assets/tailwind.png" },
    { name: "Python", logo: "src/assets/python.png" },
    { name: "Git", logo: "src/assets/git.png" },
    { name: "Figma", logo: "src/assets/figma.png" },
  ];

  return (
    <section
      id="aboutme"
      className="w-full bg-white dark:bg-gray-700 scroll-pt-100 py-20"
    >
      <div className="flex justify-center w-full mb-20">
        <div className="flex flex-wrap lg:flex-nowrap justify-between w-full sm:w-3/4 px-4">
          <div className="flex justify-center lg:justify-start w-full lg:w-1/2 pb-20 lg:pb-0">
            <div className="border-2 border-gary-900 dark:border-white rounded-full">
              <div className="flex items-end w-75 h-100 lg:w-90 lg:h-120 rounded-full shadow-2xl hover:shadow-2xs bg-orange-400 mt-3 ml-3">
                <img
                  className="w-80 h-90 lg:w-90 lg:h-110 rounded-b-full"
                  src="src/assets/Passport_Photograph.png"
                  alt="Hemanshu Parmar"
                  srcSet=""
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center w-full lg:w-1/2 space-y-5 px-4">
            <h2 className="font-bold text-2xl sm:text-3xl">
              I'm Passionate Web Developer
            </h2>
            <div className="text-gray-500 dark:text-white text-justify space-y-3">
              <p>
                Hi, I’m Hemanshu — a passionate web developer with hands-on
                experience in building responsive and user-friendly websites. I
                specialize in frontend development using React.js, and I also
                have a solid foundation in backend technologies like Node.js and
                MongoDB.
              </p>
              <p>
                I enjoy turning complex problems into simple, efficient
                solutions and love learning new tools to improve my craft.
                Whether it’s creating sleek interfaces or working behind the
                scenes, I’m always focused on delivering clean, functional, and
                reliable web applications.
              </p>
            </div>
            <Link to="Projects" smooth={true} duration={500} offset={-80}>
              <Button className="bg-orange-100 w-32 text-orange-400 shadow-lg hover:bg-orange-400 hover:shadow-sm hover:text-white">
                See Work
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mx-auto px-4 max-w-7xl mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          My Tech Stack
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Technologies I've been working with recently
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8 w-full">
          {techStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain transition ease-in-out duration-300 hover:scale-110"
              />
              <span className="text-gray-700 dark:text-white font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <section className="pb-16 bg-white dark:bg-gray-700 px-4 lg:px-0 sm:pb-0">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Hobbies & Expertise
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
             A blend of passions and proficiencies that fuel my creativity and growth.
          </p>
        </div>

        <div className="max-w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {hobbies.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-white hover:shadow-md transition-all duration-300 group cursor-pointer"
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
            </div>
          ))}
        </div>
      </section>
      <Certificates />
    </section>
  );
};

export default About;
