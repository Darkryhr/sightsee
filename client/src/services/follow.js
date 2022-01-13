import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const followsApi = createApi({
  reducerPath: 'followsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/follow',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFollowed: builder.mutation({
      query: () => '/',
    }),
    addTo: builder.mutation({
      query: (id) => `/${id}`,
    }),
    removeFrom: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetFollowedMutation,
  useAddToMutation,
  useRemoveFromMutation,
} = followsApi;
