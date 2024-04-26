import React from "react";
import CoreCard from "../../cards/home/CoreCard";
import { coreData } from "../../navigation/Navigation";
import { motion } from "framer-motion";

function CoreValues() {
  return (
    <>
      <div className="mt-16 md:mt-24">
        <p className="text-2xl px-6 md:px-8 lg:px-0 text-left lg:text-center md:text-4xl font-montserrat font-bold">
          Our Core Values
        </p>
        <div className="w-full md:w-[95%] lg:w-[90%] xl:w-[80%] 2xl:w-[74%] m-auto mt-2 md:mt-5 px-6 md:px-4 lg:px-6 font-Open_Sans text-xl md:text-2xl text-left lg:text-center">
          We live, work, and share by the following guiding principles like
          business and life rules to ensure we are on the path to be the best we
          can be. We seek to be as helpful and benevolent as possible: every day
          and in every way.
        </div>
        <div className="flex flex-col md:flex-row md:gap-[3.5%] gap-8 mt-8 px-6 md:px-8">
          {coreData &&
            coreData?.map((item, i) => (
              <div key={i} className="w-full md:w-[31%] rounded-lg">
                <motion.div
                  initial={{ opacity: 0, y: 120 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.3 }}
                  viewport={{ once: true }}
                >
                  <CoreCard item={item} />
                </motion.div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default CoreValues;
