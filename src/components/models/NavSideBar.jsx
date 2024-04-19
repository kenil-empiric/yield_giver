import { memo } from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import logo from "../../assets/logo.svg";
import { useSelector } from "react-redux";

function NavSideBar({ show, setShow, SideNav, SocialIcon, handleLink }) {
  const { isAdmin } = useSelector((state) => state.IsAdmin);
  return (
    <>
      <div className="w-full relative top-0 left-0">
        <div
          className={`px-4 2xl:px-6 shadow-2xl bg-[#ffffff] dark:bg-[#001450] fixed top-0 right-0 z-50 h-screen transition-transform duration-300 ease-in-out transform ${
            show ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="w-full md:hidden flex justify-end items-end mr-12 pt-5">
            <ImCross
              onClick={() => setShow(!show)}
              className="text-black dark:text-[#ffffff] text-xl cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-between h-screen">
            <div>
              <div className="w-[80%] m-auto flex justify-start items-center md:mt-10 mt-0">
                <Link to={"/"} className="cursor-pointer">
                  <div className="w-[40%] md:w-[30%] lg:w-[28%] 2xl:w-[40%] flex items-center gap-1">
                    <img
                      src={logo}
                      alt="logo.svg"
                      className="w-24 h-10 md:h-14 lg:h-14 xl:h-12"
                    />
                    <p
                      className="text-sm font-gilroy md:text-lg font-bold"
                      style={{
                        lineHeight: "22px",
                      }}
                    >
                      YIELD <br /> GIVERS
                    </p>
                  </div>
                </Link>
              </div>
              <div className="w-[70%] m-auto flex flex-col justify-start mt-5">
                <p className="text-lg pl-0 font-gilroy mb-4 text-slate-800 dark:text-slate-400">
                  Navigation
                </p>
                <ul>
                  {SideNav &&
                    SideNav?.map(
                      (item, i) =>
                        (isAdmin || i < SideNav.length - 1) && (
                          <li
                            key={i}
                            className={`flex ${
                              i === 0 ? "block md:hidden" : ""
                            } font-gilroy items-center gap-4 text-slate-800 dark:text-slate-200 text-xl md:text-2xl py-3 md:py-5 cursor-pointer hover:dark:text-teal-300 hover:text-teal-300`}
                            onClick={() => handleLink(item.path)}
                          >
                            {item.icon}
                            {item.title}
                          </li>
                        )
                    )}
                </ul>
              </div>
            </div>
            <div className="mb-14 md:mb-8 px-4 mx-auto flex items-center justify-between">
              {SocialIcon &&
                SocialIcon?.map((item, i) => (
                  <button
                    key={i}
                    className="rounded-full hover:bg-teal-300 hover:text-slate-100 p-3 text-2xl"
                  >
                    {item.icon}
                  </button>
                ))}
            </div>
          </div>
        </div>
        {show && (
          <div
            className="w-full fixed top-0 left-0 z-40 h-screen opacity-95 dark:opacity-90 transition-opacity bg-slate-200 dark:bg-black"
            onClick={() => setShow(!show)}
          ></div>
        )}
      </div>
    </>
  );
}

export default memo(NavSideBar);
