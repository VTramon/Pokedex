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
      console.log(state.region)
      sessionStorage.setItem('region', state.region)
    },
    toJohto(state) {
      state.region = 'Johto'
      console.log(state.region)
    },
    toHoenn(state) {
      state.region = 'Hoenn'
      console.log(state.region)
    },
    toSinnoh(state) {
      state.region = 'Sinnoh'
      console.log(state.region)
    },
    toUnova(state) {
      state.region = 'Unova'
      console.log(state.region)
    },
    reset(state) {
      state.region = undefined
    },
  },
})

export const { toHoenn, toJohto, toKanto, toSinnoh, toUnova } =
  filterSlice.actions

export default filterSlice.reducer
