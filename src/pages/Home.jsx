import React from "react";
import YieldMagnet from "../components/section/home/YieldMagnet";
import Heading from "../components/section/home/Heading";
import HowItWorks from "../components/section/home/HowItWorks";
import CoreValues from "../components/section/home/CoreValues";
import Innovate from "../components/section/home/Innovate";
import Stake from "../components/cards/home/Stake";
import { Stakedata } from "../components/navigation/Navigation";
import { motion } from "framer-motion";
import { RiStackLine } from "react-icons/ri";
import GIV from "../components/section/home/GIV";

function Home() {
  return (
    <>
      <div className="container mx-auto md:pt-5">
        <Heading />
        <YieldMagnet />
        <HowItWorks />
        <CoreValues />
        <div className="mt-20">
          <Innovate />
        </div>
        <div className="flex justify-center items-center px-5 md:px-0 mt-10 md:mt-28 flex-col text-center gap-2">
          <svg width="0" height="0">
            <linearGradient
              id="blue-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#FFD700" offset="0%" />
              <stop stopColor="#FFD700" offset="100%" />
            </linearGradient>
          </svg>

          <RiStackLine
            style={{ fill: "url(#blue-gradient)" }}
            className="text-8xl md:text-9xl"
          />
          <p className="text-2xl leading-7 md:text-4xl font-montserrat font-bold">
            Stake to Earn Extraordinary Yield
          </p>
        </div>
        <div className="w-full 2xl:container-full lg:px-6 2xl:px-0 flex flex-col px-6 md:px-8 md:flex-row md:gap-[2%] gap-5 pt-5 md:my-4">
          {Stakedata &&
            Stakedata?.map((item, i) => (
              <div key={i} className="w-[100%] rounded-lg">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 120 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.3 }}
                  viewport={{ once: true }}
                >
                  <Stake item={item} index={i} />
                </motion.div>
              </div>
            ))}
        </div>
        <div className="md:mt-16 lg:mt-20 xl:mt-4">
          <GIV />
        </div>
      </div>
    </>
  );
}

export default Home;
