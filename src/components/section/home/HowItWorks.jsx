import React from "react";
import WorksCard from "../../cards/home/WorksCard";
import { cardData } from "../../navigation/Navigation";
import { motion } from "framer-motion";

function HowItWorks() {
  return (
    <>
      <div className="w-full mt-16 md:mt-20">
        <p className="text-2xl text-left px-6 md:px-8 lg:px-0 lg:text-center md:text-4xl font-gilroy font-bold">
          How Does This Work?
        </p>
        <div className="w-full text-left md:w-full px-6 md:px-8 lg:w-[95%] xl:w-[90%] 2xl:w-[80%] m-auto mt-4 lg:mt-5 xl:px-0 2xl:px-4 font-gilroy md:text-lg lg:text-center font-semibold md:leading-6">
          Yield Giver is a Generosity-first platform that helps charitable
          directors and humanitarian charities to multiply their donations
          though industry-leading investment techniques that are only available
          via Decentralized Finance. We help organisations to build Waqf
          endoment funds that drastically out-perform the market,while keeping
          the funds safe and helping true humanitarian causes to raise the funds
          required for thier ongoing expenses from dividens,profits,and bonuses.
          Intrinsically,this helps to reduce spending from the principle of
          donations and asking for more donations perpetually. We live to help
          upgrade the financial power behind the best projects of the
          world,built by and built for giving people,families and communites.
        </div>
        <div className="w-full lg:px-6 2xl:px-0 flex flex-col px-6 md:px-8 md:flex-row md:gap-[3.5%] gap-8 mt-8">
          {cardData &&
            cardData?.map((item, i) => (
              <div key={i} className="w-[100%] md:w-[31%] rounded-lg">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 120 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.3 }}
                  viewport={{ once: true }}
                >
                  <WorksCard item={item} index={i} />
                </motion.div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
