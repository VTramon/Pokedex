import axios from 'axios'
import { useEffect, useState } from 'react'
import { PokemonProps } from '../../pages/pokemon/[name]'
import styles from './PokemonDetails.module.scss'

type PokemonDetailsProps = {
  pokemon: PokemonProps
}

type PokemonSpecies = {
  evolution_chain: {
    url: string
  }
  habitat: {
    name: string
  }
}

type EvolutionProps = {
  evolves_to: EvolutionProps[]
  species: {
    name: string
    url: string
  }
}

type PokemonEvolution = {
  chain: {
    evolves_to: EvolutionProps[]
  }
}

const PokemonDetails: React.FC<PokemonDetailsProps> = (props) => {
  const [species, setSpecies] = useState<PokemonSpecies>()
  const [evolution, setEvolution] = useState<PokemonEvolution>()

  const handlePokemonDetails = async () => {
    const speciesResponse: PokemonSpecies = (
      await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${props.pokemon.id}`
      )
    ).data

    const evolutionResponse: PokemonEvolution = (
      await axios.get(speciesResponse.evolution_chain.url)
    ).data
    setEvolution(evolutionResponse)

    setSpecies(speciesResponse)
  }

  useEffect(() => {
    handlePokemonDetails()
    console.log(evolution)
  }, [])

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
          {props.pokemon.types.map((item) => {
            return item.type.name
          })}
        </p>
      </div>
      <br />
      <div>
        <h4>Abilities:</h4>
        {props.pokemon.abilities.map((item) => {
          return <p>{item.ability.name}</p>
        })}
      </div>

      <br />

      <div className={styles.pokemon_stats}>
        <h4>Stats:</h4>

        {props.pokemon.stats.map((item) => {
          return (
            <p>
              {item.stat.name}: {item.base_stat}
            </p>
          )
        })}
      </div>

      <div className={styles.evolutions}></div>
    </div>
  )
}

export default PokemonDetails
