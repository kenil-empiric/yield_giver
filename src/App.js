import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import Layout from "./components/layout/Layout";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ethers } from "ethers";
import { Contract_data } from "./Redux/Reducer/contractSlice";
import { walletData } from "./Redux/Reducer/walletSlice";
import { ToastComponent } from "./utils/toast";
import { Sign_Data } from "./Redux/Reducer/isSignCheck";
import { fetchFormData } from "./utils/IsCheckKYC";
import { setAdmin } from "./Redux/Reducer/isAdminSlice";

function App() {
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const { REACT_APP_ADMIN_ADDRESS } = process.env;

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xfeD77efAC6E1583916dFe9903c702859747A1EdB";
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
          dispatch(walletData({ address: newAccount, balance: userBalance }));
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
