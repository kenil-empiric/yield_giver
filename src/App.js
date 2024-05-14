import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import Layout from "./components/layout/Layout";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ethers } from "ethers";
import { Contract_data } from "./Redux/Reducer/contractSlice";
import { walletData } from "./Redux/Reducer/walletSlice";
import { ToastComponent } from "./utils/toast";
import { Sign_Data } from "./Redux/Reducer/isSignCheck";
import { fetchFormData } from "./utils/IsCheckKYC";
import { setAdmin } from "./Redux/Reducer/isAdminSlice";
import USDCABI from "./BNBABI/Abi.json";

function App() {
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const {
    REACT_APP_ADMIN_ADDRESS,
    REACT_APP_CONTRACT_ADDRESS,
    REACT_APP_USDC_ADDRESS,
  } = process.env;
  const { Address } = useSelector((state) => state?.walletDetails);

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = REACT_APP_CONTRACT_ADDRESS; //ETHEREUM TESTNET Contract address.
      //const contractAddress = "0x6dB51068668BD60A2199b27eD354eBe8B7212284"; //BSC TESTNET Contract address.
      try {
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        dispatch(Contract_data({ contractAddress, signer }));
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    };
    connectWallet();
    if (Address) {
      fetchFormData(dispatch, Address);
    }
  }, []);

  useEffect(() => {
    async function listenMMAccount() {
      window.ethereum.on("accountsChanged", async function (accounts) {
        const newAccount = accounts[0];
        console.log("newAccount", newAccount);
        if (newAccount) {
          const adminAddress = REACT_APP_ADMIN_ADDRESS;
          if (newAccount?.toLowerCase() === adminAddress?.toLowerCase()) {
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
          console.log("balance of usdc", (USDCBalance / 10 ** 6).toString());
          dispatch(
            walletData({
              address: newAccount,
              balance: userBalance,
              USDC: USDC,
            })
          );
          fetchFormData(dispatch, newAccount);
          dispatch(Sign_Data([]));
        }
      });
    }
    listenMMAccount();
  }, [dispatch]);

  return (
    <>
      <Layout headerPath={path}>
        <AllRoutes />
      </Layout>
      <ToastComponent />
    </>
  );
}

export default App;
