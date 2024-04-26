import { memo, useState } from "react";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FaPowerOff } from "react-icons/fa";
import CopyAddress from "../constants/CopyAddress";
import { IoCopyOutline } from "react-icons/io5";

function WalletConnect({
  setWalletShow,
  Walletshow,
  Wallet,
  handleWallet,
  userAddress,
  userBalance,
  handleDisconnect,
}) {
  const [copyIcon, setCopyIcon] = useState({ icon: IoCopyOutline });

  return (
    <>
      <div className="w-full relative top-0 left-0">
        <div
          className={`w-[85%] md:w-[36%] lg:w-[30%] xl:w-[25%] 2xl:w-[18%] px-4 2xl:px-1 shadow-2xl bg-[#ffffff] dark:bg-[#001450] fixed top-0 right-0 z-50 h-screen transition-transform duration-300 ease-in-out transform ${
            Walletshow ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="w-full md:hidden flex justify-end items-end mr-12 pt-5">
            <ImCross
              onClick={() => setWalletShow(!Walletshow)}
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
                      className="text-sm font-montserrat md:text-lg font-bold"
                      style={{
                        lineHeight: "22px",
                      }}
                    >
                      YIELD <br /> GIVERS
                    </p>
                  </div>
                </Link>
              </div>
              {userAddress ? (
                <div className="mt-8 md:mt-10 p-2">
                  <div className="text-xl font-Open_Sans text-[#000] dark:text-[#ffffff] hover:border-[#ffffff] dark:border-blue-900 hover:text-[#ffffff] mb-3 font-gilroy font-bold flex items-center gap-1 w-[90%] md:w-full lg:w-[85%] m-auto justify-center hover:dark:bg-blue-950 hover:bg-gradient-to-bl from-blue-600 to-teal-400 border rounded-md border-blue-900 p-2">
                    <p>
                      {userAddress &&
                        `${userAddress.slice(0, 6)}....${userAddress.slice(
                          -4
                        )}`}
                    </p>
                    <CopyAddress
                      copyIcon={copyIcon}
                      setCopyIcon={setCopyIcon}
                      userAddress={userAddress}
                    />
                  </div>
                  <div className="w-[90%] dark:text-[#ffffff] hover:text-[#ffffff] hover:dark:border-blue-900 hover:border-[#ffffff] md:w-full lg:w-[85%] m-auto flex items-center justify-center hover:bg-blue-950 hover:bg-gradient-to-bl from-blue-600 to-teal-400 border rounded-md border-blue-900 gap-6 md:justify-evenly p-2">
                    <button className="py-4 px-6 md:p-4 bg-transparent rounded-xl text-sm md:text-lg font-bold font-Open_Sans">
                      {userBalance && Number(userBalance)?.toFixed(4)} ETH
                    </button>
                    <FaPowerOff
                      onClick={handleDisconnect}
                      className="text-2xl lg:text-4xl cursor-pointer text-[#FFD700] hover:text-[#ffffff]"
                    />
                  </div>
                </div>
              ) : (
                <div className="mt-8 md:mt-10">
                  {Wallet &&
                    Wallet?.map((item, index) => (
                      <button
                        onClick={handleWallet}
                        className="w-[90%] rounded-xl m-auto flex p-3 lg:p-4 mt-2 bg-transparent border border-blue-900 hover:border-[#ffffff] dark:border-none hover:text-[#ffffff] dark:bg-blue-900 hover:bg-gradient-to-bl from-blue-600 to-teal-400 items-center gap-3 md:gap-4"
                        key={index}
                      >
                        <img
                          src={item.logo}
                          alt="metamask.img"
                          className="rounded-xl"
                        />
                        <p className="font-Open_Sans text-base lg:text-xl font-bold">
                          {item.title}
                        </p>
                      </button>
                    ))}
                </div>
              )}
            </div>
            <div className="mb-14 text-wrap w-full px-2 md:mb-8 text-xs mx-auto font-Open_Sans">
              By connecting a wallet, you agree to Yield Givers' Terms of
              Service and consent to its Privacy Policy. (Last updated 2.16.24)
            </div>
          </div>
        </div>
        {Walletshow && (
          <div
            className="w-full fixed top-0 left-0 z-40 h-screen opacity-95 dark:opacity-90 transition-opacity bg-slate-200 dark:bg-black"
            onClick={() => setWalletShow(!Walletshow)}
          ></div>
        )}
      </div>
    </>
  );
}

export default memo(WalletConnect);
