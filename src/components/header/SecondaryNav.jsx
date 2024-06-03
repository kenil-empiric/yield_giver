import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { IoWalletOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrDocumentText } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { SideNav, Wallet } from "../navigation/Navigation";
import { SocialIcon } from "../navigation/Navigation";
import WalletConnect from "../models/WalletConnect";
import { ethers } from "ethers";
import { Toast } from "../../utils/toast";
import { signMessage } from "../../utils/signMessage";
import { useDispatch, useSelector } from "react-redux";
import { walletData } from "../../Redux/Reducer/walletSlice";
import { Log_Out, Sign_Data } from "../../Redux/Reducer/isSignCheck";
import NavSideBar from "../models/NavSideBar";
import { isKYCData } from "../../Redux/Reducer/isKYCCheck";
import { fetchFormData } from "../../utils/IsCheckKYC";
import { setAdmin } from "../../Redux/Reducer/isAdminSlice";
import USDCABI from "../../BNBABI/Abi.json";
import Abi from "../../ABI/Abi.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SecondaryNav() {
  const [show, setShow] = useState(false);
  const [Walletshow, setWalletShow] = useState(false);
  const [StakeAmount, setStakeAmount] = useState("0.0");
  const storedMode = localStorage.getItem("mode");
  const defaultMode = storedMode ? storedMode === "dark" : true;
  const [mode, setMode] = useState(defaultMode);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.isSignChecked?.sign_hash);
  const { Address, balance, USDC } = useSelector(
    (state) => state?.walletDetails
  );

  const { REACT_APP_ADMIN_ADDRESS, REACT_APP_USDC_ADDRESS } = process.env;

  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  

  const handleMode = () => {
    const newMode = !mode;
    setMode(!mode);
    localStorage.setItem("mode", newMode ? "dark" : "light");
  };

  const handleLink = (url) => {
    setShow(false);
    navigate(url);
    return;
  };

  const handleWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        const account = accounts[0];
        const isChecked =
          data &&
          data?.filter((item) => item.address.toLowerCase() === account);
        if (!isChecked || isChecked.length === 0) {
          const domain = window.location.host; //here we need to add signature.
          const from = accounts[0];
          const sig = await signMessage({
            message: `${domain} wants you to sign in with your Ethereum account:\n${from}\n\nI accept the MetaMask Terms of Service: https://community.metamask.io/tos\n\nURI: https://${domain}\nVersion: 1\nChain ID: 1\nNonce: 32891757\nIssued At: 2021-09-30T16:25:24.000Z`,
          });
          if (sig) {
            // const updatedSignatures = [...signatures, sig];
            const updatedSignatures = [sig];
            dispatch(Sign_Data(updatedSignatures));
            if (account) {
              await accountChangedHandler(account);
              setWalletShow(false);
            }
            Toast.success("Wallet connected.");
          }
        } else {
          if (account) {
            await accountChangedHandler(account);
            setWalletShow(false);
          }
          Toast.success("Wallet connected.");
        }
      } catch (error) {
        console.error("Error connecting wallet:", error);
        Toast.error(
          <div>
            Notice: Your Wallet Connection Attempt Failed. For Access, Switch to{" "}
            <a
              style={{ color: "blue" }}
              href="https://chainlist.org/?search=arbitrum+one"
              target="_blank"
            >
              Arbitrum One
            </a>
            , Where Faster Transactions and Lower Fees Await.
          </div>
        );
      }
    }
  };

  const accountChangedHandler = async (newAccount) => {
    if (newAccount) {
      const adminAddress = REACT_APP_ADMIN_ADDRESS?.toLowerCase();
      if (adminAddress && newAccount.toLowerCase() === adminAddress) {
        dispatch(setAdmin(true));
      } else {
        dispatch(setAdmin(false));
      }
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner(newAccount);
      const balance = await signer.getBalance();
      const userBalance = ethers.utils.formatEther(balance);
      const usdcContract = new ethers.Contract(
        REACT_APP_USDC_ADDRESS,
        USDCABI,
        signer
      );
      const USDCBalance = await usdcContract.balanceOf(newAccount);
      const USDC = (USDCBalance / 10 ** 6).toString();
      dispatch(
        walletData({ address: newAccount, balance: userBalance, USDC: USDC })
      );
      fetchFormData(dispatch, newAccount);
    }
  };

  const handleDisconnect = () => {
    try {
      dispatch(Log_Out());
      dispatch(isKYCData(false));
      dispatch(walletData({ address: "", balance: 0, USDC: 0 }));
      dispatch(setAdmin(false));
      setTimeout(() => {
        setWalletShow(false);
      }, 200);
      Toast.success("Wallet Disconnected.");
      setTimeout(() => {
        return navigate("/pool");
      }, 3000);
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
      Toast.error(
        <div>
          Notice: Your Wallet Connection Attempt Failed. For Access, Switch to{" "}
          <a
            style={{ color: "blue" }}
            href="https://chainlist.org/?search=arbitrum+one"
            target="_blank"
          >
            Arbitrum One
          </a>
          , Where Faster Transactions and Lower Fees Await.
        </div>
      );
    }
  };

  const handleHome = () => {
    navigate("/");
    return;
  };

  return (
    <>
      <div className="w-full fixed top-0 left-0 z-40 bg-[#001450] text-[#ffffff]">
        <div className="container xl:container flex justify-between  mx-auto lg:px-0 py-3 lg:py-3">
          <div className="w-full m-auto xl:w-full flex flex-row justify-between items-center px-2">
            <div className="flex items-center">
              <Link to={"/"} className="cursor-pointer">
                <div>
                  <img
                    src={logo}
                    alt="logo.svg"
                    className="w-14 h-12 md:h-12 lg:h-12"
                  />
                </div>
              </Link>
              <Link to={"/"} className="cursor-pointer">
                <p
                  className="text-sm font-montserrat md:text-lg font-bold"
                  style={{
                    lineHeight: "22px",
                  }}
                >
                  YIELD <br /> GIVERS
                </p>
              </Link>
            </div>
            <div className="md:w-[40%] xl:w-[45%] flex flex-row justify-between items-center gap-4">
              <button
                onClick={handleHome}
                className="hidden md:block border-2 p-3 border-[#001450] bg-blue-900 hover:border-blue-600 rounded-2xl"
              >
                <FaHome className="text-xl md:text-xl text-[#FFD700]" />
              </button>
              <button className="hidden md:block border-2 p-3 border-[#001450] bg-blue-900 hover:border-blue-600 rounded-2xl">
                <GrDocumentText className="text-xl md:text-xl text-[#FFD700]" />
              </button>
              <button
                onClick={handleMode}
                className="border-2 p-3 border-[#001450] bg-blue-900 hover:border-blue-500 rounded-2xl"
              >
                {mode ? (
                  <MdLightMode className="text-xl md:text-xl text-[#FFD700]" />
                ) : (
                  <MdDarkMode className="text-xl md:text-xl text-[#FFD700]" />
                )}
              </button>
            </div>
            <div className=" flex items-center md:justify-between gap-3">
              {/* <Link to={"/pool"}> */}
              <button
                onClick={() => {
                  setWalletShow(!Walletshow);
                }}
                className="flex font-Open_Sans items-center bg-[#FFD700] gap-1 hover:text-[#ffffff] font-semibold hover:bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-[#000] font-gilroy px-3 py-2 rounded-xl"
              >
                <IoWalletOutline className="text-2xl" />
                <span className="hidden md:block font-Open_Sans">
                  {Address
                    ? `${Address.slice(0, 6)}....${Address.slice(-4)}`
                    : "Connect Wallet"}
                </span>
              </button>
              {/* </Link> */}
              <button
                onClick={() => {
                  setShow(!show);
                }}
                className="cursor-pointer"
              >
                <GiHamburgerMenu className="text-3xl cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <NavSideBar
        SideNav={SideNav}
        show={show}
        setShow={setShow}
        SocialIcon={SocialIcon}
        handleLink={handleLink}
      />

      <WalletConnect
        Walletshow={Walletshow}
        setWalletShow={setWalletShow}
        Wallet={Wallet}
        handleWallet={handleWallet}
        userAddress={Address}
        userBalance={balance}
        UserUSDC={USDC}
        handleDisconnect={handleDisconnect}
        // StakeAmount={StakeAmount}
      />
    </>
  );
}

export default SecondaryNav;
