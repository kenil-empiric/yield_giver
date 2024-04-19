import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loading() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#01f9c6"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass="dots"
        />
      </div>
    </>
  );
}

export default Loading;
