import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState: any = {
  luxuryRooms: []
};

const room = createSlice({
  name: "room",
  initialState,
  reducers: {
    saveLuxuryRooms: (state, action: PayloadAction<any>) => {
      state.luxuryRooms = action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.room
      };
    }
  }
});

export const { saveLuxuryRooms } = room.actions;
export default room.reducer;
