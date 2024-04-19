import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAdmin: false,
};

export const IsAdminReducer = createSlice({
  name: "Admin",
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
  },
});

export const { setAdmin } = IsAdminReducer.actions;
export default IsAdminReducer.reducer;
