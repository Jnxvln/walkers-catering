import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/events/' }),
  endpoints: (builder) => ({
    getAllEvents: builder.query({
      query: () => `/`,
    }),
    getLatestEvents: builder.query({
      query: () => `/latest`,
    }),
  }),
})

export const { useGetAllEventsQuery, useGetLatestEventsQuery } = eventsApi
