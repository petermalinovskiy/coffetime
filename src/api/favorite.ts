import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface ICafeResponse {
}

export interface ICafeRequest {
    sessionId: string,
    productId: string | undefined
}

export const favoriteApi = createApi({
    reducerPath: 'favorite',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://ci2.dextechnology.com:8000',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8",
        },
    }),
    endpoints: (builder) => ({
        setFavoriteDrink: builder.mutation<ICafeResponse, ICafeRequest>({
            query: (params) => ({
                url: '/api/Favorite/Set',
                method: 'POST',
                body: params,
            }),
        }),
        unsetFavoriteDrink: builder.mutation<ICafeResponse, ICafeRequest>({
            query: (params) => ({
                url: '/api/Favorite/Unset',
                method: 'POST',
                body: params,
            }),
        }),
    }),
});

export const favorite = {
    ...favoriteApi,
};

export const { useSetFavoriteDrinkMutation, useUnsetFavoriteDrinkMutation } = favoriteApi;
