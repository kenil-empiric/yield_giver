import React, { memo, useState } from "react";

function PoolDetailCard({ title, title_value, num_title, num }) {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5 mb-4">
        <div className="w-full lg:w-[49.5%] border-2 border-blue-400 flex items-center justify-between px-4 py-5 md:p-6 rounded-2xl">
          <p className="text-lg md:text-2xl font-Open_Sans">{title}</p>
          <p className="flex text-xl items-center font-Open_Sans gap-2">
            {title_value}
          </p>
        </div>
        <div className="w-full lg:w-[49.5%] border-2 border-blue-400 flex items-center justify-between px-4 py-5 md:p-6 rounded-2xl">
          <p className="text-lg md:text-2xl font-Open_Sans font-normal">
            {num_title}
          </p>
          <p className="text-base md:text-xl font-Open_Sans">{num}</p>
        </div>
      </div>
    </>
  );
}

export default memo(PoolDetailCard);
