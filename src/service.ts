import axios from 'axios'

const GetPokemon = (value: string) =>
  axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)

const pokemonRequests = {
  GetAllPokemons: axios.get('https://pokeapi.co/api/v2/pokemon?limit=1126'),
  GetKantoPokemons: axios.get('https://pokeapi.co/api/v2/pokedex/2'),
  GetJohtoPokemons: axios.get('https://pokeapi.co/api/v2/pokedex/7'),
  GetHoennPokemons: axios.get('https://pokeapi.co/api/v2/pokedex/15'),
  GetSinnohPokemons: axios.get('https://pokeapi.co/api/v2/pokedex/6'),
  GetUnovaPokemons: axios.get('https://pokeapi.co/api/v2/pokedex/9'),

  GetNormalPokemons: axios.get('https://pokeapi.co/api/v2/type/1'),
  GetFightingPokemons: axios.get('https://pokeapi.co/api/v2/type/2'),
  GetFlyingPokemons: axios.get('https://pokeapi.co/api/v2/type/3'),
  GetPoisonPokemons: axios.get('https://pokeapi.co/api/v2/type/4'),
  GetGroundPokemons: axios.get('https://pokeapi.co/api/v2/type/5'),
  GetRockPokemons: axios.get('https://pokeapi.co/api/v2/type/6'),
  GetBugPokemons: axios.get('https://pokeapi.co/api/v2/type/7'),
  GetGhostPokemons: axios.get('https://pokeapi.co/api/v2/type/8'),
  GetSteelPokemons: axios.get('https://pokeapi.co/api/v2/type/9'),
  GetFirePokemons: axios.get('https://pokeapi.co/api/v2/type/10'),
  GetWaterPokemons: axios.get('https://pokeapi.co/api/v2/type/11'),
  GetGrassPokemons: axios.get('https://pokeapi.co/api/v2/type/12'),
  GetElectricPokemons: axios.get('https://pokeapi.co/api/v2/type/13'),
  GetPsychicPokemons: axios.get('https://pokeapi.co/api/v2/type/14'),
  GetIcePokemons: axios.get('https://pokeapi.co/api/v2/type/15'),
  GetDragonPokemons: axios.get('https://pokeapi.co/api/v2/type/16'),
  GetDarkPokemons: axios.get('https://pokeapi.co/api/v2/type/17'),
  GetFairyPokemons: axios.get('https://pokeapi.co/api/v2/type/18'),
  GetUnknownPokemons: axios.get('https://pokeapi.co/api/v2/type/10001'),
  GetShadowPokemons: axios.get('https://pokeapi.co/api/v2/type/10002'),

  GetBallShapePokemons: axios.get('https://pokeapi.co/api/v2/pokemon-shape/1'),
  GetSquiggleShapePokemons: axios.get(
    'https://pokeapi.co/api/v2/pokemon-shape/2'
  ),
  GetFishShapePokemons: axios.get('https://pokeapi.co/api/v2/pokemon-shape/3'),
  GetArmsShapePokemons: axios.get('https://pokeapi.co/api/v2/pokemon-shape/4'),
  GetBlobShapePokemons: axios.get('https://pokeapi.co/api/v2/pokemon-shape/5'),
  GetUprightShapePokemons: axios.get(
    'https://pokeapi.co/api/v2/pokemon-shape/6'
  ),
  GetLegsShapePokemons: axios.get('https://pokeapi.co/api/v2/pokemon-shape/7'),
  GetQuadrupedShapePokemons: axios.get(
    'https://pokeapi.co/api/v2/pokemon-shape/8'
  ),
  GetWingsShapePokemons: axios.get('https://pokeapi.co/api/v2/pokemon-shape/9'),
  GetTentaclesShapePokemons: axios.get(
    'https://pokeapi.co/api/v2/pokemon-shape/10'
  ),
  GetHeadsShapePokemons: axios.get(
    'https://pokeapi.co/api/v2/pokemon-shape/11'
  ),
  GetHumanoidShapePokemons: axios.get(
    'https://pokeapi.co/api/v2/pokemon-shape/12'
  ),
  GetBugwingsShapePokemons: axios.get(
    'https://pokeapi.co/api/v2/pokemon-shape/13'
  ),
  GetArmorShapePokemons: axios.get(
    'https://pokeapi.co/api/v2/pokemon-shape/14'
  ),
}

export { pokemonRequests, GetPokemon }
