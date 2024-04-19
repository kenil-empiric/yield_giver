import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PoolDetailCard from "../components/cards/pool/PoolDetailCard";
import { motion } from "framer-motion";
import Card1 from "../components/cards/pool/Card1";
import Card2 from "../components/cards/pool/Card2";
import CardComponent from "../utils/CardDetails";

function PoolDetails() {
  const { id } = useParams();
  const [planOneMultiplier, setPlanOneMultiplier] = useState(null);
  const [planTwoMultiplier, setPlanTwoMultiplier] = useState(null);
  const [planThreeMultiplier, setPlanThreeMultiplier] = useState(null);
  const card = CardComponent();
  return (
    <>
      <div className="container flex flex-col gap-4 sm:gap-6 mx-auto pt-24 px-5 sm:px-8 md:px-12">
        <p className="text-center mt-5 text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-gilroy font-bold">
          Pool #{id}: {card[id - 1]?.title}
        </p>
        <p className="text-base sm:text-xl lg:text-2xl mt-2 font-medium font-gilroy">
          {card[id - 1]?.title_wlc}
        </p>
        <p className="text-base sm:text-xl lg:text-2xl font-medium font-gilroy">
          {card[id - 1]?.desc1}
        </p>
        <p className="text-base sm:text-xl lg:text-2xl font-medium font-gilroy">
          {card[id - 1]?.desc2}
        </p>
        <p className="text-base sm:text-xl lg:text-2xl font-medium font-gilroy">
          {card[id - 1]?.desc3}
        </p>
        <p className="text-base sm:text-xl lg:text-2xl font-medium font-gilroy">
          <span className="font-gilroy font-bold">{card[id - 1]?.t1} </span>
          {card[id - 1]?.avoidance}
        </p>
        <p className="text-base sm:text-xl lg:text-2xl font-medium font-gilroy">
          {" "}
          <span className="font-gilroy font-bold">{card[id - 1]?.t2} </span>
          {card[id - 1]?.gharar}
        </p>
        <p className="text-base sm:text-xl lg:text-2xl font-medium font-gilroy">
          {" "}
          <span className="font-gilroy font-bold">{card[id - 1]?.t3} </span>
          {card[id - 1]?.halal}
        </p>
        <p className="text-base sm:text-xl lg:text-2xl font-medium font-gilroy">
          <span className="font-gilroy font-bold">{card[id - 1]?.t4} </span>
          {card[id - 1]?.transparency}
        </p>
        <p className="text-base sm:text-xl lg:text-2xl font-medium font-gilroy">
          <span className="font-gilroy font-bold">{card[id - 1]?.t5} </span>
          {card[id - 1]?.profit}
        </p>
        <p className="text-base sm:text-xl lg:text-2xl font-medium font-gilroy">
          {card[id - 1]?.extra_portion && card[id - 1]?.extra_portion}
        </p>
        <p className="text-base sm:text-xl lg:text-2xl font-medium font-gilroy">
          {card[id - 1]?.last_portion}
        </p>
        <p className="text-base sm:text-xl lg:text-2xl font-medium font-gilroy">
          {card[id - 1]?.last_title}
        </p>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row py-8 md:py-16 lg:py-20 2xl:py-20 justify-around">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full p-4"
        >
          <Card1 />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 2 * 0.2 }}
          viewport={{ once: true }}
          className="w-full p-4"
        >
          <Card2
            Percentage={{
              planOneMultiplier,
              planTwoMultiplier,
              planThreeMultiplier,
            }}
          />
        </motion.div>
      </div>

      <div className="m-auto container lg:container-full px-5 md:px-20 lg:px-5 2xl:px-20 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <PoolDetailCard
            title={"Number of Investors"}
            title_value={5}
            num_title={"Creation Date"}
            num={"3rd April 2024"}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <PoolDetailCard
            title={"Total Return %"}
            title_value={"14.14%"}
            num_title={"Days Active"}
            num={37}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <PoolDetailCard
            title={"Average Daily Return"}
            title_value={"0.519%"}
            num_title={"Min Order Amount"}
            num={"$100"}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <PoolDetailCard
            title={"Assets Under Management"}
            title_value={"10/315 USD"}
            num_title={"Max Order Amount"}
            num={"$10,000"}
          />
        </motion.div>
      </div>
    </>
  );
}

export default PoolDetails;
