import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const vacationsApi = createApi({
  reducerPath: 'vacationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/vacation',
  }),
  endpoints: (builder) => ({
    getAllVacations: builder.query({
      query: () => '/',
    }),
  }),
});

export const { useGetAllVacationsQuery } = vacationsApi;
