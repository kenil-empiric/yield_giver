import React, { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Plan = (props) => {
  const data = props.Percentage;
  const Days_data = props.Days;

  const Data = [
    {
      Plan: "1",
      perc: "0.1 - 1",
      Day_per: `${data.planOneMultiplier}%`,
      days: `${Days_data.PlanOneDays}`,
      total: "150%",
    },
    {
      Plan: "2",
      perc: "1 - 5",
      Day_per: `${data.planTwoMultiplier}%`,
      days: `${Days_data.PlanTwoDays}`,
      total: "150%",
    },
    {
      Plan: "3",
      perc: "5 - 10",
      Day_per: `${data.planThreeMultiplier}%`,
      days: `${Days_data.PlanThreeDays}`,
      total: "150%",
    },
  ];

  return (
    <div className="xl:pt-8 2xl:pt-10 px-5">
      <div className="w-full  p-4 text-center bg-white border border-gray-200 rounded-3xl shadow sm:p-8 dark:bg-transparent dark:border-gray-700">
        <div className="flex pb-8 flex-wrap ">
          <h1 className="text-3xl  md:text-5xl font-bold ">Plans :</h1>
        </div>
        <div className="grid grid-row-3 md:grid-cols-3  place-items-center  gap-4">
          {Data.map((el, i) => {
            return (
              <motion.div
                key={el.Plan}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="ring-slate-500 py-2 flex flex-col w-full max-w-sm bg-white border gap-3 border-gray-200 rounded-3xl  shadow-lg shadow-slate-400 md:p-4 dark:bg-transparent dark:border-gray-700"
              >
                <div className=" text-4xl md:text-5xl ">Plan {el.Plan}</div>
                <div className=" text-2xl md:text-3xl font-bold">
                  {el.perc}
                  <span className=" font-bold text-teal-400"> USDC</span>
                </div>
                <div className="text-lg md:text-xl">{el.Day_per} per Day</div>
                <div className="text-lg md:text-xl">For {el.days} Days</div>
                <div className="text-lg md:text-xl">
                  Total Profit {el.total}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(Plan);
