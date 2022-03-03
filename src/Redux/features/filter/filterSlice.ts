import { createSlice } from '@reduxjs/toolkit'

type FilterState = {
  region?: 'Kanto' | 'Johto' | 'Hoenn' | 'Sinnoh' | 'Unova'
}

const initialState: FilterState = {
  region: undefined,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toKanto(state) {
      state.region = 'Kanto'
    },
    toJohto(state) {
      state.region = 'Johto'
    },
    toHoenn(state) {
      state.region = 'Hoenn'
    },
    toSinnoh(state) {
      state.region = 'Sinnoh'
    },
    toUnova(state) {
      state.region = 'Unova'
    },
    reset(state) {
      state.region = undefined
    },
  },
})

export const { toHoenn, toJohto, toKanto, toSinnoh, toUnova } =
  filterSlice.actions

export default filterSlice.reducer
