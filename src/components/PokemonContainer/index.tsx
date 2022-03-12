import { AxiosResponse } from 'axios'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {
  GetAllPokemons,
  GetArmorShapePokemons,
  GetArmsShapePokemons,
  GetBallShapePokemons,
  GetBlobShapePokemons,
  GetBugPokemons,
  GetBugwingsShapePokemons,
  GetDarkPokemons,
  GetDragonPokemons,
  GetElectricPokemons,
  GetFairyPokemons,
  GetFightingPokemons,
  GetFirePokemons,
  GetFishShapePokemons,
  GetFlyingPokemons,
  GetGhostPokemons,
  GetGrassPokemons,
  GetGroundPokemons,
  GetHeadsShapePokemons,
  GetHoennPokemons,
  GetHumanoidShapePokemons,
  GetIcePokemons,
  GetJohtoPokemons,
  GetKantoPokemons,
  GetLegsShapePokemons,
  GetNormalPokemons,
  GetPoisonPokemons,
  GetPsychicPokemons,
  GetQuadrupedShapePokemons,
  GetRockPokemons,
  GetShadowPokemons,
  GetSinnohPokemons,
  GetSquiggleShapePokemons,
  GetSteelPokemons,
  GetTentaclesShapePokemons,
  GetUnknownPokemons,
  GetUnovaPokemons,
  GetUprightShapePokemons,
  GetWaterPokemons,
  GetWingsShapePokemons,
} from '../../service'
import PokemonCard from '../PokemonCard'
import styles from './PokemonContainer.module.scss'
import { useAppSelector } from '../../Redux/app/hooks'
import {
  FilterState,
  Shapes,
  Types,
} from '../../Redux/features/filter/filterSlice'
import Loader from '../Loader'

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

type GetTypePokemonsProps = [
  {
    pokemon: pokemonProps
  }
]

const PokemonContainer = () => {
  const [status, setStatus] = useState({ loading: true })
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
          // console.log(type)
          return HandleRequest(GetNormalPokemons)
        }
        case 'Fighting': {
          HandleRequest(GetFightingPokemons)
          break
        }
        case 'Flying': {
          HandleRequest(GetFlyingPokemons)
          break
        }
        case 'Poison': {
          HandleRequest(GetPoisonPokemons)
          break
        }
        case 'Ground': {
          HandleRequest(GetGroundPokemons)
          break
        }
        case 'Rock': {
          HandleRequest(GetRockPokemons)
          break
        }
        case 'Bug': {
          HandleRequest(GetBugPokemons)
          break
        }
        case 'Ghost': {
          HandleRequest(GetGhostPokemons)
          break
        }
        case 'Steel': {
          HandleRequest(GetSteelPokemons)
          break
        }
        case 'Fire': {
          HandleRequest(GetFirePokemons)
          break
        }
        case 'Water': {
          HandleRequest(GetWaterPokemons)
          break
        }
        case 'Grass': {
          HandleRequest(GetGrassPokemons)
          break
        }
        case 'Electric': {
          HandleRequest(GetElectricPokemons)
          break
        }
        case 'Psychic': {
          HandleRequest(GetPsychicPokemons)
          break
        }
        case 'Ice': {
          HandleRequest(GetIcePokemons)
          break
        }
        case 'Dragon': {
          HandleRequest(GetDragonPokemons)
          break
        }
        case 'Dark': {
          HandleRequest(GetDarkPokemons)
          break
        }
        case 'Fairy': {
          HandleRequest(GetFairyPokemons)
          break
        }
        case 'Unknown': {
          HandleRequest(GetUnknownPokemons)
          break
        }
        case 'Shadow': {
          HandleRequest(GetShadowPokemons)
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
          HandleRequest(GetBallShapePokemons)
          break
        }
        case 'Squiggle': {
          HandleRequest(GetSquiggleShapePokemons)
          break
        }
        case 'Fish': {
          HandleRequest(GetFishShapePokemons)
          break
        }
        case 'Arms': {
          HandleRequest(GetArmsShapePokemons)
          break
        }
        case 'Blob': {
          HandleRequest(GetBlobShapePokemons)
          break
        }
        case 'Upright': {
          HandleRequest(GetUprightShapePokemons)
          break
        }
        case 'Legs': {
          HandleRequest(GetLegsShapePokemons)
          break
        }
        case 'Quadruped': {
          HandleRequest(GetQuadrupedShapePokemons)
          break
        }
        case 'Wings': {
          HandleRequest(GetWingsShapePokemons)
          break
        }
        case 'Tentacles': {
          HandleRequest(GetTentaclesShapePokemons)
          break
        }
        case 'Heads': {
          HandleRequest(GetHeadsShapePokemons)
          break
        }
        case 'Humanoid': {
          HandleRequest(GetHumanoidShapePokemons)
          break
        }
        case 'BugWings': {
          HandleRequest(GetBugwingsShapePokemons)
          break
        }
        case 'Armor': {
          HandleRequest(GetArmorShapePokemons)
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
      const response: GetAllPokemonsProps = (await GetAllPokemons).data

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
            onLoading={() => setStatus({ loading: false })}
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
      {status.loading === true && <Loader />}
      <section
        className={styles.outter_container}
        data-testid="pokemon-container"
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
