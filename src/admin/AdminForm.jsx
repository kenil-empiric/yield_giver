import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Toast } from "../utils/toast";
import { Oval } from "react-loader-spinner";

function AdminForm() {
  const [poolOneYield, setPoolOneYield] = useState("");
  const [poolTwoYield, setPoolTwoYield] = useState("");
  const [poolThreeYield, setPoolThreeYield] = useState("");
  const [poolOnePeriod, setPoolOnePeriod] = useState("");
  const [poolTwoPeriod, setPoolTwoPeriod] = useState("");
  const [poolThreePeriod, setPoolThreePeriod] = useState("");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [loadingOne, setLoadingOne] = useState(false);
  const [loadingTwo, setLoadingTwo] = useState(false);
  const [loadingThree, setLoadingThree] = useState(false);
  const [loadingFour, setLoadingFour] = useState(false);
  const [loadingFive, setLoadingFive] = useState(false);
  const [loadingSix, setLoadingSix] = useState(false);
  const [loadingSeven, setLoadingSeven] = useState(false);
  const [loadingEight, setLoadingEight] = useState(false);

  const { REACT_APP_API_BASE_URL } = process.env;

  const { Address } = useSelector((state) => state?.walletDetails);

  const apiInstance = axios.create({
    baseURL: REACT_APP_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: Address && Address.toString(),
    },
  });

  //API Request ,
  const handleSubmit = async (InputType) => {
    try {
      switch (InputType) {
        case "Daily_Pool_One_Yield":
          if (!poolOneYield) {
            Toast.error("Please enter the yield value before processing.");
            return;
          }
          setLoadingOne(true);
          const response_one = await apiInstance.post("/setPlanOneRate", {
            rate: poolOneYield,
          });
          if (response_one.status === 200) {
            setLoadingOne(false);
            Toast.success(response_one.data.message);
            setPoolOneYield("");
            return;
          }
          break;
        case "Daily_Pool_Two_Yield":
          if (!poolTwoYield) {
            Toast.error("Please enter the yield value before processing.");
            return;
          }
          setLoadingTwo(true);
          const response_Two = await apiInstance.post("/setPlanTwoRate", {
            rate: poolTwoYield,
          });
          if (response_Two.status === 200) {
            setLoadingTwo(false);
            Toast.success(response_Two.data.message);
            setPoolTwoYield("");
            return;
          }
          break;
        case "Daily_Pool_Three_Yield":
          if (!poolThreeYield) {
            Toast.error("Please enter the yield value before processing.");
            return;
          }
          setLoadingThree(true);
          const response_Three = await apiInstance.post("/setPlanThreeRate", {
            rate: poolThreeYield,
          });
          if (response_Three.status === 200) {
            setLoadingThree(false);
            Toast.success(response_Three.data.message);
            setPoolThreeYield("");
            return;
          }
          break;
        case "Daily_Pool_One_Yield_Period":
          if (!poolOnePeriod) {
            Toast.error("Please enter the yield value before processing.");
            return;
          }
          setLoadingFour(true);
          const res_plan_one = await apiInstance.post("/setPlanOneDays", {
            Days: poolOnePeriod,
          });
          if (res_plan_one.status === 200) {
            setLoadingFour(false);
            Toast.success(res_plan_one.data.message);
            setPoolOnePeriod("");
            return;
          }
          break;
        case "Daily_Pool_Two_Yield_Period":
          if (!poolTwoPeriod) {
            Toast.error("Please enter the yield value before processing.");
            return;
          }
          setLoadingFive(true);
          const res_plan_two = await apiInstance.post("/setPlanTwoDays", {
            Days: poolTwoPeriod,
          });
          if (res_plan_two.status === 200) {
            setLoadingFive(false);
            Toast.success(res_plan_two.data.message);
            setPoolTwoPeriod("");
            return;
          }
          break;
        case "Daily_Pool_Three_Yield_Period":
          if (!poolThreePeriod) {
            Toast.error("Please enter the yield value before processing.");
            return;
          }
          setLoadingSix(true);
          const res_plan_three = await apiInstance.post("/setPlanThreeDays", {
            Days: poolThreePeriod,
          });
          if (res_plan_three.status === 200) {
            setLoadingSix(false);
            Toast.success(res_plan_three.data.message);
            setPoolThreePeriod("");
            return;
          }
          break;
        case "Minimum_Investment":
          if (!minAmount) {
            Toast.error("Please enter the yield value before processing.");
            return;
          }
          setLoadingSeven(true);
          const res_Min_Invest = await apiInstance.post("/setMinInvestAmount", {
            amount: minAmount,
          });
          if (res_Min_Invest.status === 200) {
            setLoadingSeven(false);
            Toast.success(res_Min_Invest.data.message);
            setMinAmount("");
            return;
          }
          break;
        default:
          if (!maxAmount) {
            Toast.error("Please enter the yield value before processing.");
            return;
          }
          setLoadingEight(true);
          const res_Max_Invest = await apiInstance.post("/setMaxInvestAmount", {
            amount: maxAmount,
          });
          if (res_Max_Invest.status === 200) {
            setLoadingEight(false);
            Toast.success(res_Max_Invest.data.message);
            setMaxAmount("");
            return;
          }
          break;
      }
    } catch (error) {
      console.error("Error:", error);
      Toast.error(error.response.data.msg);
      setLoadingOne(false);
      setLoadingTwo(false);
      setLoadingThree(false);
      setLoadingFour(false);
      setLoadingFive(false);
      setLoadingSix(false);
      setLoadingSeven(false);
      setLoadingEight(false);
    }
  };

  return (
    <>
      <div className="p-3 md:p-4 lg:p-0">
        <div className="max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto mt-28 md:mt-40 lg:mt-28 xl:mt-40 bg-gradient-to-b from-gray-200 to-gray-300 p-4 md:p-8 lg:p-10 rounded-lg">
          <div
            className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold font-gilroy text-center mb-8 text-teal-400"
            style={{
              background: "linear-gradient(to right, #35cdc2, #236de7)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Yield Givers Admin Panel
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-gray-700 text-lg font-gilroy font-bold mb-2"
              >
                Daily Pool One Yield
              </label>
              <input
                type="number"
                id="firstName"
                name="firstName"
                value={poolOneYield}
                onChange={(e) => setPoolOneYield(e.target.value)}
                className="shadow font-gilroy appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Daily Pool One Yield"
                required
              />
              <button
                type="button"
                className="flex justify-center items-center bg-gradient-to-b font-gilroy from-blue-600 to-teal-400 text-white font-bold py-2 px-3 rounded mt-2 w-full"
                onClick={() => handleSubmit("Daily_Pool_One_Yield")}
              >
                {loadingOne ? (
                  <Oval
                    visible={true}
                    height="25"
                    width="25"
                    color="#ffffff"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    secondaryColor="#ffffff"
                  />
                ) : (
                  "Add Yield One Rate"
                )}
              </button>
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-gray-700 text-lg font-gilroy font-bold mb-2"
              >
                Daily Pool Two Yield
              </label>
              <input
                type="number"
                id="lastName"
                name="lastName"
                value={poolTwoYield}
                onChange={(e) => setPoolTwoYield(e.target.value)}
                className="shadow font-gilroy appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Daily Pool Two Yield"
                required
              />
              <button
                type="button"
                className="flex justify-center items-center bg-gradient-to-b font-gilroy from-blue-600 to-teal-400 text-white font-bold py-2 px-3 rounded mt-2 w-full"
                onClick={() => handleSubmit("Daily_Pool_Two_Yield")}
              >
                {loadingTwo ? (
                  <Oval
                    visible={true}
                    height="25"
                    width="25"
                    color="#ffffff"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    secondaryColor="#ffffff"
                  />
                ) : (
                  "Add Yield Two Rate"
                )}
              </button>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-lg font-gilroy font-bold mb-2"
              >
                Daily Pool Three Yield
              </label>
              <input
                type="number"
                id="email"
                name="email"
                value={poolThreeYield}
                onChange={(e) => setPoolThreeYield(e.target.value)}
                className="shadow font-gilroy appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Daily Pool Three Yield"
                required
              />
              <button
                type="button"
                className="flex justify-center items-center bg-gradient-to-b font-gilroy from-blue-600 to-teal-400 text-white font-bold py-2 px-3 rounded mt-2 w-full"
                onClick={() => handleSubmit("Daily_Pool_Three_Yield")}
              >
                {loadingThree ? (
                  <Oval
                    visible={true}
                    height="25"
                    width="25"
                    color="#ffffff"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    secondaryColor="#ffffff"
                  />
                ) : (
                  "Add Yield Three Rate"
                )}
              </button>
            </div>
            <div className="mb-4">
              <label
                htmlFor="additionalField"
                className="block text-gray-700 text-lg font-gilroy font-bold mb-2"
              >
                Daily Pool One Yield Period
              </label>
              <input
                type="number"
                id="additionalField"
                name="additionalField"
                value={poolOnePeriod}
                onChange={(e) => setPoolOnePeriod(e.target.value)}
                className="shadow font-gilroy appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Daily Pool One Yield Period"
                required
              />
              <button
                type="button"
                className="flex justify-center items-center bg-gradient-to-b from-blue-600 to-teal-400 font-gilroy text-white font-bold py-2 px-3 rounded mt-2 w-full"
                onClick={() => handleSubmit("Daily_Pool_One_Yield_Period")}
              >
                {loadingFour ? (
                  <Oval
                    visible={true}
                    height="25"
                    width="25"
                    color="#ffffff"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    secondaryColor="#ffffff"
                  />
                ) : (
                  "Add Pool One Period"
                )}
              </button>
            </div>
            <div className="mb-4">
              <label
                htmlFor="additionalField"
                className="block text-gray-700 text-lg font-gilroy font-bold mb-2"
              >
                Daily Pool Two Yield Period
              </label>
              <input
                type="number"
                id="additionalField"
                name="additionalField"
                value={poolTwoPeriod}
                onChange={(e) => setPoolTwoPeriod(e.target.value)}
                className="shadow font-gilroy appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Daily Pool Two Yield Period"
                required
              />
              <button
                type="button"
                className="flex justify-center items-center bg-gradient-to-b from-blue-600 to-teal-400 font-gilroy text-white font-bold py-2 px-3 rounded mt-2 w-full"
                onClick={() => handleSubmit("Daily_Pool_Two_Yield_Period")}
              >
                {loadingFive ? (
                  <Oval
                    visible={true}
                    height="25"
                    width="25"
                    color="#ffffff"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    secondaryColor="#ffffff"
                  />
                ) : (
                  "Add Pool Two Period"
                )}
              </button>
            </div>
            <div className="mb-4">
              <label
                htmlFor="additionalField"
                className="block text-gray-700 text-lg font-gilroy font-bold mb-2"
              >
                Daily Pool Three Yield Period
              </label>
              <input
                type="number"
                id="additionalField"
                name="additionalField"
                value={poolThreePeriod}
                onChange={(e) => setPoolThreePeriod(e.target.value)}
                className="shadow font-gilroy appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Daily Pool Three Yield Period"
                required
              />
              <button
                type="button"
                className="flex justify-center items-center bg-gradient-to-b from-blue-600 to-teal-400 font-gilroy text-white font-bold py-2 px-3 rounded mt-2 w-full"
                onClick={() => handleSubmit("Daily_Pool_Three_Yield_Period")}
              >
                {loadingSix ? (
                  <Oval
                    visible={true}
                    height="25"
                    width="25"
                    color="#ffffff"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    secondaryColor="#ffffff"
                  />
                ) : (
                  "Add Pool Three Period"
                )}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4">
            <div className=" md:mb-4">
              <label
                htmlFor="lastName"
                className="block text-gray-700 text-lg font-gilroy font-bold mb-2"
              >
                Minimum Investement Amount
              </label>
              <input
                type="number"
                id="lastName"
                name="lastName"
                value={minAmount}
                onChange={(e) => setMinAmount(e.target.value)}
                className="shadow font-gilroy appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Minimum Investement"
                required
              />
              <button
                type="button"
                className="flex justify-center items-center bg-gradient-to-b font-gilroy from-blue-600 to-teal-400 text-white font-bold py-2 px-3 rounded mt-2 w-full"
                onClick={() => handleSubmit("Minimum_Investment")}
              >
                {loadingSeven ? (
                  <Oval
                    visible={true}
                    height="25"
                    width="25"
                    color="#ffffff"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    secondaryColor="#ffffff"
                  />
                ) : (
                  "Add Minimum Investement"
                )}
              </button>
            </div>
            <div className="mb-1 md:mb-4">
              <label
                htmlFor="lastName"
                className="block text-gray-700 text-lg font-gilroy font-bold mb-2"
              >
                Maxmium Investement Amount
              </label>
              <input
                type="number"
                id="lastName"
                name="lastName"
                value={maxAmount}
                onChange={(e) => setMaxAmount(e.target.value)}
                className="shadow font-gilroy appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Maxmium Investement"
                required
              />
              <button
                type="button"
                className="bg-gradient-to-b flex justify-center items-center font-gilroy from-blue-600 to-teal-400 text-white font-bold py-2 px-3 rounded mt-2 w-full"
                onClick={() => handleSubmit("Maximum_Investment")}
              >
                {loadingEight ? (
                  <Oval
                    visible={true}
                    height="25"
                    width="25"
                    color="#ffffff"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    secondaryColor="#ffffff"
                  />
                ) : (
                  "Add Maxmium Investement"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminForm;
