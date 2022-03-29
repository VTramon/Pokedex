import { PokemonProps } from 'src/pages/pokemon/[name]'
import { Types } from 'src/Redux/features/filter/filterSlice'

export type strengthsAndWeaknesses = {
  superWeak: Types[]
  weak: Types[]
  superResistant: Types[]
  resistant: Types[]
  immune: Types[]
  normal: Types[]
}

export type TypeCharacteristics = {
  name: Types
  immuneTo: Types[]
  weakTo: Types[]
  resistantAgainst: Types[]
}

export const weaknessesPerType: TypeCharacteristics[] = [
  {
    name: 'Normal',
    immuneTo: ['Ghost'],
    weakTo: ['Fighting'],
    resistantAgainst: [],
  },
  {
    name: 'Fire',
    immuneTo: [],
    weakTo: ['Water', 'Ground', 'Rock'],
    resistantAgainst: ['Fire', 'Grass', 'Ice', 'Bug', 'Steel', 'Fairy'],
  },
  {
    name: 'Water',
    immuneTo: [],
    weakTo: ['Grass', 'Electric'],
    resistantAgainst: ['Fire', 'Water', 'Ice', 'Steel'],
  },
  {
    name: 'Electric',
    immuneTo: [],
    weakTo: ['Ground'],
    resistantAgainst: ['Electric', 'Flying', 'Steel'],
  },
  {
    name: 'Grass',
    immuneTo: [],
    weakTo: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug'],
    resistantAgainst: ['Water', 'Grass', 'Electric', 'Ground'],
  },
  {
    name: 'Ice',
    immuneTo: [],
    weakTo: ['Fire', 'Fighting', 'Rock', 'Steel'],
    resistantAgainst: ['Ice'],
  },
  {
    name: 'Fighting',
    immuneTo: [],
    weakTo: ['Flying', 'Psychic', 'Fairy'],
    resistantAgainst: ['Bug', 'Rock', 'Dark'],
  },
  {
    name: 'Poison',
    immuneTo: [],
    weakTo: ['Ground', 'Psychic'],
    resistantAgainst: ['Grass', 'Fighting', 'Poison', 'Bug', 'Fairy'],
  },
  {
    name: 'Ground',
    immuneTo: ['Electric'],
    weakTo: ['Water', 'Grass', 'Ice'],
    resistantAgainst: ['Poison', 'Rock'],
  },
  {
    name: 'Flying',
    immuneTo: ['Ground'],
    weakTo: ['Electric', 'Ice', 'Rock'],
    resistantAgainst: ['Grass', 'Fighting', 'Bug'],
  },
  {
    name: 'Psychic',
    immuneTo: [],
    weakTo: ['Bug', 'Ghost', 'Dark'],
    resistantAgainst: ['Fighting', 'Psychic'],
  },
  {
    name: 'Bug',
    immuneTo: [],
    weakTo: ['Fire', 'Flying', 'Rock'],
    resistantAgainst: ['Grass', 'Fighting', 'Ground'],
  },
  {
    name: 'Rock',
    immuneTo: [],
    weakTo: ['Water', 'Grass', 'Fighting', 'Ground', 'Steel'],
    resistantAgainst: ['Normal', 'Fire', 'Poison', 'Flying'],
  },
  {
    name: 'Ghost',
    immuneTo: ['Normal', 'Fighting'],
    weakTo: ['Ghost', 'Dark'],
    resistantAgainst: ['Poison', 'Bug'],
  },
  {
    name: 'Dragon',
    immuneTo: [],
    weakTo: ['Ice', 'Dragon', 'Fairy'],
    resistantAgainst: ['Fire', 'Water', 'Grass', 'Electric'],
  },
  {
    name: 'Dark',
    immuneTo: ['Psychic'],
    weakTo: ['Fighting', 'Bug', 'Fairy'],
    resistantAgainst: ['Ghost', 'Dark'],
  },
  {
    name: 'Steel',
    immuneTo: ['Poison'],
    weakTo: ['Fire', 'Fighting', 'Ground'],
    resistantAgainst: [
      'Normal',
      'Grass',
      'Ice',
      'Flying',
      'Psychic',
      'Bug',
      'Rock',
      'Dragon',
      'Steel',
      'Fairy',
    ],
  },
  {
    name: 'Fairy',
    immuneTo: ['Dragon'],
    weakTo: ['Poison', 'Steel'],
    resistantAgainst: ['Fighting', 'Bug', 'Dark'],
  },
]
// const weaknessesPerType = [
//   {
//     type: 'Normal',
//     strong: [],
//     weak: ['Rock', 'steel'],
//     immune: ['Ghost'],
//     vulnerable: ['Fight'],
//   },
//   {
//     type: 'Fire',
//     strong: ['Grass', 'Ice', 'Bug', 'Steel'],
//     weak: ['Fire', 'Water', 'Rock', 'Dragon'],
//     immune: [],
//     vulnerable: ['Water', 'Ground', 'Rock'],
//   },
//   {
//     type: 'Water',
//     strong: ['Fire', 'Ground', 'Rock'],
//     weak: ['Water', 'Grass', 'Dragon'],
//     immune: [],
//     vulnerable: ['Grass', 'Electric'],
//   },
//   {
//     type: 'Grass',
//     strong: ['Water', 'Ground', 'Rock'],
//     weak: [
//       'Fire',
//       'Grass',
//       'Flying',
//       'Bug',
//       'Poison',
//       'Bug',
//       'Dragon',
//       'Steel',
//     ],
//     immune: [],
//     vulnerable: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug'],
//   },
//   {
//     type: 'Electric',
//     strong: ['Water', 'Flying'],
//     weak: ['Grass', 'Electric', 'Dragon'],
//     immune: ['Ground'],
//     vulnerable: ['Ground'],
//   },
//   {
//     type: 'Ice',
//     strong: ['Grass', 'Ground', 'Flying', 'Dragon'],
//     weak: ['Fire', 'Water', 'Ice', 'Steel'],
//     immune: [],
//     vulnerable: ['Fire', 'Fighting', 'Rock', 'Steel'],
//   },
//   {
//     type: 'Fighting',
//     strong: ['Normal', 'Ice', 'Rock', 'Dark', 'Steel'],
//     weak: ['Poison', 'Flying', 'Psychic', 'Bug', 'Fairy'],
//     immune: ['Ghost'],
//     vulnerable: ['Flying', 'Psychic', 'Fairy'],
//   },
//   {
//     type: 'Poison',
//     strong: ['Grass', 'fairy'],
//     weak: ['Poison', 'Ground', 'Rock', 'Ghost'],
//     immune: ['Steel'],
//     vulnerable: ['Ground', 'Psychic'],
//   },
//   {
//     type: 'Ground',
//     strong: ['Fire', 'Electric', 'Poison', 'Rock', 'Steel'],
//     weak: ['Grass', 'Bug'],
//     immune: ['Flying'],
//     vulnerable: ['Water', 'Grass', 'Ice'],
//   },
//   {
//     type: 'Flying',
//     strong: ['Grass', 'Fighting', 'Bug'],
//     weak: ['Electric', 'Rock', 'Steel'],
//     immune: [],
//     vulnerable: ['Electric', 'Ice', 'Rock'],
//   },
//   {
//     type: 'Psychic',
//     strong: ['Fighting', 'Poison'],
//     weak: ['Psychic', 'Steel'],
//     immune: ['Dark'],
//     vulnerable: ['Bug', 'Ghost', 'Dark'],
//   },
//   {
//     type: 'Bug',
//     strong: ['Grass', 'Psychic', 'Dark'],
//     weak: ['Fire', 'Fighting', 'Poison', 'Flying', 'Ghost', 'Steel', 'Fairy'],
//     immune: [],
//     vulnerable: ['Flying', 'Rock', 'Fire'],
//   },
//   {
//     type: 'Rock',
//     strong: ['Fire', 'Ice', 'Flying', 'Bug'],
//     weak: ['Fighting', 'Ground', 'Steel'],
//     immune: [],
//     vulnerable: ['Water', 'Grass', 'Fighting', 'Ground', 'Steel'],
//   },
//   {
//     type: 'Ghost',
//     strong: ['Psychic', 'Ghost'],
//     weak: ['Normal', 'Dark'],
//     immune: ['Normal'],
//     vulnerable: ['Ghost', 'Dark'],
//   },
//   {
//     type: 'Dragon',
//     strong: ['Dragon'],
//     weak: ['Steel'],
//     immune: ['Fairy'],
//     vulnerable: ['Ice', 'Dragon', 'Fairy'],
//   },
//   {
//     type: 'Dark',
//     strong: ['Psychic', 'Ghost'],
//     weak: ['Fighting', 'Dark', 'Fairy'],
//     immune: [],
//     vulnerable: ['Fighting', 'Bug', 'Fairy'],
//   },
//   {
//     type: 'Steel',
//     strong: ['Ice', 'Rock', 'Fairy'],
//     weak: ['Fire', 'Water', 'Electric', 'Steel'],
//     immune: [],
//     vulnerable: ['Fire', 'Fighting', 'Ground'],
//   },
//   {
//     type: 'Fairy',
//     strong: ['Fighting', 'Dragon', 'Dark'],
//     weak: ['Fire', 'Poison', 'Steel'],
//     immune: [],
//     vulnerable: ['Poison', 'Steel'],
//   },
// ]

