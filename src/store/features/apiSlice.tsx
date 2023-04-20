import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface TransferInfo {
    id: Number,
    date: Date,
    amount: String,
    full_name: String,
    type: Boolean,
    comment: String,
    transfer_type: Number
  }

export const tableDataApi = createApi({
  reducerPath: 'tableDataApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
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
  }), 
});

export const { useGetTableQuery, useAddTableItemMutation } = tableDataApi;