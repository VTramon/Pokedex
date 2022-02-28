import axios from 'axios'

const GetAllPokemons = axios.get('https://pokeapi.co/api/v2/pokedex/1')
const getKantoPokemons = axios.get('https://pokeapi.co/api/v2/pokedex/2')
const getJohtoPokemons = axios.get('https://pokeapi.co/api/v2/pokedex/7')
const getHoennPokemons = axios.get('https://pokeapi.co/api/v2/pokedex/15')
const getSinnohPokemons = axios.get('https://pokeapi.co/api/v2/pokedex/6')
const getUnovaPokemons = axios.get('https://pokeapi.co/api/v2/pokedex/9')

export {
  GetAllPokemons,
  getKantoPokemons,
  getJohtoPokemons,
  getHoennPokemons,
  getSinnohPokemons,
  getUnovaPokemons,
}
