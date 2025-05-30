import React from "react";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaLaptopCode, FaMobile, FaServer } from "react-icons/fa";

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
    <>
      <div id="services" className="flex bg-white dark:bg-gray-700 max-w-screen justify-center py-20 lg:py-20">
        <div className="flex flex-col items-center space-y-10 lg:space-y-20 max-w-3/4">
          <div className="flex flex-col items-center lg:space-y-10">
            <p className="text-3xl font-bold  text-gray-900 dark:text-white mb-2">
              What do i offer?
            </p>
            <p className="text-center text-gray-500 dark:text-gray-400 sm:w-3/4 lg:w-3/5">
              From UI design to app launch — complete digital solutions in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-gray-500 hover:shadow-xl transition-all duration-300 hover:scale-105 dark:hover:border-0 hover:border-2 hover:border-orange-200"
              >
                <div className="text-4xl mb-4 text-orange-400">{card.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 hover:text-orange-400">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
