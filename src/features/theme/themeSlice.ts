import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ThemeState = {
  value: 'light' | 'dark'
}

const initialState: ThemeState = {
  value: 'light',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toDark(state) {
      state.value = 'dark'
    },
    toLight(state) {
      state.value = 'light'
    },
  },
})

export const { toDark, toLight } = themeSlice.actions

export default themeSlice.reducer
