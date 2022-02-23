import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/news/' }),
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: () => `/`,
    }),
    getLatestNews: builder.query({
      query: () => `/latest`,
    }),
  }),
})

export const { useGetAllNewsQuery, useGetLatestNewsQuery } = newsApi
