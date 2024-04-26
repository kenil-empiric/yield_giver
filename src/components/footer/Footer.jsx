import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FooterLink, SocialIcon } from "../navigation/Navigation";
import { motion } from "framer-motion";

function Footer() {
  return (
    <>
      <footer className="rounded-lg shadow mt-16 md:mt-10 lg:mt-14 xl:mt-16">
        <div className="w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 lg:p-4 md:py-8">
          <div className="sm:flex items-center justify-between ">
            <div className="flex flex-col items-center justify-center md:items-start gap-2 md:gap-0">
              <div className="flex items-center gap-2 md:gap-1">
                <Link to={"/"} className="cursor-pointer">
                  <div>
                    <img
                      src={logo}
                      alt="logo.svg"
                      className=" w-18 h-14 md:h-14 lg:h-14"
                    />
                  </div>
                </Link>
                <Link to={"/"} className="cursor-pointer">
                  <p
                    className="text-lg font-Open_Sans md:text-xl text-[#FFD700] font-bold"
                    style={{
                      lineHeight: "25px",
                    }}
                  >
                    YIELD <br /> GIVERS
                  </p>
                </Link>
              </div>
              <div className="mt-3 md:mt-5 mx-auto flex items-center md:items-start gap-2">
                {SocialIcon &&
                  SocialIcon?.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <button
                        key={i}
                        className="rounded-full text-[#FFD700] hover:bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 p-2 text-3xl"
                      >
                        {item.icon}
                      </button>
                    </motion.div>
                  ))}
              </div>
            </div>
            <ul className="flex flex-col flex-wrap items-center md:items-start text-sm font-normal my-4 ">
              {FooterLink &&
                FooterLink?.map((item, i) => (
                  <Link to="#" key={i}>
                    <li
                      className={`${
                        i === 0
                          ? "text-2xl md:text-4xl mb-2 font-Open_Sans font-bold"
                          : "text-lg md:text-xl my-1 md:my-1 font-Open_Sans text-[#FFD700] font-bold"
                      }`}
                    >
                      {item.title}
                    </li>
                  </Link>
                ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
