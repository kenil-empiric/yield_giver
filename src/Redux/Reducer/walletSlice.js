import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Address: "",
  balance: 0,
};

export const WalletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    walletData: (state, action) => {
      const { address, balance } = action.payload;
      state.Address = address;
      state.balance = balance;
    },
  },
});

export const { walletData } = WalletSlice.actions;
export default WalletSlice.reducer;
