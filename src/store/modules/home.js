import { getHomeGoodPriceData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk("fetchdata", async (extraInfo, { dispatch, getState }) => {
  const res = await getHomeGoodPriceData();
  // dispatch(changeGoodPriceInfoAction(res.list))
  return res
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload
    }
  }
})



export const { changeGoodPriceInfoAction } = homeSlice.actions
export default homeSlice.reducer;
