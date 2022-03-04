import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Regions = 'Kanto' | 'Johto' | 'Hoenn' | 'Sinnoh' | 'Unova'

export type Types =
  | 'ball'
  | 'squiggle'
  | 'fish'
  | 'arms'
  | 'blob'
  | 'upright'
  | 'legs'
  | 'quadruped'
  | 'wings'
  | 'tentacles'
  | 'heads'
  | 'humanoid'
  | 'bug-wings'
  | 'armor'

export type Shapes =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy'
  | 'unknown'
  | 'shadow'

type FilterState = {
  value?: Regions | Types | Shapes
}

const initialState: FilterState = {
  value: undefined,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toRegion(state, action: PayloadAction<Regions>) {
      state.value = action.payload
    },
    toType(state, action: PayloadAction<Types>) {
      state.value = action.payload
    },
    toShape(state, action: PayloadAction<Shapes>) {
      state.value = action.payload
    },
  },
})

export const { toRegion, toShape, toType } = filterSlice.actions

export default filterSlice.reducer
