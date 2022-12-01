import {Action, createSlice} from "@reduxjs/toolkit";
import {newState} from "~/common/utils/newState";
import {AuthInitialState, IAuthState} from "./authState";
import {authentication} from "~/api/auth";


function tokenReceived(state: IAuthState, action: Action) {
    const payload = (action as any)?.payload;

    return newState(state, payload);
}

export const {reducer: AuthReducer, actions: AuthActions} = createSlice({
    name: "authentication",
    initialState: AuthInitialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase("tokenReceived", tokenReceived)
            .addMatcher(
                authentication.endpoints.login.matchFulfilled,
                (state, {payload}) => {
                    state.accessToken = payload;
                });
    },
});

