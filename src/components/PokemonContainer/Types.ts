export type pokemonProps = {
  url: string
  name: string
}

export type GetAllPokemonsProps = {
  results: pokemonProps[]
}

export type GetRegionPokemonsProps = {
  pokemon_species: pokemonProps
}

export type GetTypePokemonsProps = [
  {
    pokemon: pokemonProps
  }
]
