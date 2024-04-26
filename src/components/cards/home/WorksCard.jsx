import { memo } from "react";

function WorksCard({ item }) {
  return (
    <>
      <div className="w-[100%] bg-[#3F66B0] transform-gpu transition-transform duration-300 ease-in-out hover:scale-110 shadow-lg rounded-lg bg-opacity-20 flex flex-col items-center gap-0 py-2 md:h-[300px] lg:h-[320px] xl:h-[310px] 2xl:h-[310px]">
        <div className="w-[8rem] md:w-[50%] lg:w-[40%] xl:w-[35%] 2xl:w-[30%] p-4 2xl:p-6">
          <img src={item.img} alt="logo.png" className="w-full h-full" />
        </div>
        <div className="text-left pb-3 md:pb-0 px-5 md:px-4 lg:px-2 xl:px-3 lg:text-center">
          <p className="text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-montserrat font-bold">
            {item.title}
          </p>
          <p className="font-Open_Sans text-base lg:text-lg font-semibold leading-5 md:leading-5 lg:leading-6 pt-1 2xl:mt-1">
            {item.desc}
          </p>
        </div>
      </div>
    </>
  );
}

export default memo(WorksCard);
