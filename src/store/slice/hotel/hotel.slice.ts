import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState: any = {
  hotHotels: []
};

const hotel = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    saveHotHotels: (state, action: PayloadAction<any>) => {
      state.hotHotels = action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.hotel
      };
    }
  }
});

export const { saveHotHotels } = hotel.actions;
export default hotel.reducer;
