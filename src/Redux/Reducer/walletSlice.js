import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Address: "",
  balance: 0,
  USDC: 0,
};

export const WalletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    walletData: (state, action) => {
      const { address, balance, USDC } = action.payload;
      state.Address = address;
      state.balance = balance;
      state.USDC = USDC;
    },
  },
});

export const { walletData } = WalletSlice.actions;
export default WalletSlice.reducer;
