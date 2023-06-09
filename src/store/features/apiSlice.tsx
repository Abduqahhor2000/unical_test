import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface TransferInfo {
    id: Number,
    date: Date,
    amount: Number,
    full_name: String,
    type: Boolean,
    comment: String,
    transfer_type: Number
  }
export interface Location {
    id: Number,
    lat: Number,
    long: Number,
  }

export const tableDataApi = createApi({
  reducerPath: 'tableDataApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://json-server-two-tawny.vercel.app' }),
  tagTypes: ["TableData"],
  endpoints: (builder) => ({
    getTable: builder.query<TransferInfo[], void>({
      query: () => `/table`,
      providesTags: ["TableData"]
    }),
    addTableItem: builder.mutation<TransferInfo[], TransferInfo>({
      query: (item) => ({
        url: `/table`,
        method: 'POST',
        body: item
      }),
      invalidatesTags: ["TableData"]
    }),
    getLocation: builder.query<Location[], void>({
      query: () => `/location`,
      providesTags: ["TableData"]
    }),
    getStat: builder.query<TransferInfo[], void>({
      query: () => `/table`,
      providesTags: ["TableData"]
    }),
  }), 
});

export const { useGetTableQuery, useAddTableItemMutation, useGetLocationQuery, useGetStatQuery } = tableDataApi;