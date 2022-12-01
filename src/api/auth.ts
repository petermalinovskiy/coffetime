import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export interface UserResponse {
    accessToken: string;
}

export interface ILoginRequest {
    email: string;
    password: string;
}

export const loginApi = createApi({
    reducerPath: 'login',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://ci2.dextechnology.com:8000',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    }),
    endpoints: (builder) => ({
        login: builder.query<UserResponse, ILoginRequest>({
            query: (user) => ({
                url: '/api/User/Authorization',
                method: 'POST',
                body: user,
            }),
        }),
        registration: builder.mutation<UserResponse, ILoginRequest | never>({
            query: (user) => ({
                url: '/api/User/Register',
                method: 'POST',
                body: user,
            }),
        }),
    }),
});

export const authentication = {
    ...loginApi,
};

export const { useLazyLoginQuery, useRegistrationMutation } = loginApi;
