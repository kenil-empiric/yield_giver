import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import { ethers } from "ethers";
import { signMessage, verifyMessages } from "../../../utils/signMessage";
import { useDispatch, useSelector } from "react-redux";
import { Sign_Data } from "../../../Redux/Reducer/isSignCheck";
import { Toast } from "../../../utils/toast";
import { Oval } from "react-loader-spinner";
import FetchBalance from "../../../utils/FetchBalance";
import Abi from "../../../ABI/Abi.json";
import USDCABI from "../../../BNBABI/Abi.json";

const Card1 = ({ loading, setLoading, id = 0 }) => {
  const [refAddress, setRefAddress] = useState("");
  const [stakeAmount, setStakeAmount] = useState(null);
  const [minInvestment, setMinInvestAmount] = useState(0);
  const [maxInvestment, setMaxInvestAmount] = useState(0);
  const [allowance, setAllowance] = useState("");
  const [approveloading, setApproveLoading] = useState(false);
  const dispatch = useDispatch();

  const signatures = useSelector((state) => state.isSignChecked?.sign_hash);
  const { Address } = useSelector((state) => state?.walletDetails);
  const { signer } = useSelector((state) => state?.contractDetails);
  const { contractAddress } = useSelector((state) => state?.contractDetails);

  const { plan_Number, plan_Name, daily_Pool_Yield } = useSelector(
    (state) => state.planData
  );
  const daily_Pool_Yield_cal = daily_Pool_Yield / 1000000;
  console.log();
  const contractAbi = Abi?.abi;
  console.log("pool id", id);

  const {
    REACT_APP_API_BASE_URL,
    REACT_APP_CONTRACT_ADDRESS,
    REACT_APP_USDC_ADDRESS,
  } = process.env;

  const maincontract = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  );

  //here we adding the USDC contract.
  const usdcContract = new ethers.Contract(
    REACT_APP_USDC_ADDRESS,
    USDCABI,
    signer
  );
  //global variable
  let domain = window.location.host;
  let from = Address;
  let msg = `${domain} wants you to sign in with your Ethereum account:\n${from}\n\nI accept the MetaMask Terms of Service: https://community.metamask.io/tos\n\nURI: https://${domain}\nVersion: 1\nChain ID: 1\nNonce: 32891757\nIssued At: 2021-09-30T16:25:24.000Z`;

  //here we fetching the allowance.
  const fetchAllowance = async () => {
    try {
      const USDCAllownace = await usdcContract.allowance(
        Address,
        REACT_APP_CONTRACT_ADDRESS
      );
      if (USDCAllownace) {
        let allowance = (USDCAllownace / 10 ** 6).toString();
        setAllowance(allowance);
      }
    } catch (error) {
      console.log("error in fetching allowance.", error);
    }
  };

  // for get the minumum amount
  useEffect(() => {
    const apiUrlMinAmount = `${REACT_APP_API_BASE_URL}/getMinInvestAmount`;
    const apiUrlMaxAmount = `${REACT_APP_API_BASE_URL}/getMaxInvestAmount`;
    axios
      .get(apiUrlMinAmount)
      .then((response) => {
        setMinInvestAmount(response.data.minamount / 1000000000000);
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });

    axios
      .get(apiUrlMaxAmount)
      .then((response) => {
        setMaxInvestAmount(response.data.maxamount / 1000000000000);
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
    fetchAllowance();
  }, [stakeAmount, Address, approveloading, loading]);

  const handleStake = async (event) => {
    event.preventDefault();
    try {
      if (!Address || !refAddress || !plan_Number) {
        Toast.warning("Please Fill All the Field.");
        return;
      }
      if (stakeAmount < minInvestment || stakeAmount > maxInvestment) {
        Toast.warning(
          `Please enter an amount between ${minInvestment} and ${maxInvestment}.`
        );
        return;
      }
      const isChecked =
        signatures &&
        signatures?.filter(
          (item) => item.address.toLowerCase() === Address.toLowerCase()
        );
      if (!signatures && Address) {
        const sig = await signMessage({
          message: msg,
        });
        if (sig) {
          const updatedSignatures = [sig];
          dispatch(Sign_Data(updatedSignatures));
        }
      } else if (isChecked.length === 0 && Address) {
        const sig = await signMessage({
          message: msg,
        });
        if (sig) {
          const updatedSignatures = [sig];
          dispatch(Sign_Data(updatedSignatures));
        }
      } else {
        const isValid = await verifyMessages({
          message: signatures[0]?.message,
          address: signatures[0]?.address,
          signature: signatures[0]?.signature,
        });

        if (isValid && Address) {
          setLoading(true);
          const gasPrice = await signer.getGasPrice();
          const stakecontract = await maincontract?.stake(
            refAddress,
            plan_Number,
            stakeAmount * 10 ** 6,
            {
              gasPrice: gasPrice.toString(),
            }
          );
          const res = await stakecontract.wait();
          if (res) {
            setRefAddress("");
            FetchBalance(dispatch, Address);
            Toast.success("Stake successful!.");
            setLoading(false);
            console.log("stakecontract....", stakecontract);
          }
        } else {
          Toast.error("Invalid Address please connect Wallet.");
        }
      }
    } catch (error) {
      let E = new Error(error);
      const reasonMatch = E.message.match(/\(reason="([^"]+)"/);
      console.log("Error staking:", reasonMatch[1]);
      setLoading(false);
      // const ErrorMessage = error.message.split(/(?:\(|,|{|^|\[)/)[0].trim();
      Toast.error(reasonMatch[1]);
    }
  };

  let Current_Daily_Profit = (
    (stakeAmount * (daily_Pool_Yield_cal ? daily_Pool_Yield_cal : 1)) /
    100
  )?.toFixed(4);
  let Expected_Days_until_ROI =
    Current_Daily_Profit > 0
      ? Math.floor(stakeAmount / Current_Daily_Profit)?.toFixed(0)
      : 0;

  useEffect(() => {
    if (plan_Number === 1) {
      setStakeAmount(minInvestment);
    } else if (plan_Number === 2) {
      setStakeAmount(minInvestment);
    } else {
      setStakeAmount(minInvestment);
    }
  }, [plan_Number, minInvestment]);

  const handleApprove = async () => {
    try {
      setApproveLoading(true);
      const stakeUSDC = await usdcContract.approve(
        REACT_APP_CONTRACT_ADDRESS,
        stakeAmount * 1000000
      );
      const res = await stakeUSDC.wait();
      if (res) {
        Toast.success("Stake Approve successful!.");
        setApproveLoading(false);
        console.log("approve:", res);
      }
    } catch (error) {
      console.log("Error in Approve", error);
      const ErrorMessage = error.message.split(/(?:\(|,|{|^|\[)/)[0].trim();
      Toast.error(ErrorMessage);
      setApproveLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 p-5 gap-4 w-full max-w-xl bg-white border border-gray-300 rounded-3xl shadow hover:brightness-100  from-black to-blue-500 dark:bg-gradient-to-b  dark:border-gray-700">
          <h1 className="text-2xl sm:text-4xl font-bold text-left table-mi-head font-montserrat">
            PROFIT CALCULATOR
          </h1>
          <div className="table-calculator-wr">
            <div className="grid grid-cols-2 gap-4">
              <div className="calculator-block">
                <div className="font-Open_Sans"> To Be Staking:</div>
                <div className="text-lg md:text-2xl font-Open_Sans">
                  {stakeAmount > 0 ? stakeAmount : 0.0}{" "}
                  <span className="text-teal-400 font-bold font-Open_Sans text-sm sm:text-lg xl:text-xl">
                    USDC
                  </span>
                </div>
              </div>
              <div className="calculator-block">
                <div className="calcul-head-text font-Open_Sans">
                  Current Daily Profit:
                </div>
                <div className="text-lg md:text-2xl font-Open_Sans">
                  {Current_Daily_Profit}{" "}
                  <span className="text-teal-400 font-bold font-Open_Sans text-sm sm:text-lg xl:text-xl">
                    USDC/day
                  </span>
                </div>
              </div>
              <div className="calculator-block">
                <div className="calcul-head-text font-Open_Sans">
                  Expected Days Until ROI:
                </div>
                <div className="text-lg md:text-2xl font-Open_Sans">
                  {Expected_Days_until_ROI}{" "}
                  <span className="text-teal-400 font-bold font-Open_Sans text-sm sm:text-lg xl:text-xl">
                    days
                  </span>
                </div>
              </div>
              <div className="calculator-block">
                <div className="calcul-head-text font-Open_Sans">
                  Daily Pool Yield:
                </div>
                <div className="text-lg md:text-2xl font-Open_Sans">
                  {/* {daily_Pool_Yield} */}
                  {daily_Pool_Yield_cal
                    ? daily_Pool_Yield_cal?.toFixed(2)
                    : "0.00"}
                  % {/* {PerRate ? PerRate : "1"}%{" "} */}
                  <span className="text-teal-400 font-bold font-Open_Sans text-sm sm:text-lg xl:text-xl">
                    per day
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="calculator-text-wr pt-2">
            <div className="text-sm md:text-lg font-Open_Sans">
              Enter Stake Amount (Min = {minInvestment}{" "}
              {/* {plan_Number === 1 ? 0.1 : plan_Number === 2 ? 1 : 5}{" "} */}
              <span className="text-teal-400 font-bold font-Open_Sans text-sm sm:text-lg xl:text-xl">
                USDC
              </span>{" "}
              & Max ={maxInvestment}{" "}
              <span className="text-teal-400 font-bold font-Open_Sans text-sm sm:text-lg xl:text-xl">
                USDC
              </span>
              )
            </div>
            <div className="text-sm md:text-lg font-Open_Sans py-1">
              Current Stake Allowance = {allowance ? allowance : 0.0}{" "}
              <span className="text-teal-400 font-bold font-Open_Sans text-sm sm:text-lg xl:text-xl">
                USDC
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            {/* <form> */}
            <div className="w-full flex flex-col gap-2">
              <input
                type="text"
                id="ref_address"
                value={refAddress}
                onChange={(e) => setRefAddress(e.target.value)}
                className="bg-gray-50 border font-Open_Sans text-black border-gray-300 text-sm rounded-3xl focus:ring-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Referral Address"
                required
              />
              <input
                type="text"
                id="plan_number"
                value={`Pool #${plan_Number}:${plan_Name}`}
                readOnly
                className="bg-gray-50 border font-Open_Sans swapInput text-black border-gray-300 text-sm rounded-3xl focus:ring-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Pool Number & Name"
              />
              <input
                type="number"
                id="stakeAmount"
                value={stakeAmount}
                onChange={(e) => {
                  const newValue = Math.max(0, e.target.value);
                  setStakeAmount(newValue);
                }}
                className="bg-gray-50 border font-Open_Sans swapInput text-black border-gray-300 text-sm rounded-3xl focus:ring-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="0.1"
                required
              />
            </div>
            <div className="w-full basis-1/2  flex items-center">
              <div className=" w-full">
                <button
                  type="submit"
                  onClick={handleStake}
                  disabled={
                    !Address ||
                    !plan_Number ||
                    !plan_Name ||
                    !daily_Pool_Yield_cal ||
                    stakeAmount > allowance
                  }
                  className={`text-[#000] flex text-sm sm:text-base lg:text-lg justify-center items-center font-bold font-Open_Sans bg-[#FFD700] hover:brightness-105 focus:outline-none rounded-full text- w-full py-2.5 text-center me-2 mb-2 ${
                    !Address || stakeAmount > allowance ? "opacity-50" : ""
                  }`}
                >
                  {loading ? (
                    <Oval
                      visible={true}
                      height="30"
                      width="30"
                      color="#ffffff"
                      ariaLabel="oval-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      secondaryColor="#ffffff"
                    />
                  ) : signatures?.length > 0 ? (
                    "STAKE"
                  ) : (
                    "SIGN MSG"
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleApprove}
                  disabled={
                    !Address ||
                    !plan_Number ||
                    !plan_Name ||
                    !daily_Pool_Yield_cal ||
                    stakeAmount <= allowance
                  }
                  className={`text-[#000] flex text-sm sm:text-base lg:text-lg justify-center items-center font-bold font-Open_Sans bg-[#FFD700] hover:brightness-105 focus:outline-none rounded-full text- w-full py-2.5 text-center me-2 mb-2 ${
                    !Address || stakeAmount <= allowance ? "opacity-50" : ""
                  }`}
                >
                  {approveloading ? (
                    <Oval
                      visible={true}
                      height="30"
                      width="30"
                      color="#ffffff"
                      ariaLabel="oval-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      secondaryColor="#ffffff"
                    />
                  ) : (
                    "Approve"
                  )}
                </button>
              </div>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Card1);