// export const weaknessesPerType = [
//   { type: 'Normal', weakness: ['Rock', 'Ghost', 'Steel'] },
//   {
//     type: 'Fighting',
//     weakness: ['Flying', 'Poison', 'Psychic', 'Bug', 'Ghost', 'Fairy'],
//   },
//   { type: 'Flying', weakness: ['Rock', 'Steel', 'Electric'] },
//   { type: 'Poison', weakness: ['Poison', 'Ground', 'Rock', 'Ghost', 'Steel'] },
//   { type: 'Ground', weakness: ['Flying', 'Bug', 'Grass'] },
//   { type: 'Rock', weakness: ['Fighting', 'Ground', 'Steel'] },
//   {
//     type: 'Bug',
//     weakness: [
//       'Fighting',
//       'Flying',
//       'Poison',
//       'Ghost',
//       'Steel',
//       'Fire',
//       'Fairy',
//     ],
//   },
//   { type: 'Ghost', weakness: ['Normal', 'Dark'] },
//   { type: 'Steel', weakness: ['Steel', 'Fire', 'Water', 'Electric'] },
//   { type: 'Fire', weakness: ['Rock', 'Fire', 'Water', 'Dragon'] },
//   { type: 'Water', weakness: ['Water', 'Grass', 'Dragon'] },
//   {
//     type: 'Grass',
//     weakness: ['Flying', 'Poison', 'Bug', 'Steel', 'Fire', 'Grass', 'Dragon'],
//   },
//   { type: 'Electric', weakness: ['Ground', 'Grass', 'Electric', 'Dragon'] },
//   { type: 'Psychic', weakness: ['Steel', 'Psychic', 'Dark'] },
//   { type: 'Ice', weakness: ['Steel', 'Fire', 'Water', 'Ice'] },
//   { type: 'Dragon', weakness: ['Steel', 'Fairy'] },
//   { type: 'Fairy', weakness: ['Poison', 'Steel', 'Fire'] },
//   { type: 'Dark', weakness: ['Fighting', 'Dark', 'Fairy'] },
// ]

export type PokemonDetailsProps = {
  pokemon: PokemonProps
}

export type PokemonSpecies = {
  evolution_chain: {
    url: string
  }
  habitat: {
    name: string
  }
}

export type EvolutionProps = {
  evolves_to: EvolutionProps[]
  species: {
    name: string
    url: string
  }
}

export type PokemonEvolution = {
  chain: {
    evolves_to: EvolutionProps[]
    species: {
      name: string
      url: string
    }
  }
}

export type PokemonEvolutionPhoto = {
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}

export type PokemonArea = {
  location_area: {
    name: string
    url: string
  }
}
