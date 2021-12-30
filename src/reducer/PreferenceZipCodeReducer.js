import { setPreferenceZipCodeAction } from '../action'
import { createReducer, createDraftSafeSelector } from '@reduxjs/toolkit'

const preferenceZipCodeStorageKey = 'preferenceZipCode'

function setLocalStorageItem (key, value) {
  window.localStorage.setItem(key, value)
}

function initialState () {
  let preferenceZipCode = window.localStorage.getItem('preferenceZipCode')

  if (preferenceZipCode === null) {
    preferenceZipCode = ''

    window.localStorage.setItem(preferenceZipCodeStorageKey, preferenceZipCode)

    setLocalStorageItem(preferenceZipCodeStorageKey, preferenceZipCode)
  }

  return preferenceZipCode
}

export const preferenceZipCodeReducer = createReducer(initialState, builder => {
  builder.addCase(setPreferenceZipCodeAction, (state, action) => {
    const value = action.payload

    setLocalStorageItem(preferenceZipCodeStorageKey, value)

    return value
  })
})

const selectSelf = state => state

export const selectPreferenceZipCode = createDraftSafeSelector(
  selectSelf,
  state => state.zipCode
)
