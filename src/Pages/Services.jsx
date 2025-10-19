import React from "react";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaLaptopCode, FaMobile, FaServer } from "react-icons/fa";
import {motion} from "motion/react"

const Services = () => {
  const cardData = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      description:
        "Building responsive user interfaces using React.js and Tailwind CSS.",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Creating scalable APIs with Node.js and Express.",
    },
    {
      icon: <FaMobile />,
      title: "App Development",
      description: "Writing efficient algorithms and optimizing performance.",
    },
    {
      icon: <BsGrid1X2Fill />,
      title: "UI/UX Design",
      description: "Designing intuitive and user-friendly interfaces.",
    },
  ];

  return (
    // <>
    //   <div id="services" className="flex bg-white dark:bg-gray-700 max-w-screen justify-center py-20 lg:py-20">
    //     <div className="flex flex-col items-center space-y-10 lg:space-y-20 max-w-3/4">
    //       <div className="flex flex-col items-center lg:space-y-10">
    //         <p className="text-3xl font-bold  text-gray-900 dark:text-white mb-2">
    //           What do I offer?
    //         </p>
    //         <p className="text-center text-gray-500 dark:text-gray-400 sm:w-3/4 lg:w-3/5">
    //           From UI design to app launch — complete digital solutions in one place.
    //         </p>
    //       </div>

    //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    //         {cardData.map((card, index) => (
    //           <div
    //             key={index}
    //             className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-gray-500 hover:shadow-xl transition-all duration-300 hover:scale-105 dark:hover:border-0 hover:border-2 hover:border-orange-200"
    //           >
    //             <div className="text-4xl mb-4 text-orange-400">{card.icon}</div>
    //             <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 hover:text-orange-400">
    //               {card.title}
    //             </h3>
    //             <p className="text-gray-600 dark:text-gray-400 text-sm">{card.description}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <section
        id="services"
        className="flex bg-white dark:bg-gray-700 max-w-screen justify-center py-20 lg:py-20"
      >
        <div className="flex flex-col items-center space-y-10 lg:space-y-20 max-w-3/4">
          {/* Heading Animation */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center lg:space-y-10"
          >
            <motion.p
              className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              What do I offer?
            </motion.p>

            <motion.p
              className="text-center text-gray-500 dark:text-gray-400 sm:w-3/4 lg:w-3/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              From UI design to app launch — complete digital solutions in one
              place.
            </motion.p>
          </motion.div>

          {/* Cards with Animation */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 25px rgba(255, 165, 0, 0.25)",
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-gray-500 hover:shadow-xl transition-all duration-300 hover:border-2 hover:border-orange-200"
              >
                <motion.div
                  className="text-4xl mb-4 text-orange-400"
                  whileInView={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {card.icon}
                </motion.div>

                <motion.h3
                  className="text-xl font-semibold text-gray-800 dark:text-white mb-2 hover:text-orange-400"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {card.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 dark:text-gray-400 text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {card.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default Services;
