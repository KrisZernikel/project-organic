import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { preferenceZipCodeReducer } from '../reducer'
import { farmersMarketsApi } from '../service'

export const store = configureStore({
  reducer: {
    zipCode: preferenceZipCodeReducer,
    // Add the generated reducer as a specific top-level slice
    [farmersMarketsApi.reducerPath]: farmersMarketsApi.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(farmersMarketsApi.middleware)
})

setupListeners(store.dispatch)
