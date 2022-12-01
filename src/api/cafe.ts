import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export interface ICafeResponse {
    CafeAllData: ICafeItemData[];
}

 interface ICafeItemData {
    id: string;
    name: string;
    address: string;
    coordinates: string;
    description: string;
    images: string;
}

export interface ICafeRequest {
    accessToken: string;
}

export const cafeApi = createApi({
    reducerPath: 'cafe',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://ci2.dextechnology.com:8000',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8",
        },
    }),
    endpoints: (builder) => ({
        getCafeList: builder.query<ICafeResponse, ICafeRequest | string>({
            query: (sessionID) => ({
                url: '/api/Cafe/GetAll',
                method: 'POST',
                body: JSON.stringify(sessionID),
            }),
        }),
    }),
});

export const cafe = {
    ...cafeApi,
};

export const { useGetCafeListQuery, useLazyGetCafeListQuery} = cafeApi;
