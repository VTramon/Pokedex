import { configureStore } from '@reduxjs/toolkit'
import themereducer from '../features/theme/themeSlice'
import filterReducer from '../features/filter/filterSlice'

export const store = configureStore({
  reducer: {
    theme: themereducer,
    filter: filterReducer,
  },
})

export type appDispatch = typeof store.dispatch

export type rootState = ReturnType<typeof store.getState>
