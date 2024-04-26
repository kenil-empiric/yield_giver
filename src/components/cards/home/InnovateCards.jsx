import React, { memo } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function InnovateCards({ item }) {
  return (
    <>
      <div className="w-[100%] bg-[#3F66B0] shadow-lg rounded-xl md:rounded-2xl bg-opacity-20 flex flex-col items-center gap-0 py-0 h-auto md:h-[495px] lg:h-[580px] xl:h-[680px] 2xl:h-[710px]">
        <div className="w-full pb-3 rounded-t-xl md:rounded-t-2xl">
          <img
            src={item.img}
            alt="logo.png"
            className="w-full h-full rounded-t-xl md:rounded-t-2xl"
          />
        </div>
        <div className="text-left pb-3 md:pb-0 px-2 xl:px-3">
          <p className="text-xl md:text-base lg:text-xl font-montserrat font-bold leading-6 md:leading-5 lg:leading-6 pb-1">
            {item.title}
          </p>
          <p className="w-full m-auto font-Open_Sans md:text-sm lg:text-base leading-5 md:leading-4 lg:leading-5 xl:text-lg xl:leading-6">
            {item.desc}
          </p>
          <div className="w-full text-base md:text-sm lg:text-base flex xl:text-xl place-items-start justify-items-start text-teal-600 font-bold">
            <button className="flex p-1 font-Open_Sans items-center gap-2 justify-center opacity-60 dark:opacity-90">
              See More
              <span>
                <FaArrowRightLong className="text-base md:text-lg" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(InnovateCards);
