import { memo } from "react";

function CoreCard({ item }) {
  return (
    <>
      <div className="w-[100%] md:h-[480px] lg:h-[575px] xl:h-[650px] 2xl:h-[685px] bg-[#3F66B0] shadow-lg rounded-md bg-opacity-20 flex flex-col items-center gap-0 py-0">
        <div className="p-5 md:p-3 lg:p-4 xl:p-5">
          <img src={item.img} alt="logo.png" className="w-full h-full" />
        </div>
        <div className="px-5 pb-3 md:px-3 lg:px-4 xl:px-5">
          <p className="text-xl md:text-lg lg:text-xl font-gilroy font-bold text-left leading-6 md:leading-5 lg:leading-6 pb-1">
            {item.title}
          </p>
          <p className="w-full text-left m-auto font-gilroy md:text-sm lg:text-base leading-5 md:leading-4 lg:leading-5 xl:text-lg xl:leading-6">
            {item.desc}
          </p>
        </div>
      </div>
    </>
  );
}

export default memo(CoreCard);
