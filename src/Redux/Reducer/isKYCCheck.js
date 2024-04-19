import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  KYC: false,
};

export const isKYCSlice = createSlice({
  name: "KYC",
  initialState,
  reducers: {
    isKYCData: (state, action) => {
      state.KYC = action.payload;
    },
  },
});

export const { isKYCData } = isKYCSlice.actions;
export default isKYCSlice.reducer;
