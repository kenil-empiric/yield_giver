import { memo, useEffect, useMemo, useState } from "react";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "../../../utils/toast";
import { Oval } from "react-loader-spinner";
import FetchBalance from "../../../utils/FetchBalance";
import Abi from "../../../ABI/Abi.json";

const Card2 = ({ Percentage, loading }) => {
  const { planOneMultiplier, planTwoMultiplier, planThreeMultiplier } =
    Percentage;
  const [Investment, setInvestment] = useState(0.0);
  const [TotalEarn, setTotalEarn] = useState(0.0);
  const [TotalWith, setTotalWith] = useState(0.0);
  const [totalWithdraw, setTotalWithdraw] = useState(0.0);
  const [combineYield, setCombineYield] = useState([]);
  const [stakingValue, setStakingValue] = useState([]);
  const [referral, setReferral] = useState(0);
  // const [WithdrawAmount, setWithdrawAmount] = useState("");
  const [load, setLoad] = useState(false);
  const [load1, setLoad2] = useState(false);

  const dispatch = useDispatch();
  const { signer } = useSelector((state) => state?.contractDetails);
  const { contractAddress } = useSelector((state) => state?.contractDetails);
  const { Address } = useSelector((state) => state?.walletDetails);
  const contractAbi = Abi.abi;
  const contract = new ethers.Contract(contractAddress, contractAbi, signer);

  const main = async () => {
    try {
      if (Address) {
        const GetData = await contract?.userMap(Address);
        const Innvestment = await GetData?.investment;
        const TotalEarn = await GetData?.recommendReward;
        const TotalWithdraw = await GetData?.totalWithdraw;
        const TotalReward = await GetData?.totalReward;
        const subNum = await GetData?.subNum;

        //here we getting combine yield.
        localStorage.setItem("stake", `${Innvestment}`);
        const GetInvestmentDetails = await contract?.getInvestments();
        const GetPlanTypes = await GetInvestmentDetails.typeNums?.toString();
        const GetPlanValues = await GetInvestmentDetails[2]?.toString();
        const newValues = [...GetPlanValues?.split(",")];
        const newData = [...GetPlanTypes?.split(",")];
        setStakingValue(newValues);
        setCombineYield(newData);

        setInvestment(Innvestment / 10 ** 6);
        setTotalEarn(TotalEarn / 10 ** 6);
        setTotalWith(TotalWithdraw / 10 ** 6);
        setTotalWithdraw(TotalReward / 10 ** 6);
        setReferral(subNum.toNumber());
      }
    } catch (error) {
      console.error("error in showing staking details", error);
    }
  };

  const HandleWithdraw = async (event) => {
    event.preventDefault();
    try {
      if (totalWithdraw < 0 && !Address) {
        Toast.warning("Invalid Earnings or wallet Address.");
        return;
      }
      const Amount = totalWithdraw.toString();
      setLoad(true);
      const Withcontract = await contract?.withdraw(Amount * 10 ** 6);
      const res = await Withcontract.wait();
      if (res) {
        FetchBalance(dispatch, Address);
        Toast.success("Sucessfully Withdraw Earning.");
        setLoad(false);
        console.log("Sucessfully Withdraw", res);
      }
    } catch (error) {
      console.error("error in withdraw earning.", error);
      Toast.error("Something Wrong in while Withdraw Earning.");
      setLoad(false);
    }
  };

  const WithdrawPrin = async (event) => {
    event.preventDefault();
    try {
      if(Investment < 0 && !Address){
        Toast.warning("Invalid Earnings or wallet Address.");
        return;
      }
      setLoad2(true);
      const WithcPrincipal= await contract.withdrawPrincipal(0)
      await WithcPrincipal.wait();
      setLoad2(false);
      console.log("Sucessfully Withdraw");
    } catch (error) {
      setLoad2(false);
      let E = new Error(error);
      const reasonMatch=E.message.match(/\(reason="([^"]+)"/);
      Toast.error(reasonMatch[1]);
     
      console.error(reasonMatch[1]); 
    }
  };

  let objType = {};
  let Combined_Yield_Average;
  const getTypeTotal = () => {
    for (let i = 0; i < combineYield.length; i++) {
      if (objType[combineYield[i]] === undefined) {
        objType[combineYield[i]] = 1;
      } else {
        objType[combineYield[i]]++;
      }
    }
    for (let key in objType) {
      if (key === "1") {
        objType[key] = objType[key] * planOneMultiplier/1000000;
      } else if (key === "2") {
        objType[key] = objType[key] * planTwoMultiplier/1000000;
      } else {
        objType[key] = objType[key] * planThreeMultiplier/1000000;
      }
    }
    const sum = Object.values(objType).reduce((acc, curr) => acc + curr, 0);
    Combined_Yield_Average = sum / Object.keys(objType).length;
  };

  getTypeTotal();
  useEffect(() => {
    main();
  }, [Address, loading, load]);

  const total_Earning = useMemo(() => {
    return Number(TotalWith) + Number(totalWithdraw);
  }, [TotalWith, totalWithdraw]);

  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 p-5 gap-5 w-full max-w-xl bg-white border border-gray-300 rounded-3xl shadow hover:brightness-100  from-black to-blue-500  dark:bg-gradient-to-b  dark:border-gray-700">
          <h1 className="text-2xl sm:text-4xl md:pb-0 lg:pb-0 font-bold text-left table-mi-head font-montserrat">
            MY STATS
          </h1>
          <div className="table-calculator-wr">
            <div className="grid grid-cols-2 gap-4">
              <div className="calculator-block">
                <div className="font-Open_Sans">Your Total Staked:</div>
                <div className="text-lg md:text-2xl font-Open_Sans">
                  {Investment}{" "}
                  <span className="text-teal-400 font-bold font-Open_Sans text-sm sm:text-lg xl:text-xl">
                    USDC
                  </span>
                </div>
              </div>
              <div className="calculator-block font-Open_Sans">
                <div className="calcul-head-text font-Open_Sans">
                  Total Amount Withdrawn:
                </div>
                <div className="text-lg md:text-2xl">
                  {Number(TotalWith)?.toFixed(4)}{" "}
                  <span className="text-teal-400 font-bold font-Open_Sans text-sm sm:text-lg xl:text-xl">
                    USDC
                  </span>
                </div>
              </div>
              <div className="calculator-block font-Open_Sans">
                <div className="calcul-head-text font-Open_Sans">
                  Your Total Earnings:
                </div>
                <div className="text-lg md:text-2xl font-Open_Sans">
                  {total_Earning?.toFixed(5)}{" "}
                  <span className="text-teal-400 font-bold font-Open_Sans text-sm sm:text-lg xl:text-xl">
                    USDC
                  </span>
                </div>
              </div>
              <div className="calculator-block font-Open_Sans">
                <div className="calcul-head-text font-Open_Sans">
                  Your Combined Yield:{" "}
                </div>
                <div className="text-lg md:text-2xl font-Open_Sans">
                  {Combined_Yield_Average
                    ? Combined_Yield_Average?.toFixed(2)
                    : "0.00"}
                  %{" "}
                  <span className="text-teal-400 font-bold font-Open_Sans text-sm sm:text-lg xl:text-xl">
                    per day
                  </span>
                </div>
              </div>
              {/* new here */}
              <div className="calculator-block font-Open_Sans">
                <div className="font-Open_Sans">Your Number of Referrals:</div>
                <div className="text-lg md:text-2xl font-Open_Sans">
                  {referral}{" "}
                  <span className="text-teal-400 font-bold font-Open_Sans text-sm sm:text-lg xl:text-xl">
                    Referrals
                  </span>
                </div>
              </div>
              <div className="calculator-block font-Open_Sans">
                <div className="calcul-head-text font-Open_Sans">
                  Your Referral Earnings:
                </div>
                <div className="text-lg md:text-2xl font-Open_Sans">
                  {Number(TotalEarn)?.toFixed(6)}{" "}
                  <span className="text-teal-400 font-bold font-Open_Sans text-sm sm:text-lg xl:text-xl">
                    USDC
                  </span>
                </div>
              </div>
              {/* end block here */}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:gap-5 xl:gap-3 md:pt-3 lg:py-1 xl:py-1">
            <div className="flex flex-row items-center gap-3">
              <div className="w-full ">
                <div className="calcul-head-text font-Open_Sans">
                  Total Available Balance:
                </div>
                <div className="text-lg md:text-2xl font-Open_Sans">
                  {Number(totalWithdraw)?.toFixed(5)}{" "}
                  <span className="text-teal-400 font-bold font-Open_Sans text-sm sm:text-lg xl:text-xl">
                    USDC
                  </span>
                </div>
              </div>
              <div className="w-full">
                <button
                  onClick={HandleWithdraw}
                  type="button"
                  disabled={!Address || Number(totalWithdraw) <= 0}
                  className={`text-[#000] flex justify-center items-center p-2.5 font-Open_Sans font-bold text-sm sm:text-base lg:text-lg bg-[#FFD700] hover:brightness-105 focus:outline-none rounded-full w-full text-center ${
                    !Address || Number(totalWithdraw) <= 0 ? "opacity-50" : ""
                  }`}
                >
                  {load ? (
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
                    "WITHDRAW EARNING"
                  )}
                </button>
              </div>
            </div>
            <button
              onClick={WithdrawPrin}
              type="button"
              className="text-[#000]  flex justify-center items-center font-Open_Sans text-sm sm:text-base lg:text-lg font-bold bg-[#FFD700] focus:outline-none rounded-full w-full py-3 text-center xl:mb-1.5 lg:mb-2 me-2 lg:mt-2 xl:mt-4"
            >
              {load1 ? (
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
                    "WITHDRAW PRINCIPAL"
                  )}
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Card2);
