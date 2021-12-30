import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const farmersMarketsApi = createApi({
  reducerPath: 'farmersMarketsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://search.ams.usda.gov/',
    fetchFn: (...args) => {
      const init = (args[1] || {}).cache = ({ cache: 'force-cache' })

      args[1] = init

      return fetch(...args)
    }
  }),
  endpoints: (builder) => ({
    getFarmersMarketsByZipCode: builder.query({
      query: (zipCode) => `farmersmarkets/v1/data.svc/zipSearch?zip=${zipCode}`
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFarmersMarketsByZipCodeQuery } = farmersMarketsApi
