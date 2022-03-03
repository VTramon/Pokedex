import axios from 'axios'

const GetAllPokemons = axios.get('https://pokeapi.co/api/v2/pokemon?limit=1126')
const GetKantoPokemons = axios.get('https://pokeapi.co/api/v2/pokedex/2')
const GetJohtoPokemons = axios.get('https://pokeapi.co/api/v2/pokedex/7')
const GetHoennPokemons = axios.get('https://pokeapi.co/api/v2/pokedex/15')
const GetSinnohPokemons = axios.get('https://pokeapi.co/api/v2/pokedex/6')
const GetUnovaPokemons = axios.get('https://pokeapi.co/api/v2/pokedex/9')

export {
  GetAllPokemons,
  GetKantoPokemons,
  GetJohtoPokemons,
  GetHoennPokemons,
  GetSinnohPokemons,
  GetUnovaPokemons,
}
