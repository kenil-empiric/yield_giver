import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plan_One_Rate: "",
  plan_Two_Rate: "",
  plan_Three_Rate: "",
};

export const PlanRateSlice = createSlice({
  name: "pool",
  initialState,
  reducers: {
    setPlanRate: (state, action) => {
      const { planOneMulNumber, planTwoMulNumber, planThreeMulNumber } =
        action.payload;
      state.plan_One_Rate = planOneMulNumber;
      state.plan_Two_Rate = planTwoMulNumber;
      state.plan_Three_Rate = planThreeMulNumber;
    },
  },
});

export const { setPlanRate } = PlanRateSlice.actions;
export default PlanRateSlice.reducer;
