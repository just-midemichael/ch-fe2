import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState: any = {
  bookings: []
};

const booking = createSlice({
  name: "booking",
  initialState,
  reducers: {
    saveBookings: (state, action: PayloadAction<any>) => {
      state.bookings = [action.payload];
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.booking
      };
    }
  }
});

export const { saveBookings } = booking.actions;
export default booking.reducer;
