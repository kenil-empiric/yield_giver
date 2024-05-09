import { ethers } from "ethers";
import { walletData } from "../Redux/Reducer/walletSlice";
import { Toast } from "./toast";
import USDCABI from "../BNBABI/Abi.json";

async function FetchBalance(dispatch, address) {
  const { REACT_APP_USDC_ADDRESS } = process.env;

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const newBalance = await signer.getBalance();
    const updatedBalance = ethers.utils.formatEther(newBalance);
    const usdcContract = new ethers.Contract(
      REACT_APP_USDC_ADDRESS,
      USDCABI,
      signer
    );
    const USDCBalance = await usdcContract.balanceOf(address);
    const USDC = (USDCBalance / 10 ** 6).toString();
    dispatch(walletData({ address, balance: updatedBalance, USDC: USDC }));
    return updatedBalance;
  } catch (error) {
    Toast.error("Something wents wrong in fetching balance.");
    console.error("Error fetching balance:", error);
  }
}

export default FetchBalance;
