import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const farmersMarketsApi = createApi({
  reducerPath: 'farmersMarketsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/' }),
  endpoints: (builder) => ({
    getFarmersMarketsByZipCode: builder.query({
      query: (zipCode) => `zipSearch?zip=${zipCode}`
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFarmersMarketsByZipCodeQuery } = farmersMarketsApi
