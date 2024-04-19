import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sign_hash: "",
};

export const isSignSlice = createSlice({
  name: "isSignCheck",
  initialState,
  reducers: {
    Sign_Data: (state, action) => {
      state.sign_hash = action.payload;
    },
    Log_Out: (state, action) => {
      state.sign_hash = "";
    },
  },
});

export const { Sign_Data, Log_Out } = isSignSlice.actions;
export default isSignSlice.reducer;
