import axios from 'axios'
import { useEffect, useState } from 'react'
import { GetPokemon } from 'src/service'
import styles from './PokemonDetails.module.scss'
import {
  PokemonArea,
  PokemonDetailsProps,
  PokemonEvolution,
  PokemonEvolutionPhoto,
  PokemonSpecies,
} from './PokemonDetailsTypes'

const PokemonDetails: React.FC<PokemonDetailsProps> = (props) => {
  const [species, setSpecies] = useState<PokemonSpecies>()
  const [pokemonWeakness, setPokemonWeakness] = useState<string[]>()
  const [pokemonTypes, setPokemonTypes] = useState<string[]>()
  const [encounterPokemonIn, setEncounterPokemonIn] = useState<string[]>()
  const [evolutionRawData, setEvolutionRawData] = useState<PokemonEvolution>()
  const [evolutionChain, setEvolutionChain] = useState<
    { name: string; image: string }[]
  >([])

  // const normal: [string] = Object.assign(weakness.Normal)
  // const bug: [string] = Object.assign(weakness.Bug)

  // useEffect(() => {
  //   normal.map((item: string) => {
  //     const hasEqualValue = bug.some((elem) => elem === item)
  //     if (!hasEqualValue) {
  //       bug.push(item)
  //     }
  //   })
  // }, [])

  const capitalize = (value: string): string => {
    return value.charAt(0).toUpperCase() + value.slice(1)
  }

  // const handlePokemonWeakness = () => {
  //   const weaknesses: string[] = []

  //   weaknessesPerType.map((item) => {
  //     if (pokemonTypes && item.type === pokemonTypes[0]) {
  //       weaknesses.push(...item.weakness)
  //     }
  //     if (pokemonTypes && item.type === pokemonTypes[1]) {
  //       weaknesses.push(...item.weakness)
  //     }
  //   })
  //   setPokemonWeakness(weaknesses)
  // }

  const handlePokemonTypes = () => {
    const types = props.pokemon.types.map((item) => {
      return capitalize(item.type.name)
    })

    setPokemonTypes(types)
  }
  const handleWhereEncounterThePokemon = async (pokemonName: string) => {
    const response: PokemonArea[] = (await GetPokemon(pokemonName, true)).data

    const result: string[] = response.map((item) => {
      const regex = /(-area)/
      const areas = item.location_area.name.replace(regex, '')
      return capitalize(areas)
    })
    setEncounterPokemonIn(result)
  }

  const handlePokemonDetails = async () => {
    const speciesResponse: PokemonSpecies = (
      await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${props.pokemon.id}`
      )
    ).data

    const evolutionResponse: PokemonEvolution = (
      await axios.get(speciesResponse.evolution_chain.url)
    ).data
    setEvolutionRawData(evolutionResponse)

    setSpecies(speciesResponse)
  }

  const handleImagesFromChainEvolution = async (pokemonName: string) => {
    const response: PokemonEvolutionPhoto = (await GetPokemon(pokemonName)).data
    const result = response.sprites.other['official-artwork'].front_default
    return result
  }

  const handleEvolutionChain = async () => {
    const evolutions: { name: string; image: string }[] = []

    const first = evolutionRawData?.chain
    if (first) {
      const firstImage: string = await handleImagesFromChainEvolution(
        first?.species.name!
      )
      evolutions.push({
        name: capitalize(first?.species.name!),
        image: firstImage,
      })

      if (first?.evolves_to && first?.evolves_to.length > 0) {
        const second = first.evolves_to[0]
        const secondImage: string = await handleImagesFromChainEvolution(
          second?.species.name!
        )
        evolutions.push({
          name: capitalize(second.species.name),
          image: secondImage,
        })

        if (second?.evolves_to && second?.evolves_to.length > 0) {
          const third = second.evolves_to[0]
          const thirdImage: string = await handleImagesFromChainEvolution(
            third?.species.name!
          )
          evolutions.push({
            name: capitalize(third.species.name),
            image: thirdImage,
          })
        }
      }
    }
    setEvolutionChain(evolutions)
  }

  useEffect(() => {
    handlePokemonTypes()
    handlePokemonDetails()
    handleWhereEncounterThePokemon(props.pokemon.name)
  }, [])

  useEffect(() => {
    // handlePokemonWeakness()
  }, [pokemonTypes])

  useEffect(() => {
    handleEvolutionChain()
  }, [evolutionRawData])

  return (
    <div className={styles.container}>
      <h1>{props.pokemon.name}</h1>

      <img
        style={{ width: '300px', height: '300px' }}
        src={props.pokemon.sprites.other['official-artwork'].front_default}
        alt={`${props.pokemon.name} image`}
      />

      <div className={styles.characteristics}>
        <div>
          <b>height: </b>
          {props.pokemon.height / 10} m
        </div>
        <div>
          <b>weight: </b>
          {props.pokemon.weight / 10} Kg
        </div>
        {species && (
          <div>
            <b>Habitat: </b>
            {species.habitat.name}
          </div>
        )}
      </div>

      <br />

      <div className={styles.type}>
        <p>
          <b>Type(s): </b>
          {pokemonTypes &&
            pokemonTypes.map((item, index) => {
              return <p key={index + item}>{item}</p>
            })}
        </p>
      </div>

      <br />

      <div className={styles.weakness}>
        <p>
          <b>Weaknesses: </b>
          {pokemonWeakness &&
            pokemonWeakness.map((item, index) => {
              return <p key={index + item}>{item}</p>
            })}
        </p>
      </div>

      <br />

      <div className={styles.abilities}>
        <h4>Abilities:</h4>
        {props.pokemon.abilities.map((item, index) => {
          return <p key={index + item.ability.name}>{item.ability.name}</p>
        })}
      </div>

      <br />

      <div className={styles.encounter}>
        <h4>Encounter:</h4>
        {encounterPokemonIn &&
          encounterPokemonIn.map((item, index) => {
            return <p key={index + item}>{item}</p>
          })}
      </div>

      <br />

      <div className={styles.pokemon_stats}>
        <h4>Base stats:</h4>

        {props.pokemon.stats.map((item, index) => {
          return (
            <p key={index + item.stat.name}>
              {item.stat.name}: {item.base_stat}
            </p>
          )
        })}
      </div>

      <div className={styles.evolutions}>
        {evolutionChain
          ? evolutionChain.map((item, index) => {
              return (
                <>
                  <img
                    key={index + item.image}
                    src={item.image}
                    alt={`imagem do pokemon ${item.name}`}
                  />
                  <h2 key={index + item.name}>{item.name}</h2>
                </>
              )
            })
          : undefined}
      </div>
    </div>
  )
}

export default PokemonDetails
