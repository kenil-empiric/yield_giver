import React from "react";
import InnovateCards from "../../cards/home/InnovateCards";
import { InnovateData } from "../../navigation/Navigation";
import { motion } from "framer-motion";

function Innovate() {
  return (
    <>
      <div className="w-full lg:px-6 grid grid-cols-1 md:grid-cols-3 px-6 md:px-8 md:gap-[3.5%] gap-10">
        {InnovateData &&
          InnovateData?.map((item, i) => (
            <div key={i} className="w-full rounded-lg">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.3 }}
                viewport={{ once: true }}
              >
                <InnovateCards item={item} />
              </motion.div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Innovate;
