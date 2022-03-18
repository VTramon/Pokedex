import axios from 'axios'
import { useEffect, useState } from 'react'
import { GetPokemon } from 'src/service'
import styles from './PokemonDetails.module.scss'
import {
  PokemonDetailsProps,
  PokemonEvolution,
  PokemonEvolutionPhoto,
  PokemonSpecies,
  weakness,
} from './PokemonDetailsTypes'

const PokemonDetails: React.FC<PokemonDetailsProps> = (props) => {
  const [species, setSpecies] = useState<PokemonSpecies>()
  const [evolutionRawData, setEvolutionRawData] = useState<PokemonEvolution>()
  const [evolutionChain, setEvolutionChain] = useState<
    { name: string; image: string }[]
  >([])

  const normal: [string] = Object.assign(weakness.Normal)
  const bug: [string] = Object.assign(weakness.Bug)

  // useEffect(() => {
  //   normal.map((item: string) => {
  //     const hasEqualValue = bug.some((elem) => elem === item)
  //     if (!hasEqualValue) {
  //       bug.push(item)
  //     }
  //   })
  // }, [])

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
      evolutions.push({ name: first?.species.name!, image: firstImage })

      if (first?.evolves_to && first?.evolves_to.length > 0) {
        const second = first.evolves_to[0]
        const secondImage: string = await handleImagesFromChainEvolution(
          second?.species.name!
        )
        evolutions.push({ name: second.species.name, image: secondImage })

        if (second?.evolves_to && second?.evolves_to.length > 0) {
          const third = second.evolves_to[0]
          const thirdImage: string = await handleImagesFromChainEvolution(
            third?.species.name!
          )
          evolutions.push({ name: third.species.name, image: thirdImage })
        }
      }
    }
    console.log(evolutions)
    setEvolutionChain(evolutions)
  }

  useEffect(() => {
    handlePokemonDetails()
  }, [])

  useEffect(() => {
    console.log('evolutions')
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
        <div>
          <b>Habitat: </b>
          {species?.habitat.name}
        </div>
      </div>

      <br />

      <div className={styles.type}>
        <p>
          <b>Type(s): </b>
          {props.pokemon.types.map((item, index) => {
            return <span key={`${index}  ${item}`}>item.type.name</span>
          })}
        </p>
      </div>
      <br />
      <div>
        <h4>Abilities:</h4>
        {props.pokemon.abilities.map((item, index) => {
          return <p key={`${index}  ${item}`}>{item.ability.name}</p>
        })}
      </div>

      <br />

      <div className={styles.pokemon_stats}>
        <h4>Stats:</h4>

        {props.pokemon.stats.map((item, index) => {
          return (
            <p key={`${index}  ${item}`}>
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
                    key={`${index}  ${item.image}`}
                    src={item.image}
                    alt={`imagem do pokemon ${item.name}`}
                  />
                  <h2 key={`${index}  ${item.name}`}>{item.name}</h2>
                </>
              )
            })
          : undefined}
      </div>
    </div>
  )
}

export default PokemonDetails
