import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../features/filter/filterSlice'
import themeReducer from '../features/theme/themeSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    filter: filterReducer,
  },
})

export type appDispatch = typeof store.dispatch

export type rootState = ReturnType<typeof store.getState>
