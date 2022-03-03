import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import {
  GetAllPokemons,
  GetHoennPokemons,
  GetJohtoPokemons,
  GetKantoPokemons,
  GetSinnohPokemons,
  GetUnovaPokemons,
} from '../../service'
import PokemonCard from '../PokemonCard'
import styles from './PokemonContainer.module.scss'

type pokemonProps = {
  url: string
  name: string
}

type GetAllPokemonsProps = {
  results: pokemonProps[]
}
type GetRegionPokemonsProps = {
  pokemon_species: pokemonProps
}

type PokemonContainerProps = {
  parameters?: parameters
}

type parameters = {
  region?: 'Kanto' | 'Johto' | 'Hoenn' | 'Sinnoh' | 'Unova'
}

const PokemonContainer: React.FC<PokemonContainerProps> = ({ parameters }) => {
  const [pokemons, setPokemons] = useState<pokemonProps[]>()
  const [numberOfPokemonsListed, setNumberOfPokemonsListed] = useState(100)

  const handleRequestsWithParameters = (param: parameters) => {
    if (param.region) {
      HandleGetRegionPokemon(param.region)
    }
  }

  const HandleGetRegionPokemon = async (region: string) => {
    const HandleRequest = async (
      eachRequest: Promise<AxiosResponse<any, any>>
    ) => {
      const response: GetRegionPokemonsProps[] = (await eachRequest).data[
        'pokemon_entries'
      ]
      const result: pokemonProps[] = response.map((item) => {
        return item.pokemon_species
      })

      sessionStorage.setItem(`Get${region}Pokemons`, JSON.stringify(result))
      setPokemons(result)
    }
    const storage = sessionStorage.getItem(`Get${region}Pokemons`)
    if (storage) {
      setPokemons(JSON.parse(storage))
    } else {
      switch (region) {
        case 'Kanto': {
          return HandleRequest(GetKantoPokemons)
        }
        case 'Johto': {
          return HandleRequest(GetJohtoPokemons)
        }
        case 'Hoenn': {
          return HandleRequest(GetHoennPokemons)
        }
        case 'Sinnoh': {
          return HandleRequest(GetSinnohPokemons)
        }
        case 'Unova': {
          return HandleRequest(GetUnovaPokemons)
        }
      }
    }
  }

  const HandleGetAllPokemons = async () => {
    const storage = sessionStorage.getItem('GetAllPokemons')
    if (storage) {
      setPokemons(JSON.parse(storage))
    } else {
      const response: GetAllPokemonsProps = (await GetAllPokemons).data

      const result: pokemonProps[] = response['results']!.map((item) => {
        return item
      })

      sessionStorage.setItem('GetAllPokemons', JSON.stringify(result))
      setPokemons(result)
    }
  }

  const ReturnTheCorrectPokemonImageNumbers = (
    index: number,
    value: number
  ) => {
    if (index < 898) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + value
      }.png`
    } else {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + value + 9102
      }.png`
    }
  }

  const HandleImage = (index: number, region?: parameters) => {
    if (region) {
      switch (region.region) {
        case 'Kanto':
          return ReturnTheCorrectPokemonImageNumbers(index, 1)

        case 'Johto':
          return ReturnTheCorrectPokemonImageNumbers(index, 152)

        case 'Hoenn':
          return ReturnTheCorrectPokemonImageNumbers(index, 252)

        case 'Sinnoh':
          return ReturnTheCorrectPokemonImageNumbers(index, 387)

        case 'Unova':
          return ReturnTheCorrectPokemonImageNumbers(index, 494)
      }
    }
    return ReturnTheCorrectPokemonImageNumbers(index, 1)
  }

  useEffect(() => {
    if (parameters?.region !== undefined) {
      handleRequestsWithParameters(parameters)
    } else {
      HandleGetAllPokemons()
    }
  }, [parameters])

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
                  img={HandleImage(index)}
                  alt={`imagem do pokemon de id ${index}`}
                />
              )
            }) ||
            (pokemons && parameters?.region)
            ? pokemons.slice(0, numberOfPokemonsListed).map((item, index) => {
                return (
                  <PokemonCard
                    name={item.name}
                    key={index}
                    img={HandleImage(index, parameters)}
                    alt={`imagem do pokemon de id ${index}`}
                  />
                )
              })
            : undefined
          : undefined}
      </div>
      <button
        data-testid="container-button"
        onClick={() => setNumberOfPokemonsListed((state) => state + 100)}
        disabled={numberOfPokemonsListed >= 1126 ? true : false}
      >
        more
      </button>
    </section>
  )
}

export default PokemonContainer
