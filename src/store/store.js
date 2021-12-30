import { configureStore } from '@reduxjs/toolkit'
import { zipCodeReducer } from '../reducer'

export const store = configureStore({
  reducer: {
    zipCode: zipCodeReducer
  }
})
