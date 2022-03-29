import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../Redux/app/hooks'
import {
  FilterState,
  Shapes,
  Types,
} from '../../Redux/features/filter/filterSlice'
import { pokemonRequests } from '../../service'
import PokemonCard from '../PokemonCard'
import styles from './styles.module.scss'
import {
  GetAllPokemonsProps,
  GetRegionPokemonsProps,
  GetTypePokemonsProps,
  pokemonProps,
} from './Types'

const PokemonContainer = () => {
  // const [status, setStatus] = useState({ loading: true })
  const [pokemons, setPokemons] = useState<pokemonProps[]>()
  const [numberOfPokemonsListed, setNumberOfPokemonsListed] = useState(100)

  const parameters = useAppSelector((state) => state.filter)

  const handleRequestsWithParameters = (param: FilterState) => {
    if (param.region) {
      HandleGetRegionPokemon(param.region)
    } else if (param.type) {
      HandleGetTypePokemon(param.type)
    } else if (param.shape) {
      HandleGetShapePokemon(param.shape)
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
          return HandleRequest(pokemonRequests.GetKantoPokemons)
        }
        case 'Johto': {
          return HandleRequest(pokemonRequests.GetJohtoPokemons)
        }
        case 'Hoenn': {
          return HandleRequest(pokemonRequests.GetHoennPokemons)
        }
        case 'Sinnoh': {
          return HandleRequest(pokemonRequests.GetSinnohPokemons)
        }
        case 'Unova': {
          return HandleRequest(pokemonRequests.GetUnovaPokemons)
        }
      }
    }
  }

  const HandleGetTypePokemon = async (type: Types) => {
    const HandleRequest = async (
      eachRequest: Promise<AxiosResponse<any, any>>
    ) => {
      const response: GetTypePokemonsProps = (await eachRequest).data['pokemon']
      const result: pokemonProps[] = response.map((item) => {
        const name = item.pokemon.name
        const url = item.pokemon.url
        return { name, url }
      })
      sessionStorage.setItem(`Get${type}Pokemons`, JSON.stringify(result))
      setPokemons(result)
    }

    const storage = sessionStorage.getItem(`Get${type}Pokemons`)

    if (storage) {
      setPokemons(JSON.parse(storage))
    } else {
      switch (type) {
        case 'Normal': {
          return HandleRequest(pokemonRequests.GetNormalPokemons)
        }
        case 'Fighting': {
          HandleRequest(pokemonRequests.GetFightingPokemons)
          break
        }
        case 'Flying': {
          HandleRequest(pokemonRequests.GetFlyingPokemons)
          break
        }
        case 'Poison': {
          HandleRequest(pokemonRequests.GetPoisonPokemons)
          break
        }
        case 'Ground': {
          HandleRequest(pokemonRequests.GetGroundPokemons)
          break
        }
        case 'Rock': {
          HandleRequest(pokemonRequests.GetRockPokemons)
          break
        }
        case 'Bug': {
          HandleRequest(pokemonRequests.GetBugPokemons)
          break
        }
        case 'Ghost': {
          HandleRequest(pokemonRequests.GetGhostPokemons)
          break
        }
        case 'Steel': {
          HandleRequest(pokemonRequests.GetSteelPokemons)
          break
        }
        case 'Fire': {
          HandleRequest(pokemonRequests.GetFirePokemons)
          break
        }
        case 'Water': {
          HandleRequest(pokemonRequests.GetWaterPokemons)
          break
        }
        case 'Grass': {
          HandleRequest(pokemonRequests.GetGrassPokemons)
          break
        }
        case 'Electric': {
          HandleRequest(pokemonRequests.GetElectricPokemons)
          break
        }
        case 'Psychic': {
          HandleRequest(pokemonRequests.GetPsychicPokemons)
          break
        }
        case 'Ice': {
          HandleRequest(pokemonRequests.GetIcePokemons)
          break
        }
        case 'Dragon': {
          HandleRequest(pokemonRequests.GetDragonPokemons)
          break
        }
        case 'Dark': {
          HandleRequest(pokemonRequests.GetDarkPokemons)
          break
        }
        case 'Fairy': {
          HandleRequest(pokemonRequests.GetFairyPokemons)
          break
        }
        case 'Unknown': {
          HandleRequest(pokemonRequests.GetUnknownPokemons)
          break
        }
        case 'Shadow': {
          HandleRequest(pokemonRequests.GetShadowPokemons)
          break
        }
      }
    }
  }

  const HandleGetShapePokemon = async (shape: Shapes) => {
    const HandleRequest = async (
      eachRequest: Promise<AxiosResponse<any, any>>
    ) => {
      const response = (await eachRequest).data['pokemon_species']
      sessionStorage.setItem(
        `Get${shape}ShapePokemons`,
        JSON.stringify(response)
      )
      setPokemons(response)
    }

    const storage = sessionStorage.getItem(`Get${shape}ShapePokemons`)

    if (storage) {
      setPokemons(JSON.parse(storage))
    } else {
      switch (shape) {
        case 'Ball': {
          HandleRequest(pokemonRequests.GetBallShapePokemons)
          break
        }
        case 'Squiggle': {
          HandleRequest(pokemonRequests.GetSquiggleShapePokemons)
          break
        }
        case 'Fish': {
          HandleRequest(pokemonRequests.GetFishShapePokemons)
          break
        }
        case 'Arms': {
          HandleRequest(pokemonRequests.GetArmsShapePokemons)
          break
        }
        case 'Blob': {
          HandleRequest(pokemonRequests.GetBlobShapePokemons)
          break
        }
        case 'Upright': {
          HandleRequest(pokemonRequests.GetUprightShapePokemons)
          break
        }
        case 'Legs': {
          HandleRequest(pokemonRequests.GetLegsShapePokemons)
          break
        }
        case 'Quadruped': {
          HandleRequest(pokemonRequests.GetQuadrupedShapePokemons)
          break
        }
        case 'Wings': {
          HandleRequest(pokemonRequests.GetWingsShapePokemons)
          break
        }
        case 'Tentacles': {
          HandleRequest(pokemonRequests.GetTentaclesShapePokemons)
          break
        }
        case 'Heads': {
          HandleRequest(pokemonRequests.GetHeadsShapePokemons)
          break
        }
        case 'Humanoid': {
          HandleRequest(pokemonRequests.GetHumanoidShapePokemons)
          break
        }
        case 'BugWings': {
          HandleRequest(pokemonRequests.GetBugwingsShapePokemons)
          break
        }
        case 'Armor': {
          HandleRequest(pokemonRequests.GetArmorShapePokemons)
          break
        }
      }
    }
  }
  const HandleGetAllPokemons = async () => {
    const storage = sessionStorage.getItem('GetAllPokemons')
    if (storage) {
      setPokemons(JSON.parse(storage))
    } else {
      const response: GetAllPokemonsProps = (
        await pokemonRequests.GetAllPokemons
      ).data

      const result: pokemonProps[] = response['results']!.map((item) => {
        return item
      })

      sessionStorage.setItem('GetAllPokemons', JSON.stringify(result))
      setPokemons(result)
    }
  }

  const ReturnTheCorrectPokemonImageNumbers = (value: number) => {
    if (value < 898) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${value}.png`
    } else {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        value + 9102
      }.png`
    }
  }

  const HandleCard = () => {
    const result = pokemons
      ?.slice(0, numberOfPokemonsListed)
      .map((item, index) => {
        // get the pokemon id using the url

        const itemSplit = pokemons[index].url.split('/')
        const imgNumber = itemSplit[itemSplit.length - 2]
        return (
          <PokemonCard
            // onLoading={() => setStatus({ loading: false })}
            name={item.name}
            key={index}
            img={ReturnTheCorrectPokemonImageNumbers(parseInt(imgNumber))}
            alt={`imagem do pokemon de id ${index}`}
          />
        )
      })
    return result
  }
  useEffect(() => {
    if (parameters.region) {
      handleRequestsWithParameters(parameters)
    } else if (parameters.type) {
      handleRequestsWithParameters(parameters)
    } else if (parameters.shape) {
      handleRequestsWithParameters(parameters)
    } else {
      HandleGetAllPokemons()
    }
  }, [parameters])

  return (
    <>
      {/* {status.loading === true && <Loader />} */}
      <section
        className={styles.outer_container}
        data-testid="Pokemon-container"
      >
        <div className={styles.container}>{HandleCard()}</div>
        <button
          data-testid="container-button"
          onClick={() => setNumberOfPokemonsListed((state) => state + 100)}
          disabled={numberOfPokemonsListed >= 1126 ? true : false}
        >
          more
        </button>
      </section>
    </>
  )
}

export default PokemonContainer
