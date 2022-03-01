import { useEffect, useState } from 'react'
import { GetAllPokemons } from '../../service'
import PokemonCard from '../PokemonCard'
import styles from './PokemonContainer.module.scss'

type pokemonProps = {
  url: string
  name: string
}

type RawPokemonDataProps = {
  pokemon_species: pokemonProps
}

const PokemonContainer: React.FC = () => {
  const [pokemons, setPokemons] = useState<pokemonProps[]>()
  const [numberOfPokemonsListed, setNumberOfPokemonsListed] =
    useState<number>(50)

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
    <section
      className={styles.outter_container}
      data-testid="pokemon-container"
    >
      <div className={styles.container}>
        {pokemons
          ? pokemons.slice(0, numberOfPokemonsListed).map((item, index) => {
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
      </div>
      <button
        data-testid="container-button"
        onClick={() => setNumberOfPokemonsListed((state) => state + 100)}
      >
        more
      </button>
    </section>
  )
}

export default PokemonContainer
