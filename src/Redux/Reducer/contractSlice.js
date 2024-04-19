import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contractAddress: "",
  signer: "",
};

export const Contract_Details_Slice = createSlice({
  name: "contract_details",
  initialState,
  reducers: {
    Contract_data: (state, action) => {
      const { contractAddress, signer } = action.payload;
      state.contractAddress = contractAddress;
      state.signer = signer;
    },
  },
});

export const { Contract_data } = Contract_Details_Slice.actions;
export default Contract_Details_Slice.reducer;
