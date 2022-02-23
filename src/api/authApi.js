import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/auth/' }),
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => ({
        url: 'members',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-auth-token': '',
        },
      }),
    }),
  }),
})

export const { useGetAllEventsQuery, useGetLatestEventsQuery } = authApi
