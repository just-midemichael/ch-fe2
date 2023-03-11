import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import type { RootState } from "@/store/index";
import type { UserPayload } from "@/services/user/payload";

export type AuthState = {
  user: UserPayload | null;
  token: string | null;
};

const slice = createSlice({
  name: "auth",
  initialState: { token: null, user: null } as AuthState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth
      };
    }
  }
});

export const { setCredentials } = slice.actions;
export default slice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
