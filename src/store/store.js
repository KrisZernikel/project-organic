import { configureStore } from '@reduxjs/toolkit'
import { preferenceZipCodeReducer } from '../reducer'

export const store = configureStore({
  reducer: {
    zipCode: preferenceZipCodeReducer
  }
})
