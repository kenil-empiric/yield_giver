import { ethers } from "ethers";
import { walletData } from "../Redux/Reducer/walletSlice";
import { Toast } from "./toast";

async function FetchBalance(dispatch, address) {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const newBalance = await signer.getBalance();
    const updatedBalance = ethers.utils.formatEther(newBalance);
    dispatch(walletData({ address, balance: updatedBalance }));
    return updatedBalance;
  } catch (error) {
    Toast.error("Something wents wrong in fetching balance.");
    console.error("Error fetching balance:", error);
  }
}

export default FetchBalance;
