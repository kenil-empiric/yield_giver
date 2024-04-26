import React, { memo } from "react";
function Stake({ item }) {
  return (
    <>
      <div className="w-[100%] bg-[#3F66B0] transform-gpu transition-transform duration-300 ease-in-out hover:scale-110 shadow-lg rounded-xl bg-opacity-20 flex flex-col justify-start lg:items-center md:justify-center gap-0 py-2 md:h-[170px] lg:h-[220px] xl:h-[250px] 2xl:h-[200px]">
        <div className="flex flex-col justify-start gap-2 md:gap-4 text-left pb-3 md:pb-0 px-4 md:px-4 lg:px-2 xl:px-3 lg:text-center">
          <p className="text-xl text-left md:leading-6 lg:leading-8 md:text-center md:text-lg lg:text-2xl 2xl:text-2xl font-montserrat font-bold">
            {item.title}
          </p>
          <p className="font-Open_Sans text-[#FFD700] text-left md:text-center md:text-2xl text-xl lg:text-4xl font-semibold">
            {item.value}
          </p>
        </div>
      </div>
    </>
  );
}

export default memo(Stake);
