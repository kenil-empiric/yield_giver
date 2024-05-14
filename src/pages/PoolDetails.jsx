import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PoolDetailCard from "../components/cards/pool/PoolDetailCard";
import { motion } from "framer-motion";
import Card1 from "../components/cards/pool/Card1";
import Card2 from "../components/cards/pool/Card2";
import CardComponent from "../utils/CardDetails";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setPlanRate } from "../Redux/Reducer/planRateSlice";

function PoolDetails() {
  const { id } = useParams();
  const [planOneMultiplier, setPlanOneMultiplier] = useState(null);
  const [planTwoMultiplier, setPlanTwoMultiplier] = useState(null);
  const [planThreeMultiplier, setPlanThreeMultiplier] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const card = CardComponent();
  const { REACT_APP_API_BASE_URL } = process.env;

  useEffect(() => {
    const fetchPlanOneMultiplier = async () => {
      try {
        const apiUrlOneMul = `${REACT_APP_API_BASE_URL}/planOneMultiplier`;
        const apiUrlTwoMul = `${REACT_APP_API_BASE_URL}/planTwoMultiplier`;
        const apiUrlThreeMul = `${REACT_APP_API_BASE_URL}/planThreeMultiplier`;

        // Rate
        const response_one = await axios.get(apiUrlOneMul);
        const response_Two = await axios.get(apiUrlTwoMul);
        const response_Three = await axios.get(apiUrlThreeMul);

        const planOneMulNumber = response_one.data.planOneMul;
        const planTwoMulNumber = response_Two.data.planTwoMul;
        const planThreeMulNumber = response_Three.data.planThreeMul;

        setPlanOneMultiplier(planOneMulNumber);
        setPlanTwoMultiplier(planTwoMulNumber);
        setPlanThreeMultiplier(planThreeMulNumber);
        dispatch(
          setPlanRate({
            planOneMulNumber,
            planTwoMulNumber,
            planThreeMulNumber,
          })
        );
      } catch (error) {
        console.error("Error fetching planOneMultiplier:", error);
      }
    };

    fetchPlanOneMultiplier();
  }, [REACT_APP_API_BASE_URL]);

  console.log("id..", id);

  return (
    <>
      <div className="container mx-auto flex flex-col lg:flex-row py-8 md:py-16 lg:py-20 2xl:my-20 justify-around">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full p-4"
        >
          <Card1 id={id} loading={loading} setLoading={setLoading} />
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
            loading={loading}
          />
        </motion.div>
      </div>
      <div className="container flex flex-col gap-4 sm:gap-5 mx-auto px-5 sm:px-6 md:px-8">
        <p className="text-center text-2xl sm:text-4xl lg:text-5xl xl:text-5xl font-montserrat font-bold">
          Pool #{id}: {card[id - 1]?.title}
        </p>
        <div className="flex flex-col gap-4 sm:gap-5 rounded-2xl border whitespace-no-wrap border-gray-300 dark:border-gray-700 p-5 sm:p-6 md:p-10 mt-5">
          <p className="text-base sm:text-xl lg:text-xl mt-2 font-medium font-Open_Sans">
            {card[id - 1]?.title_wlc}
          </p>
          <p className="text-base sm:text-xl lg:text-xl font-medium font-Open_Sans">
            {card[id - 1]?.desc1}
          </p>
          <p className="text-base sm:text-xl lg:text-xl font-medium font-Open_Sans">
            {card[id - 1]?.desc2}
          </p>
          <p className="text-base sm:text-xl lg:text-xl font-medium font-Open_Sans">
            {card[id - 1]?.desc3}
          </p>
          <p className="text-base sm:text-xl lg:text-xl font-medium font-Open_Sans">
            <span className="font-montserrat font-bold">
              {" "}
              {card[id - 1]?.t1}{" "}
            </span>
            {card[id - 1]?.avoidance}
          </p>
          <p className="text-base sm:text-xl lg:text-xl font-medium font-Open_Sans">
            {" "}
            <span className="font-montserrat font-bold">
              {card[id - 1]?.t2}{" "}
            </span>
            {card[id - 1]?.gharar}
          </p>
          <p className="text-base sm:text-xl lg:text-xl font-medium font-Open_Sans">
            {" "}
            <span className="font-montserrat font-bold">
              {card[id - 1]?.t3}{" "}
            </span>
            {card[id - 1]?.halal}
          </p>
          <p className="text-base sm:text-xl lg:text-xl font-medium font-Open_Sans">
            <span className="font-montserrat font-bold">
              {card[id - 1]?.t4}{" "}
            </span>
            {card[id - 1]?.transparency}
          </p>
          <p className="text-base sm:text-xl lg:text-xl font-medium font-Open_Sans">
            <span className="font-montserrat font-bold">
              {card[id - 1]?.t5}{" "}
            </span>
            {card[id - 1]?.profit}
          </p>
          <p className="text-base sm:text-xl lg:text-xl font-medium font-Open_Sans">
            {card[id - 1]?.extra_portion && card[id - 1]?.extra_portion}
          </p>
          <p className="text-base sm:text-xl lg:text-xl font-medium font-Open_Sans">
            {card[id - 1]?.last_portion}
          </p>
          <p className="text-base sm:text-xl lg:text-xl font-medium font-Open_Sans">
            {card[id - 1]?.last_title}
          </p>
        </div>
      </div>
      <div className="m-auto container lg:container-full px-5 md:px-20 lg:px-5 2xl:px-20 my-20">
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
