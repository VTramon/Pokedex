import { PokemonProps } from 'src/pages/pokemon/[name]'

export const weakness = {
  Normal: ['Rock', 'Ghost', 'Steel'],
  Fighting: ['Flying', 'Poison', 'Psychic', 'Bug', 'Ghost', 'Fairy'],
  Flying: ['Rock', 'Steel', 'Electric'],
  Poison: ['Poison', 'Ground', 'Rock', 'Ghost', 'Steel'],
  Ground: ['Flying', 'Bug', 'Grass'],
  Rock: ['Fighting', 'Ground', 'Steel'],
  Bug: ['Fighting', 'Flying', 'Poison', 'Ghost', 'Steel', 'Fire', 'Fairy'],
  Ghost: ['Normal', 'Dark'],
  Steel: ['Steel', 'Fire', 'Water', 'Electric'],
  Fire: ['Rock', 'Fire', 'Water', 'Dragon'],
  Water: ['Water', 'Grass', 'Dragon'],
  Grass: ['Flying', 'Poison', 'Bug', 'Steel', 'Fire', 'Grass', 'Dragon'],
  Electric: ['Ground', 'Grass', 'Electric', 'Dragon'],
  Psychic: ['Steel', 'Psychic', 'Dark'],
  Ice: ['Steel', 'Fire', 'Water', 'Ice'],
  Dragon: ['Steel', 'Fairy'],
  Fairy: ['Poison', 'Steel', 'Fire'],
  Dark: ['Fighting', 'Dark', 'Fairy'],
}

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
