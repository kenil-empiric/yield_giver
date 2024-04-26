import React, { useState } from "react";
import giv from "../../../assets/GIV.png";
import img from "../../../assets/GIVBG.png";

function GIV() {
  const [btn, setBtn] = useState(1);
  return (
    <>
      <div className="px-5 mt-6 md:mt-0 flex flex-col md:flex-row">
        <div className="w-full p-10 md:w-[50%] lg:w-[45%] xl:w-[45%] 2xl:w-[45%] md:p-4 xl:p-14 rounded-2xl 2xl:p-20">
          <img
            src={giv}
            alt="image.jpg"
            className="w-full h-full rounded-3xl"
          />
        </div>
        <div className="w-full md:w-[50%] md:pt-4 lg:pl-7 lg:pt-5 xl:px-6 xl:pt-16 lg:w-[55%] 2xl:w-[55%] md:py-2 2xl:px-12 2xl:pt-24">
          <p className="text-5xl md:text-5xl lg:text-6xl 2xl:text-9xl font-montserrat font-bold">
            GVST
          </p>
          <p className="text-base md:text-sm lg:text-lg xl:text-xl font-Open_Sans mt-1 md:mt-0 2xl:pr-10">
            GVST is the token at the heart of the Yield Givers ecosystem. It is
            a deflationary utility coin that gives back to investors and the
            community by doing the following with 1% of each transaction:
            burning, redistributing to investors, donating to a chosen charity,
            adding locked liquidity, and fueling the marketing/development
            budget. Stake GVST for even more yield!
          </p>
          <div className="flex flex-wrap md:flex-row gap-2 lg:gap-4 mt-4 md:mt-2 lg:mt-4">
            <button
              onClick={() => setBtn(1)}
              className={`${
                btn === 1
                  ? "bg-[#FFD700] text-[#000]"
                  : "bg-transparent text-[#FFD700] border-2 border-[#FFD700]"
              } font-Open_Sans font-semibold text-base lg:text-lg px-4 py-2 rounded-lg hover:text-[#ffffff] text-[#000] hover:bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:border-none`}
            >
              Tokenomics
            </button>
            <button
              onClick={() => setBtn(2)}
              className={`${
                btn === 2
                  ? "bg-[#FFD700] text-[#000]"
                  : "bg-none text-[#FFD700] border-2 border-[#FFD700]"
              } font-Open_Sans font-semibold text-base lg:text-lg px-4 py-2 rounded-lg hover:text-[#ffffff] text-[#000] hover:bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:border-none`}
            >
              Buy GVST
            </button>
            <button
              onClick={() => setBtn(3)}
              className={`${
                btn === 3
                  ? "bg-[#FFD700] text-[#000]"
                  : "bg-none text-[#FFD700] border-2 border-[#FFD700]"
              } font-Open_Sans font-semibold text-base lg:text-lg px-4 py-2 rounded-lg hover:text-[#ffffff] text-[#000] hover:bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:border-none`}
            >
              Stake GVST
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-b from-blue-600 to-teal-400 md:bg-none mt-12 md:mt-12 lg:mt-16 xl:mt-10">
        <div className="w-full md:relative px-5 py-10 md:py-0 md:px-5 2xl:px-0">
          <img src={img} alt="image.jpg" className="w-full hidden md:block" />
          <div className="w-full md:w-[60%] lg:w-[60%] xl:w-[55%] md:absolute md:top-14 md:left-10 lg:top-20 lg:left-12 xl:top-28 xl:left-20 2xl:top-36 2xl:left-20 pr-0">
            <p className="text-white text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-montserrat font-extrabold md:leading-[42px] lg:leading-[55px] xl:leading-[58px] 2xl:leading-[66px]">
              EARN MORE, GIVE MORE WITH{" "}
              <span className="font-montserrat text-teal-400">YIELD GIVERS!</span>
            </p>
            <p className="text-white text-base lg:text-xl xl:text-2xl 2xl:text-3xl mt-3 lg:mt-4 2xl:mt-5 font-montserrat">
              Boost your returns effortlessly while making a real difference
              where your money works for you and the world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GIV;
