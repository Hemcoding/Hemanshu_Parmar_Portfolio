import React from "react";
import AeonX from "../assets/AeonX.jpg";
import { motion } from "motion/react";

const experiences = [
  {
    id: 1,
    company: "AeonX Digital Solution",
    role: "Web Developer",
    description:
      "Developed and maintained full-stack web applications using MongoDB, Express.js, React.js, and Node.js (MERN).Built responsive and dynamic user interfaces with React.js, Tailwind CSS, and JavaScript.Designed and implemented RESTful APIs using Node.js and Express.js for seamless data flow between frontend and backend.Integrated MongoDB for database management and optimized queries for better performance.Collaborated with cross-functional teams to enhance UI/UX, improve application scalability, and ensure clean, maintainable code.Utilized Git/GitHub for version control and followed agile workflows for efficient project delivery.",
    duration: "(Aug)2023 - (Jul)2024",
    icon: AeonX,
  },
];

const Experience = () => {
  return (
    // <>
    //   <div
    //     id="experience"
    //     className="bg-gray-100 dark:bg-gray-800 w-full justify-center flex pt-20 md:pt-10 lg:pt-0"
    //   >
    //     <div className="flex flex-col w-3/4 space-y-20 lg:space-y-10">
    //       <div className="flex flex-col items-center space-y-3 sm:my-10 lg:my-20">
    //         <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
    //           Work Experience
    //         </p>
    //         <p className="text-center text-gray-500 dark:text-gray-400 sm:w-3/4 lg:w-3/5">
    //           Gained real-world experience in full-stack development by building
    //           and deploying responsive, user-focused web applications.
    //         </p>
    //       </div>
    //       <div className="flex w-full">
    //         <div className="flex flex-col w-full">
    //           {experiences.map((exp, index) => {
    //             if (exp.id % 2 === 0) {
    //               return (
    //                 <div id={index} className="flex relative">
    //                   <div className="border-1 border-dashed border-gray-500 dark:border-white lg:hidden ">
    //                     <div className="lg:hidden absolute top-2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full">
    //                       <div className="relative w-5 h-5 rounded-full border-2 border-dashed border-gray-400 dark:border-white flex items-center justify-center">
    //                         <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="flex flex-wrap-reverse lg:flex-nowrap w-full sm:space-y-2 lg:space-y-5">
    //                     <div className="flex flex-col w-full lg:w-1/2 space-y-1 lg:items-end pb-15 px-10">
    //                       <p className="text-lg font-medium">{exp.role}</p>
    //                       <p className="text-gray-500 dark:text-gray-400 lg:text-end text-justify">
    //                         {exp.description}
    //                       </p>
    //                     </div>
    //                     <div className="relative flex flex-col w-full lg:w-1/2 lg:pb-15 sm:pb-2 px-10 space-y-1 before:hidden lg:before:block before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-gray-100 before:border-1 before:border-dashed">
    //                       <div className="hidden lg:block absolute top-2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full">
    //                         <div className="relative w-5 h-5 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center">
    //                           <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
    //                         </div>
    //                       </div>
    //                       <img
    //                         className="w-10 h-10 rounded-full"
    //                         src={exp.icon}
    //                         alt="Company"
    //                         srcSet=""
    //                       />
    //                       <p className="text-xl font-medium"> {exp.company} </p>
    //                       <p className="text-gray-500 dark:text-gray-400">
    //                         {exp.duration}
    //                       </p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               );
    //             } else {
    //               return (
    //                 <div key={index} className="flex relative">
    //                   <div className="border-1 border-dashed border-gray-500 dark:border-white lg:hidden ">
    //                     <div className="lg:hidden absolute top-2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full">
    //                       <div className="relative w-5 h-5 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center">
    //                         <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="flex flex-wrap lg:flex-nowrap w-full sm:space-y-2 lg:space-y-5">
    //                     <div className="flex flex-col w-full lg:w-1/2 lg:items-end space-y-1 lg:pb-15 px-10">
    //                       <img
    //                         className="w-10 h-10 rounded-full"
    //                         src={exp.icon}
    //                         alt="icon"
    //                         srcSet=""
    //                       />
    //                       <p className="text-xl font-medium"> {exp.company} </p>
    //                       <p className="text-gray-500 dark:text-gray-400">
    //                         {exp.duration}
    //                       </p>
    //                     </div>
    //                     <div className="relative flex flex-col space-y-1 w-full lg:w-1/2 pb-15 px-10 before:hidden lg:before:block before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-gray-100 before:border-1 before:border-dashed">
    //                       <div className="hidden lg:block absolute top-2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full">
    //                         <div className="relative w-5 h-5 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center">
    //                           <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
    //                         </div>
    //                       </div>
    //                       <p className="text-lg font-medium"> {exp.role} </p>
    //                       <p className="text-gray-500 dark:text-gray-400 text-justify">
    //                         {exp.description}
    //                       </p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               );
    //             }
    //           })}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
  <div
    id="experience"
    className="bg-gray-100 dark:bg-gray-800 w-full justify-center flex pt-20 md:pt-10 lg:pt-0"
  >
    <div className="flex flex-col w-3/4 space-y-20 lg:space-y-10">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        
        className="flex flex-col items-center space-y-3 sm:my-10 lg:my-20"
      >
        <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Work Experience
        </p>
        <p className="text-center text-gray-500 dark:text-gray-400 sm:w-3/4 lg:w-3/5">
          Gained real-world experience in full-stack development by building
          and deploying responsive, user-focused web applications.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="flex w-full">
        <div className="flex flex-col w-full">
          {experiences.map((exp, index) => {
            const isEven = exp.id % 2 === 0;
            const motionProps = {
              initial: { opacity: 0, y: 80, x: isEven ? 60 : -60 },
              whileInView: { opacity: 1, y: 0, x: 0 },
              transition: { duration: 0.8, delay: index * 0.1, ease: "easeOut" },
            };

            if (isEven) {
              return (
                <motion.div
                  key={index}
                  {...motionProps}
                  className="flex relative"
                >
                  <div className="border-1 border-dashed border-gray-500 dark:border-white lg:hidden ">
                    <div className="lg:hidden absolute top-2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full">
                      <div className="relative w-5 h-5 rounded-full border-2 border-dashed border-gray-400 dark:border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap-reverse lg:flex-nowrap w-full sm:space-y-2 lg:space-y-5">
                    <div className="flex flex-col w-full lg:w-1/2 space-y-1 lg:items-end pb-15 px-10">
                      <p className="text-lg font-medium">{exp.role}</p>
                      <p className="text-gray-500 dark:text-gray-400 lg:text-end text-justify">
                        {exp.description}
                      </p>
                    </div>
                    <div className="relative flex flex-col w-full lg:w-1/2 lg:pb-15 sm:pb-2 px-10 space-y-1 before:hidden lg:before:block before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-gray-100 before:border-1 before:border-dashed">
                      <div className="hidden lg:block absolute top-2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full">
                        <div className="relative w-5 h-5 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                      </div>
                      <img
                        className="w-10 h-10 rounded-full"
                        src={exp.icon}
                        alt="Company"
                      />
                      <p className="text-xl font-medium"> {exp.company} </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        {exp.duration}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            } else {
              return (
                <motion.div
                  key={index}
                  {...motionProps}
                  className="flex relative"
                >
                  <div className="border-1 border-dashed border-gray-500 dark:border-white lg:hidden ">
                    <div className="lg:hidden absolute top-2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full">
                      <div className="relative w-5 h-5 rounded-full border-2 border-dashed border-gray-400 dark:border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap lg:flex-nowrap w-full sm:space-y-2 lg:space-y-5">
                    <div className="flex flex-col w-full lg:w-1/2 lg:items-end space-y-1 lg:pb-15 px-10">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={exp.icon}
                        alt="icon"
                      />
                      <p className="text-xl font-medium"> {exp.company} </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        {exp.duration}
                      </p>
                    </div>
                    <div className="relative flex flex-col space-y-1 w-full lg:w-1/2 pb-15 px-10 before:hidden lg:before:block before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-gray-100 before:border-1 before:border-dashed">
                      <div className="hidden lg:block absolute top-2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full">
                        <div className="relative w-5 h-5 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-lg font-medium"> {exp.role} </p>
                      <p className="text-gray-500 dark:text-gray-400 text-justify">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            }
          })}
        </div>
      </div>
    </div>
  </div>
</>
  );
};

export default Experience;
