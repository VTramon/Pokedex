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
