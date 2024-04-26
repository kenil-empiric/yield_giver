import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function PrimaryNav() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const storedMode = localStorage.getItem("mode");
  const [mode, setMode] = useState(storedMode === "dark");
  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);
  const handleMode = () => {
    const newMode = !mode;
    setMode(!mode);
    localStorage.setItem("mode", newMode ? "dark" : "light");
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full fixed top-0 left-0 z-50 ${
          hasScrolled
            ? "dark:bg-[#001450] bg-white shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="xl:container lg:w-[95%] mx-auto px-2 md:px-4 lg:px-0 py-3 lg:py-3">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex items-center gap-1">
              <Link to={"/"} className="cursor-pointer">
                <div>
                  <img
                    src={logo}
                    alt="logo.svg"
                    className="h-10 md:h-12 lg:h-12"
                  />
                </div>
              </Link>
              <Link to={"/"} className="cursor-pointer">
                <p
                  className="text-sm font-gilroy md:text-lg font-bold"
                  style={{
                    lineHeight: "22px",
                  }}
                >
                  YIELD <br /> GIVERS
                </p>
              </Link>
            </div>
            <div className="flex flex-row justify-between items-center gap-1 md:gap-4">
              <div onClick={handleMode} className="cursor-pointer mr-2">
                {mode ? (
                  <MdLightMode className="text-3xl md:text-4xl text-white" />
                ) : (
                  <MdDarkMode className="text-3xl md:text-4xl text-black" />
                )}
              </div>
              <div>
                <Link to={"/pool"}>
                  <button className="bg-[#FFD700] font-semibold hover:text-[#ffffff] hover:bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 font-gilroy px-3 py-2 rounded-xl text-[#000]">
                    Launch dApp
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrimaryNav;
