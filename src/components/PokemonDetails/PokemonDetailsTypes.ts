import { PokemonProps } from 'src/pages/pokemon/[name]'

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
