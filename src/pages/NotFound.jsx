import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    return navigate("/");
  };

  return (
    <>
      <div className="flex flex-col items-center h-screen justify-center gap-0 md:gap-4">
        <p
          className="text-5xl md:text-9xl text-center font-gilroy font-bold"
          style={{
            background: "linear-gradient(to right, #35cdc2, #236de7)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Oops!
        </p>
        <div className="font-gilroy flex flex-col gap-1 items-center justify-center">
          <p className="font-bold text-xl md:text-3xl font-gilroy ">
            404 - Page Not Found
          </p>
          <p className="w-[80%] md:w-[60%] leading-5 md:leading-8 m-auto text-center text-lg md:text-2xl font-gilroy ">
            The page you are looking for might have been removed had its name
            changed or its temporarily unavailable
          </p>
          <button
            type="button"
            className="text-white font-gilroy mt-2 bg-gradient-to-r from-blue-600 to-teal-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-full text-base md:text-xl px-5 py-2.5 inline-flex justify-center w-[220px] md:w-1/4 text-center"
            onClick={handleNavigate}
          >
            Go to homePage
          </button>
        </div>
      </div>
    </>
  );
}

export default NotFound;
