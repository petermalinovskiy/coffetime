import {combineReducers} from "@reduxjs/toolkit";
import {SystemReducer} from "./system/systemSlice";
import {cafeApi} from "~/api/cafe";
import {AuthReducer} from "~/core/store/authentification/authSlice";
import {drinkApi} from "~/api/drink";
import {favoriteApi} from "~/api/favorite";


export const rootReducer = combineReducers({
  system: SystemReducer,
  login: AuthReducer,
  [cafeApi.reducerPath]: cafeApi.reducer,
  [drinkApi.reducerPath]: drinkApi.reducer,
  [favoriteApi.reducerPath]: favoriteApi.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
