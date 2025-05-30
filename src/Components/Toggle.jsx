// ThemeSwitcher.jsx
import { useEffect, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { PiMoonStarsLight } from "react-icons/pi";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="fixed right-2 top-1/3 transform -translate-y-1/2 z-50">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="w-10 h-18 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-full flex flex-col items-center justify-between p-2 shadow-lg transition-colors duration-300"
      >
        <div
          className={`transition-transform duration-500 transform ${
            darkMode ? "translate-y-8" : "translate-y-0"
          }`}
        >
          {darkMode ? (
            <IoSunny  size={21} className="text-yellow-400" />
          ) : (
            <PiMoonStarsLight size={21} className="text-gray-700" />
          )}
        </div>
      </button>
    </div>
  );
}

export default Toggle;