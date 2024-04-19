import React from "react";
import img1 from "../../../assets/YieldMagnetDesk.png";

function YieldMagnet() {
  return (
    <>
      <div className="w-[90%] m-auto flex p-1 mt-10 flex-col-reverse gap-8 lg:w-full xl:w-full lg:px-5 2xl:px-0 lg:flex-row lg:gap-[4%] 2xl:mt-28 lg:py-8 items-center justify-center">
        <div className="lg:w-[48%]">
          <img src={img1} alt="img.logo" className="lg:w-full lg:h-full" />
        </div>
        <div className="flex-col gap-1 text-center lg:w-[48%] flex lg:flex-col lg:gap-1 lg:text-left">
          <p className="text-2xl font-gilroy text-left font-bold ">
            Accelerate Your Financial journey by Overcoming Roadblocks and
            Achieving Your Goals Sooner
          </p>
          <p className="text-base font-gilroy text-left ">
            Be a pioneer of generous High-Yield DeFi with strategies that
            drasticall outperform the best of traditional options in the highest
            gear of alternative finance
          </p>
          <p className="text-2xl font-gilroy text-left font-bold ">
            Maximize Earnings and Donations
          </p>
          <p className="text-base font-gilroy text-left ">
            Harness the Power of UnBelievable Financial Growth for you, your
            Family and Community Because we understand the challenges of
            under-performing portfolios. we are committed to helping you grow
            both financially and through philanthropic endeavors.
          </p>
          <p className="text-2xl font-gilroy text-left font-bold ">
            Easily Invest, Effortless Earn
          </p>
          <p className="text-base font-gilroy text-left ">
            Say goodbye to the stress of trading digital assets. Find
            top-performing fully managed funds that deliver consistent results
            through our investor analytics suite. Invest hassle-free. with plans
            that align with your goals and risk tolerance. Grow your wealth and
            give back with confidence. Our decades of experience have shaped
            unique investment strategies that blend innovation with practically.
            These strategies are tailored for simplicity and designed to be
            accessible, ensuring you can top into elite market opportunities
            without complexity. <br />
            Take the first step towards a prosperous future for you and your
            loved ones.
          </p>
          <p className="text-2xl font-gilroy text-left font-bold ">
            Never worry about income again
          </p>
          <p className="text-base font-gilroy text-left ">
            Imagine what would happen if you could safety multiply your
            Investment and income every year? What would you do if you could
            double your that worth year after year? How would it change you? How
            would you change the world around you? <br />
            Launch the app NOW and start navigating the investment landscape
            with a trusted guidance system and experience the MASSIVE YIELD of
            DeFi.
          </p>
        </div>
      </div>
    </>
  );
}

export default YieldMagnet;
