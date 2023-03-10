import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import authReducer from "./slice/auth/auth.slice";
import hotelReducer from "./slice/hotel/hotel.slice";
import bookingReducer from "./slice/booking/booking.slice";
import roomReducer from "./slice/room/room.slice";

import {
  nextReduxCookieMiddleware,
  wrapMakeStore
} from "next-redux-cookie-wrapper";

const combinedReducer = combineReducers({
  auth: authReducer,
  hotel: hotelReducer,
  booking: bookingReducer,
  room: roomReducer
});

export const makeStore = wrapMakeStore(() =>
  configureStore({
    reducer: combinedReducer,
    middleware: (gDM) =>
      gDM()
        .concat()
        .prepend(
          nextReduxCookieMiddleware({
            subtrees: [{ subtree: "auth" }]
          })
        )
  })
);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
