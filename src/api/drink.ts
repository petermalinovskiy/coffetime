import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export interface IDrinkListResponse {
    ProductList: IDrinktList[];
}

interface IDrinkItemResponse {
    id: string;
    productName: string;
    price: number;
    cofeId: string;
    cofeName: string;
    favarite: boolean;
    attribute: [
        {
            id: string;
            description: string;
            iconType: string;
        }
    ];
    imagesPath: string;
}

interface IDrinktList {
    id: string;
    cofeId: string;
    name: string;
    price: number;
    favorite: boolean;
    imagesPath: string;
}

export interface IDrinkRequest {
    sessionId: string;
    cafeId?: string |  undefined;
    productId?: string |  undefined;
}

export const drinkApi = createApi({
    reducerPath: 'drink',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://ci2.dextechnology.com:8000',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8",
        },
    }),
    endpoints: (builder) => ({
        getCafeDrinkList: builder.query<IDrinkListResponse, IDrinkRequest>({
            query: (params) => ({
                url: '/api/Product/GetProductsCafe',
                method: 'POST',
                body: params,
            }),
        }),
        getDrinkItem: builder.query<IDrinkItemResponse, IDrinkRequest>({
            query: (params) => ({
                url: '/api/Product/GetProduct',
                method: 'POST',
                body: params,
            }),
        }),
        getFavoriteDrinkList: builder.query<IDrinktList, IDrinkRequest | string>({
            query: (params) => ({
                url: '/api/Product/GetAll',
                method: 'POST',
                body: JSON.stringify(params),
            }),
        }),
    }),
});

export const drink = {
    ...drinkApi,
};

export const {
    useGetCafeDrinkListQuery,
    useLazyGetCafeDrinkListQuery,
    useGetDrinkItemQuery,
    useLazyGetDrinkItemQuery,
    useGetFavoriteDrinkListQuery
} = drinkApi;
