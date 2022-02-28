import { useEffect, useState } from 'react'
import { GetAllPokemons } from '../../service'
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

  const HandleGetAllPokemons = async () => {
    const storage = sessionStorage.getItem('GetAllPokemons')
    if (storage) {
      setPokemons(JSON.parse(storage))
    } else {
      const response: RawPokemonDataProps[] = (await GetAllPokemons).data[
        'pokemon_entries'
      ]

      const result: pokemonProps[] = response.map((item) => {
        return item.pokemon_species
      })

      sessionStorage.setItem('AllPokemons', JSON.stringify(result))
      setPokemons(result)
    }
  }

  useEffect(() => {
    HandleGetAllPokemons()
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
