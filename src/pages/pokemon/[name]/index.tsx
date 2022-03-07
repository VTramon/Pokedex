import axios from 'axios'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { RequestData } from 'next/dist/server/web/types'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { useEffect } from 'react'

type pokemonBaseProps = {
  name: string
  url: string
}

type PokemonProps = {
  abilities: [
    {
      ability: {
        name: string
        url: string
      }
    }
  ]
  base_experience: number
  forms: [
    {
      name: string
      url: string
    }
  ]
  game_indices: [
    {
      game_index: number
      version: {
        name: string
        url: string
      }
    }
  ]
  height: number
  held_items: [
    {
      item: {
        name: string
        url: string
      }
    }
  ]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: [
    {
      move: {
        name: string
        url: string
      }
      version_group_details: [
        {
          level_learned_at: number
          move_learn_method: {
            name: string
            url: string
          }
          version_group: {
            name: string
            url: string
          }
        }
      ]
    }
  ]
  name: string
  order: number
  species: {
    name: string
    url: string
  }
  sprites: {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
  }
  stats: [
    {
      base_stat: number
      effort: number
      stat: {
        name: string
        url: string
      }
    }
  ]
  types: [
    {
      slot: number
      type: {
        name: string
        url: string
      }
    }
  ]
  weight: number
}

type pageProps = {
  pokemon: PokemonProps
}

const Pokemon = ({ pokemon }: pageProps) => {
  return <div> name: {pokemon.name}</div>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemons = (
    await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1200')
  ).data

  const result: pokemonBaseProps[] = pokemons['results']

  const paths = result.map((pokemon) => ({
    params: {
      name: pokemon.name,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context
  // console.log(params)

  const pokemon: PokemonProps = (
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${params!.name}`)
  ).data

  return {
    props: {
      pokemon,
    },
  }
}

export default Pokemon
