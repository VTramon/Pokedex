import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Regions = 'Kanto' | 'Johto' | 'Hoenn' | 'Sinnoh' | 'Unova'

export type Shapes =
  | 'Ball'
  | 'Squiggle'
  | 'Fish'
  | 'Arms'
  | 'Blob'
  | 'Upright'
  | 'Legs'
  | 'Quadruped'
  | 'Wings'
  | 'Tentacles'
  | 'Heads'
  | 'Humanoid'
  | 'BugWings'
  | 'Armor'

export type Types =
  | 'Normal'
  | 'Fighting'
  | 'Flying'
  | 'Poison'
  | 'Ground'
  | 'Rock'
  | 'Bug'
  | 'Ghost'
  | 'Steel'
  | 'Fire'
  | 'Water'
  | 'Grass'
  | 'Electric'
  | 'Psychic'
  | 'Ice'
  | 'Dragon'
  | 'Dark'
  | 'Fairy'
  | 'Unknown'
  | 'Shadow'

export type FilterState = {
  region?: Regions
  type?: Types
  shape?: Shapes
}

const initialState: FilterState = {
  region: undefined,
  type: undefined,
  shape: undefined,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toRegion(state, action: PayloadAction<Regions>) {
      state.shape = undefined
      state.type = undefined
      state.region = action.payload
    },
    toType(state, action: PayloadAction<Types>) {
      state.shape = undefined
      state.region = undefined
      state.type = action.payload
    },
    toShape(state, action: PayloadAction<Shapes>) {
      state.region = undefined
      state.type = undefined
      state.shape = action.payload
    },
  },
})

export const { toRegion, toShape, toType } = filterSlice.actions

export default filterSlice.reducer
