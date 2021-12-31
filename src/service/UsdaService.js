import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const farmersMarketsApi = createApi({
  reducerPath: 'farmersMarketsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://search.ams.usda.gov/'
  }),
  endpoints: (builder) => ({
    getFarmersMarketsByZipCode: builder.query({
      query: (zipCode) => {
        return {
          url: `farmersmarkets/v1/data.svc/zipSearch?zip=${zipCode}`,
          cache: 'default'
        }
      }
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFarmersMarketsByZipCodeQuery } = farmersMarketsApi
