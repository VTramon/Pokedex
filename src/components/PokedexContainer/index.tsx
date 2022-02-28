import { useEffect, useMemo, useState } from 'react'
import { getNationalsPokemons } from '../../service'
import PokemonCard from '../PokemonCard'

type pokemonProps = {
  url: string
  name: string
}

type RawPokemonDataProps = {
  pokemon_species: pokemonProps
}

const PokedexContainer: React.FC = () => {
  const [pokemons, setPokemons] = useState<pokemonProps[]>()

  const GetNationalPokemons = async () => {
    const raw = await getNationalsPokemons
    const response: RawPokemonDataProps[] = raw.data['pokemon_entries']

    const result: pokemonProps[] = response.map((item) => {
      return item.pokemon_species
    })
    setPokemons(result)
  }

  useEffect(() => {
    GetNationalPokemons()
  }, [])

  return (
    <section>
      {pokemons
        ? pokemons.map((item, index) => {
            return (
              <PokemonCard
                name={item.name}
                key={index}
                img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
                alt={`imagem do pokemon de id ${index}`}
              />
            )
          })
        : null}
    </section>
  )
}

export default PokedexContainer
