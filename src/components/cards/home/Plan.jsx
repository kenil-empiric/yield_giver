import React, { memo } from "react";

const Plan = () => {
  const Data = [
    {
      Plan: "1",
      perc: "0.1 - 1",
      Day_per: "1.0%",
      days: "150",
      total: "150%",
      hold: "+0.02%",
    },
    {
      Plan: "2",
      perc: "0.1 - 1",
      Day_per: "1.0%",
      days: "150",
      total: "150%",
      hold: "+0.02%",
    },
    {
      Plan: "1",
      perc: "0.1 - 1",
      Day_per: "1.0%",
      days: "150",
      total: "150%",
      hold: "+0.02%",
    },
  ];
  return (
    <div className="py-10 p-5">
      <div className="w-full  p-4 text-center bg-white border border-gray-200 rounded-3xl shadow sm:p-8 dark:bg-transparent dark:border-gray-700">
        <div className="flex pb-8  flex-wrap ">
          <h1 className="text-3xl  md:text-5xl font-bold ">Plans :</h1>
        </div>
        <div className="grid grid-row-3 md:grid-cols-3  place-items-center  gap-4">
          {Data.map((el, i) => {
            return (
              <div className=" ring-slate-500 flex flex-col w-full max-w-sm bg-white border gap-3 border-gray-200 rounded-3xl  shadow-lg shadow-slate-400 sm:p-4 dark:bg-transparent dark:border-gray-700">
                <div className=" text-4xl md:text-5xl ">Plan {el.Plan}</div>
                <div className=" text-2xl md:text-3xl font-bold">
                  {el.perc}
                  <span className=" font-bold text-yellow-400"> BNB</span>
                </div>
                <div className="text-lg md:text-xl">{el.Day_per} per Day</div>
                <div className="text-lg md:text-xl">For {el.days} Days</div>
                <div className="text-lg md:text-xl">
                  Total Profit {el.total}
                </div>
                <div className="flex flex-row w-full ">
                  <div className="basis-1/2">Hold bonus:</div>
                  <div className="basis-1/2">{el.hold} per day</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(Plan);
