import { configureStore } from '@reduxjs/toolkit'
import themereducer from '../features/theme/themeSlice'

export const store = configureStore({
  reducer: {
    theme: themereducer,
  },
})

export type appDispatch = typeof store.dispatch

export type rootState = ReturnType<typeof store.getState>
