import { memo, useEffect, useMemo, useState } from "react";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "../../../utils/toast";
import { Oval } from "react-loader-spinner";
import FetchBalance from "../../../utils/FetchBalance";
import Abi from "../../../ABI/Abi.json";

const Card2 = ({ Percentage }) => {
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
  const [loading, setLoading] = useState(false);
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
        const GetInvestmentDetails = await contract?.getInvestments();
        const GetPlanTypes = await GetInvestmentDetails.typeNums?.toString();
        const GetPlanValues = await GetInvestmentDetails[2]?.toString();
        const newValues = [...GetPlanValues?.split(",")];
        const newData = [...GetPlanTypes?.split(",")];
        setStakingValue(newValues);
        setCombineYield(newData);

        const Main_Innvestment = ethers.utils.formatEther(Innvestment);
        const Main_TotalEarn = ethers.utils.formatEther(TotalEarn);
        const Main_TotalWithdraw = ethers.utils.formatEther(TotalWithdraw);
        const Main_TotalReward = ethers.utils.formatEther(TotalReward);
        setInvestment(Main_Innvestment);
        setTotalEarn(Main_TotalEarn);
        setTotalWith(Main_TotalWithdraw);
        setTotalWithdraw(Main_TotalReward);
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
      const WithdrawAmount_string = totalWithdraw.toString();
      const Amount = ethers.utils.parseEther(WithdrawAmount_string);
      setLoading(true);
      const Withcontract = await contract?.withdraw(Amount);
      const res = await Withcontract.wait();
      if (res) {
        FetchBalance(dispatch, Address);
        Toast.success("Sucessfully Withdraw Earning.");
        setLoading(false);
        console.log("Sucessfully Withdraw", res);
      }
    } catch (error) {
      console.error("error in withdraw earning.", error);
      Toast.error("Something Wrong in while Withdraw Earning.");
      setLoading(false);
    }
  };

  const WithdrawPrin = async (event) => {
    event.preventDefault();
    try {
      // const WithcPrincipal= await contract.withdraw()
      // await WithcPrincipal.wait();
      // console.log("Sucessfully Withdraw");
    } catch (error) {
      console.error(error);
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
        objType[key] = objType[key] * planOneMultiplier;
      } else if (key === "2") {
        objType[key] = objType[key] * planTwoMultiplier;
      } else {
        objType[key] = objType[key] * planThreeMultiplier;
      }
    }
    const sum = Object.values(objType).reduce((acc, curr) => acc + curr, 0);
    Combined_Yield_Average = sum / Object.keys(objType).length;
  };

  getTypeTotal();
  useEffect(() => {
    main();
  }, [Address, loading]);

  const total_Earning = useMemo(() => {
    return Number(TotalWith) + Number(totalWithdraw);
  }, [TotalWith, totalWithdraw]);

  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 p-5 gap-4 w-full max-w-xl bg-white border border-gray-300 rounded-3xl shadow hover:brightness-100  from-black to-blue-500  dark:bg-gradient-to-b  dark:border-gray-700">
          <h1 className="text-xl md:text-4xl md:pb-9 lg:pb-0 font-bold text-left table-mi-head font-gilroy">
            MY STATS
          </h1>
          <div className="table-calculator-wr">
            <div className="grid grid-cols-2 gap-4">
              <div className="calculator-block">
                <div className="font-gilroy">Your Total Staked:</div>
                <div className="text-lg md:text-2xl font-gilroy">
                  {Investment}{" "}
                  <span className="text-teal-400 font-bold font-gilroy">
                    USDC
                  </span>
                </div>
              </div>
              <div className="calculator-block">
                <div className="calcul-head-text font-gilroy">
                  Total Amount Withdrawn:
                </div>
                <div className="text-lg md:text-2xl">
                  {Number(TotalWith)?.toFixed(4)}{" "}
                  <span className="text-teal-400 font-bold font-gilroy">
                    USDC
                  </span>
                </div>
              </div>
              <div className="calculator-block">
                <div className="calcul-head-text font-gilroy">
                  Your Total Earnings:
                </div>
                <div className="text-lg md:text-2xl font-gilroy">
                  {total_Earning?.toFixed(5)}{" "}
                  <span className="text-teal-400 font-bold font-gilroy">
                    USDC
                  </span>
                </div>
              </div>
              <div className="calculator-block">
                <div className="calcul-head-text font-gilroy">
                  Your Combined Yield:{" "}
                </div>
                <div className="text-lg md:text-2xl font-gilroy">
                  {Combined_Yield_Average}%{" "}
                  <span className="text-teal-400 font-bold font-gilroy">
                    per day
                  </span>
                </div>
              </div>
              {/* new here */}
              <div className="calculator-block">
                <div className="font-gilroy">Your Number of Referrals:</div>
                <div className="text-lg md:text-2xl font-gilroy">
                  {referral}{" "}
                  <span className="text-teal-400 font-bold font-gilroy">
                    Referrals
                  </span>
                </div>
              </div>
              <div className="calculator-block">
                <div className="calcul-head-text font-gilroy">
                  Your Referral Earnings:
                </div>
                <div className="text-lg md:text-2xl font-gilroy">
                  {Number(TotalEarn)?.toFixed(6)}{" "}
                  <span className="text-teal-400 font-bold font-gilroy">
                    USDC
                  </span>
                </div>
              </div>
              {/* end block here */}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:gap-5 xl:gap-3 md:pt-3 lg:py-5 xl:py-1">
            <div className="flex flex-row items-center gap-3">
              <div className="w-full ">
                <div className="calcul-head-text font-gilroy">
                  Total Available Balance:
                </div>
                <div className="text-lg md:text-2xl font-gilroy">
                  {Number(totalWithdraw)?.toFixed(5)}{" "}
                  <span className="text-teal-400 font-bold font-gilroy">
                    USDC
                  </span>
                </div>
              </div>
              <div className="w-full">
                <button
                  onClick={HandleWithdraw}
                  type="button"
                  disabled={!Address}
                  className={`text-[#000] flex justify-center items-center p-2.5 font-gilroy font-bold text-xs lg:text-base xl:text-xl bg-[#FFD700] hover:brightness-105 focus:outline-none rounded-full w-full text-center ${
                    !Address ? "opacity-50" : ""
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
                  ) : (
                    "WITHDRAW EARNING"
                  )}
                </button>
              </div>
            </div>
            <button
              onClick={WithdrawPrin}
              type="button"
              className="text-[#000] font-gilroy text-sm lg:text-base xl:text-xl font-bold bg-[#FFD700] focus:outline-none rounded-full w-full py-4 text-center me-2 mb-0"
            >
              WITHDRAW PRINCIPAL
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Card2);
