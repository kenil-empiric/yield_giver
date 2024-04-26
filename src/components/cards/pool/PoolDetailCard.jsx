import React, { memo, useState } from "react";
import TruncateAddress from "../../constants/TruncateAddress";
import { IoCopyOutline } from "react-icons/io5";
import CopyAddress from "../../constants/CopyAddress";

function PoolDetailCard({ title, title_value, num_title, num }) {
  const [copyIcon, setCopyIcon] = useState({ icon: IoCopyOutline });
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5 mb-4">
        <div className="w-full lg:w-[49.5%] border-2 border-blue-400 flex items-center justify-between px-4 py-5 md:p-6 rounded-2xl">
          <p className="text-lg md:text-2xl font-Open_Sans">{title}</p>
          <p className="flex text-xl items-center font-Open_Sans gap-2">
            {/* 0xDaC4c7d0444E4CC2E05E17f1F374001C5E1a3Bd3
            <CopyAddress copyIcon={copyIcon} setCopyIcon={setCopyIcon} /> */}
            {title_value}
          </p>
          {/* <p className="flex md:hidden lg:flex 2xl:hidden text-base md:text-xl items-center gap-2">
            {TruncateAddress("0xDaC4c7d0444E4CC2E05E17f1F374001C5E1a3Bd3")}
            <CopyAddress copyIcon={copyIcon} setCopyIcon={setCopyIcon} />
          </p> */}
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
