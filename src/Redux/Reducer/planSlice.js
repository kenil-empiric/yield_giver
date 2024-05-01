import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plan_Number: 1,
  plan_Name: "Liquidity Mining",
  daily_Pool_Yield: 0,
};

export const PlanSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setPlanData: (state, action) => {
      const { id, plan_name, daily_Pool_Yield } = action.payload;
      state.plan_Number = id;
      state.plan_Name = plan_name;
      state.daily_Pool_Yield = daily_Pool_Yield;
    },
    setDailyPoolYield: (state, action) => {
      state.daily_Pool_Yield = action.payload;
    },
  },
});

export const { setPlanData, setDailyPoolYield } = PlanSlice.actions;
export default PlanSlice.reducer;

