import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { toast } from "react-toastify";

const Home = () => {
  const handleDownload = async () => {
    const loadingToast = toast.loading("Downloading CV...", {
      position: "bottom-right",
    });

    try {
      const link = document.createElement("a");
      link.href = "/Hemanshu_Parmar_CV.pdf";
      link.download = "Hemanshu_Parmar_CV.pdf";
      link.click();

      toast.update(loadingToast, {
        render: "Download complete!",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
    } catch (error) {
      toast.update(loadingToast, {
        render: `Failed to download CV.\n${error.message}`,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <section
        id="home"
        className="flex justify-center flex-row w-full bg-linear-to-t top-0 from-orange-400 to-white dark:to-gray-700 pt-30 sm:pt-40"
      >
        <div className="flex justify-between items-center flex-wrap lg:flex-nowrap flex-row w-3/4">
          <div className="flex flex-col space-y-3 lg:w-1/2 pb-20 ">
            <p className="text-3xl font-bold">Hey I'm</p>
            <h1 className="text-4xl font-extrabold dark:text-orange-500 tracking-wide">
              <span className=" text-orange-400">
                <Typewriter
                  words={["Hemanshu", "Web Developer", "UI/UX Designer", "Freelancer"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="text-gray-500 dark:text-white text-justify">
              I specialize in turning thoughtful design and smart logic into
              clean, responsive, and fully functional websites that deliver a
              great user experience from front to back.
            </p>
            <div className="flex space-x-5">

            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <button className="bg-orange-400 cursor-pointer px-6 py-2 shadow-lg rounded-md text-white font-semibold hover:bg-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/30 hover:scale-105 active:scale-95">
                Hire Me
              </button>
            </Link>
            <button
              onClick={handleDownload}
              className="bg-orange-400 cursor-pointer px-6 py-2 shadow-lg rounded-md text-white font-semibold hover:bg-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/30 hover:scale-105 active:scale-100"
            >
              Download CV
            </button>
            </div>
          </div>
          <div className="flex relative justify-center mx-auto">
            
            <img
              className="absolute transition -translate-x-35 translate-y-0 sm:-translate-x-60 sm:translate-y-10 w-15 sm:w-20 animate-bounce"
              src="src\assets\react.svg"
              alt="React"
              srcSet=""
            />
            <img
              className="absolute transition translate-x-35 translate-y-40 sm:translate-x-60 sm:translate-y-50 w-15 sm:w-20 animate-bounce"
              src="src\assets\js_logo.png"
              alt="JavaScript"
              srcSet=""
            />
            <img
              className="absolute transition translate-x-30 -translate-y-10 sm:translate-x-50 sm:-translate-y-10 w-15 sm:w-20 animate-bounce"
              src="src\assets\nodeJs_logo.png"
              alt="NodeJS"
              srcSet=""
            />
            <img
              className="z-1 w-70 h-90 sm:w-120 sm:h-140 lg:w-100 lg:h-120"
              src="src\assets\Hemanshu_Parmar_emoji.png"
              alt="Hemanshu Parmar"
              srcSet=""
            />
            <div className="absolute flex items-end justify-center w-80 h-45 md:w-130 md:h-70 sm:w-150 sm:h-80 bottom-0 rounded-t-full bg-orange-400"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
