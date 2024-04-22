import React from "react";
import img from "../../../assets/yieldMagnet.png";
import img2 from "../../../assets/yieldMagnetMobile.png";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <>
      <div>
        <div
          className="hidden lg:block lg:w-full mx-auto pt-36 bg-cover bg-center bg-no-repeat overflow-visible"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className=" lg:px-5  flex flex-col items-start lg:gap-3 xl:gap-4 w-1/2 ">
            <p className="font-medium font-gilroy text-left lg:text-4xl xl:text-5xl">
              Supercharge Financial
              <span
                className="text-teal-400 font-gilroy ml-2 font-bold"
                style={{
                  background: "linear-gradient(to right, #35cdc2, #236de7)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Growth
              </span>
            </p>
            <p className="text-left font-gilroy lg:text-5xl xl:text-6xl font-bold ">
              <span
                className="mr-2 text-teal-400 font-gilroy font-bold"
                style={{
                  background: "linear-gradient(to right, #35cdc2, #236de7)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                and Multiply
              </span>
              Your Profits Weekly
            </p>
            <p className="text-left font-gilroy text-2xl ">
              Looking for a faster financial vehicle you can rely upon?
            </p>
            <p className="text-left font-gilroy lg:text-base xl:text-xl 2xl:text-2xl ">
              Plug into strategically diversified Wealth Accelerators. Through
              decades of financial research, testing, and investing we provide
              access to the most innovative, generous, and safest investment
              vehicles available. We only offer income streams that drastically
              outperform the market and eradicate 99.5% of investment risks. You
              shouldn't settle for less profit, more risk, and extended
              investment horizons. We battle-test everything before you
              experience the rush of explosive daily earnings!
            </p>
            <Link className="mt-4 cursor-pointer" to="/pool">
              <button className="rounded-xl font-gilroy lg:p-3 lg:text-lg xl:p-4 xl:text-xl text-[#ffffff] bg-gradient-to-b from-blue-600 to-teal-400">
                Launch dApp
              </button>
            </Link>
          </div>
        </div>

        <div>
          <div className="lg:hidden w-full p-2">
            <img src={img2} alt="mobile.png" className="w-full h-full" />
          </div>
          <div className="w-[90%] lg:hidden m-auto flex flex-col">
            <p className="text-2xl font-gilroy text-left font-medium ">
              Supercharge Financial
              <span
                className="text-teal-400 font-gilroy ml-2 font-bold"
                style={{
                  background: "linear-gradient(to right, #35cdc2, #236de7)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Growth
              </span>
            </p>
            <p className="text-4xl text-left font-gilroy font-bold ">
              <span
                className="text-teal-400 font-gilroy mr-2 font-bold"
                style={{
                  background: "linear-gradient(to right, #35cdc2, #236de7)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                and Multiply
              </span>
              Your Profits Weekly
            </p>
            <p className="text-xl font-gilroy text-left ">
              Looking for a faster financial vehicle you can rely upon?
            </p>
            <p className="text-base font-gilroy text-left ">
              Plug into strategically diversified Wealth Accelerators. Through
              decades of financial research, testing, and investing we provide
              access to the most innovative, generous, and safest investment
              vehicles available. We only offer income streams that drastically
              outperform the market and eradicate 99.5% of investment risks. You
              shouldn't settle for less profit, more risk, and extended
              investment horizons. We battle-test everything before you
              experience the rush of explosive daily earnings!
            </p>
            <a className="mt-4 cursor-pointer" href="">
              <button className="rounded-xl font-gilroy text-base text-[#ffffff] px-3 py-3 lg:p-4 lg:text-xl bg-gradient-to-r from-blue-600 to-teal-400">
                Launch dApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
