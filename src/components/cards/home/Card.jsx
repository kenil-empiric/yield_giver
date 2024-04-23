import React, { memo } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import LineCharts from "../../charts/LineCharts";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPlanData } from "../../../Redux/Reducer/planSlice";
import { Toast } from "../../../utils/toast";

function Card({ el }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { plan_Number } = useSelector((state) => state.planData);
  const { Address } = useSelector((state) => state?.walletDetails);
  const { KYC } = useSelector((state) => state.isKYCDetail);

  const handleNavigate = (id) => {
    return navigate(`/pool/${id}`);
  };

  const handlePlan = (id, plan_name, daily_Pool_Yield) => {
    if (!id || !plan_name || !daily_Pool_Yield) {
      Toast.error("Invalid Plan_ID, current_Pool_Yield or Plan_Name.");
      return;
    }
    dispatch(setPlanData({ id, plan_name, daily_Pool_Yield }));
    Toast.success(`Pool ${id} Selected Successfully.`);
    return;
  };

  return (
    <>
      <div className="w-full p-4 max-w-lg border-2 border-blue-400 rounded-lg shadow sm:p-8 md:h-auto lg:h-[490px] xl:h-auto">
        <h5
          data-tooltip-id="my-tooltip"
          data-tooltip-content={el.title}
          className="mb-4 flex font-gilroy text-2xl md:text-2xl lg:text-2xl xl:text-xl 2xl:text-2xl items-center justify-center font-bold text-center"
        >
          Pool #{el.id}: {el.title}
          <span>
            <FaRegArrowAltCircleUp className="ml-1 xl:ml-3 text-1xl cursor-pointer text-teal-400 " />
          </span>
        </h5>

        {/* <div className="w-full flex items-baseline text-gray-900 dark:text-white border-red-500"> */}
        <LineCharts />
        {/* </div> */}
        <div className="grid grid-row-2  gap-2">
          <div className="grid grid-cols-2 gap-0 py-2 col-span-2 items-center">
            <div className="row-start-1 flex font-gilroy flex-col gap-0 items-start justify-center ">
              <span className="text-2xl font-gilroy text-green-400">
                {el.Total_Profit}
              </span>
              Total Profit
            </div>
            <div className="row-start-1 flex font-gilroy flex-col gap-0 items-start justify-center ">
              <span className=" text-2xl font-gilroy">{el.Active_Days}</span>
              Active Days
            </div>
          </div>

          <div className="grid grid-cols-2 gap-0 py-2 col-span-2">
            <div className="row-start-2 flex font-gilroy flex-col gap-0 ">
              <span className=" text-2xl font-gilroy text-green-400">
                {el.AUM}%
              </span>{" "}
              Current Annual Yield
            </div>
            <div className="row-start-2 flex font-gilroy flex-col gap-0 ">
              <span className=" text-2xl font-gilroy">{el.AUM_Eth}</span> Assets
              Under Management
            </div>
          </div>
        </div>

        {Address ? (
          <div className="flex flex-col mt-5 lg:flex-row lg:justify-start md:gap-2 lg:gap-16 xl:gap-8 2xl:gap-12">
            <button
              type="button"
              disabled={el.id === plan_Number || !Address || !KYC}
              className={`text-white font-gilroy mt-2 bg-gradient-to-r from-blue-600 to-teal-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-xl xl:text-base 2xl:text-xl px-5 py-2.5 inline-flex justify-center text-center ${
                el.id === plan_Number ? "opacity-50 cursor-not-allowed" : ""
              } ${!Address || !KYC ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={() => handlePlan(el.id, el.title, el.daily_Pool_Yield)}
            >
              Choose Pool
            </button>
            <button
              type="button"
              disabled={!Address || !KYC}
              className={`text-white font-gilroy mt-2 bg-gradient-to-r from-blue-600 to-teal-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-xl xl:text-base 2xl:text-xl px-5 py-2.5 inline-flex justify-center text-center ${
                !Address || !KYC ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => handleNavigate(el.id)}
            >
              Explore Pool
            </button>
          </div>
        ) : (
          <div className="w-full flex items-center">
            <button
              type="button"
              className="text-white w-full opacity-90 cursor-not-allowed font-gilroy mt-2 bg-gradient-to-r from-blue-600 to-teal-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-xl xl:text-base 2xl:text-xl px-5 py-2.5 inline-flex justify-center text-center"
            >
              Connect Your DeFi Wallet
            </button>
          </div>
        )}
      </div>
      <Tooltip id="my-tooltip" />
    </>
  );
}

export default memo(Card);
