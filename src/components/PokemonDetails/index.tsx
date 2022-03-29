import axios from 'axios'
import { useEffect, useState } from 'react'
import { Types } from 'src/Redux/features/filter/filterSlice'
import { GetPokemon } from 'src/service'
import styles from './styles.module.scss'
import {
  PokemonArea,
  PokemonDetailsProps,
  PokemonEvolution,
  PokemonEvolutionPhoto,
  PokemonSpecies,
  strengthsAndWeaknesses,
  TypeCharacteristics,
  weaknessesPerType,
} from './Types'

const PokemonDetails: React.FC<PokemonDetailsProps> = (props) => {
  const [species, setSpecies] = useState<PokemonSpecies>()
  const [strengthsAndWeaknesses, setStrengthsAndWeaknesses] =
    useState<strengthsAndWeaknesses>()
  const [pokemonTypes, setPokemonTypes] = useState<TypeCharacteristics[]>([])
  const [encounterPokemonIn, setEncounterPokemonIn] = useState<string[]>()
  const [evolutionRawData, setEvolutionRawData] = useState<PokemonEvolution>()
  const [evolutionChain, setEvolutionChain] = useState<
    { name: string; image: string }[]
  >([])

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

  const handlePokemonWeaknesses = () => {
    const superWeak: Types[] = []
    const weak: Types[] = []
    const superResistant: Types[] = []
    const resistant: Types[] = []
    const immune: Types[] = []
    const normal: Types[] = []

    weaknessesPerType
      .map(
        (TypeCharacteristics: TypeCharacteristics) => TypeCharacteristics.name
      )
      .forEach((p: Types) => {
        if (pokemonTypes) {
          const type1 = pokemonTypes[0]
          const type2: TypeCharacteristics | null = pokemonTypes[1]

          if (type1 && !type2) {
            if (type1.weakTo.includes(p)) weak.push(p)
            else if (type1.resistantAgainst.includes(p)) resistant.push(p)
            else if (type1.immuneTo.includes(p)) immune.push(p)
            else normal.push(p)
          } else if (type1 && type2) {
            if (type1.weakTo.includes(p) && type2.weakTo.includes(p)) {
              superWeak.push(p)
            } else if (
              type1.resistantAgainst.includes(p) &&
              type2.resistantAgainst.includes(p)
            ) {
              superResistant.push(p)
            } else if (
              (type1.weakTo.includes(p) &&
                type2.resistantAgainst.includes(p)) ||
              (type1.resistantAgainst.includes(p) && type2.weakTo.includes(p))
            ) {
              normal.push(p)
            } else if (
              type1.immuneTo.includes(p) ||
              type2.immuneTo.includes(p)
            ) {
              immune.push(p)
            } else if (
              [...type1.weakTo, ...type2.weakTo].filter((v) => v === p)
                .length == 1
            ) {
              weak.push(p)
            } else if (
              [...type1.resistantAgainst, ...type2.resistantAgainst].filter(
                (v) => v === p
              ).length == 1
            ) {
              resistant.push(p)
            } else {
              normal.push(p)
            }
          }
        }
      })

    setStrengthsAndWeaknesses({
      superWeak,
      weak,
      superResistant,
      resistant,
      immune,
      normal,
    })
  }
  const handlePokemonTypes = () => {
    const types: TypeCharacteristics[] = []
    props.pokemon.types.map((item) => {
      weaknessesPerType.map((weakness) => {
        if (weakness.name === capitalize(item.type.name)) {
          types.push(weakness)
        }
      })
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
    handlePokemonWeaknesses()
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
          <h3>height: </h3>
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
        <h3>Type(s): </h3>
        {pokemonTypes &&
          pokemonTypes.map((item, index) => {
            return <p key={'Type' + index + item.name}>{item.name}</p>
          })}
      </div>

      <br />

      <div className={styles.strengths_and_weaknesses}>
        <h3>Strengths and weaknesses: </h3>
        <div>
          <h4>Immune:</h4>
          {strengthsAndWeaknesses?.immune &&
            strengthsAndWeaknesses.immune.map((item, index) => {
              return <p key={'Immune' + index + item}>{item}</p>
            })}
        </div>

        <div>
          <h4>Super Resistant:</h4>
          {strengthsAndWeaknesses?.superResistant &&
            strengthsAndWeaknesses.superResistant.map((item, index) => {
              return <p key={'Super Resistant' + index + item}>{item}</p>
            })}
        </div>

        <div>
          <h4>Resistant:</h4>
          {strengthsAndWeaknesses?.resistant &&
            strengthsAndWeaknesses.resistant.map((item, index) => {
              return <p key={'Resistant' + index + item}>{item}</p>
            })}
        </div>

        <div>
          <h4>Normal:</h4>
          {strengthsAndWeaknesses?.normal &&
            strengthsAndWeaknesses.normal.map((item, index) => {
              return <p key={'Normal' + index + item}>{item}</p>
            })}
        </div>

        <div>
          <h4>Weak:</h4>
          {strengthsAndWeaknesses?.weak &&
            strengthsAndWeaknesses.weak.map((item, index) => {
              return <p key={'Weak' + index + item}>{item}</p>
            })}
        </div>

        <div>
          <h4>Super Weak:</h4>
          {strengthsAndWeaknesses?.superWeak &&
            strengthsAndWeaknesses.superWeak.map((item, index) => {
              return <p key={'Super Weak' + index + item}>{item}</p>
            })}
        </div>
      </div>

      <br />

      <div className={styles.abilities}>
        <h3>Abilities:</h3>
        {props.pokemon.abilities.map((item, index) => {
          return (
            <p key={'Abilities' + index + item.ability.name}>
              {item.ability.name}
            </p>
          )
        })}
      </div>

      <br />

      <div className={styles.encounter}>
        <h3>Encounter:</h3>
        {encounterPokemonIn &&
          encounterPokemonIn.map((item, index) => {
            return <p key={'Encounter' + index + item}>{item}</p>
          })}
      </div>

      <br />

      <div className={styles.pokemon_stats}>
        <h3>Base stats:</h3>

        {props.pokemon.stats.map((item, index) => {
          return (
            <p key={'Base stats' + index + item.stat.name}>
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
                    key={'evolutionChain' + index + item.image}
                    src={item.image}
                    alt={`imagem do pokemon ${item.name}`}
                  />
                  <h2 key={'evolutionChain' + index + item.name}>
                    {item.name}
                  </h2>
                </>
              )
            })
          : undefined}
      </div>
    </div>
  )
}

export default PokemonDetails
