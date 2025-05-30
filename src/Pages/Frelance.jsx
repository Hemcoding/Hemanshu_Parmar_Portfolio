import React from "react";
import { Link } from "react-scroll";

const Frelance = () => {
  return (
    <section className="w-full bg-[#5c452a] text-white py-20 px-4 flex justify-center items-center ">
      <div className="max-w-4xl text-center flex flex-col items-center gap-6">
        <h2 className="text-2xl md:text-4xl font-bold">
          I Am Available For Freelancer Projects.
        </h2>
        <p className="text-sm md:text-base text-gray-300 dark:text-gray-400 max-w-2xl">
          I take up freelance projects to build websites and digital solutions.
          Bringing ideas to life with clean design and efficient development.
        </p>
        <Link to="contact" smooth={true} duration={500} offset={-80}>
          <button className="bg-orange-400 cursor-pointer px-6 py-2 shadow-lg rounded-md text-white font-semibold hover:bg-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/30 hover:scale-105 active:scale-95">
            Hire Me
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Frelance;
