import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/auth',
  }),
  endpoints: (builder) => ({
    signUp: builder.query({
      query: (data) => ({
        url: '/',
        method: 'POST',
        body: { data },
        headers: { myHeader: 'application/json' },
      }),
    }),
    login: builder.query({
      query: (data) => ({
        url: '/',
        method: 'POST',
        body: { data },
        headers: { myHeader: 'application/json' },
      }),
    }),
    signout: builder.query({
      query: () => '/',
    }),
  }),
});
