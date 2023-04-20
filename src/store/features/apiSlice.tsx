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
  endpoints: (builder) => ({
    getTable: builder.query<TransferInfo[], void>({
      query: () => `/table_data`,
    }),
  }),
});

export const { useGetTableQuery } = tableDataApi;