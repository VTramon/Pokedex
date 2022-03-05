import axios from 'axios'

const GetAllPokemons = axios.get('https://pokeapi.co/api/v2/pokemon?limit=1126')
const GetKantoPokemons = axios.get('https://pokeapi.co/api/v2/pokedex/2')
const GetJohtoPokemons = axios.get('https://pokeapi.co/api/v2/pokedex/7')
const GetHoennPokemons = axios.get('https://pokeapi.co/api/v2/pokedex/15')
const GetSinnohPokemons = axios.get('https://pokeapi.co/api/v2/pokedex/6')
const GetUnovaPokemons = axios.get('https://pokeapi.co/api/v2/pokedex/9')

const GetNormalPokemons = axios.get('https://pokeapi.co/api/v2/type/1')
const GetFightingPokemons = axios.get('https://pokeapi.co/api/v2/type/2')
const GetFlyingPokemons = axios.get('https://pokeapi.co/api/v2/type/3')
const GetPoisonPokemons = axios.get('https://pokeapi.co/api/v2/type/4')
const GetGroundPokemons = axios.get('https://pokeapi.co/api/v2/type/5')
const GetRockPokemons = axios.get('https://pokeapi.co/api/v2/type/6')
const GetBugPokemons = axios.get('https://pokeapi.co/api/v2/type/7')
const GetGhostPokemons = axios.get('https://pokeapi.co/api/v2/type/8')
const GetSteelPokemons = axios.get('https://pokeapi.co/api/v2/type/9')
const GetFirePokemons = axios.get('https://pokeapi.co/api/v2/type/10')
const GetWaterPokemons = axios.get('https://pokeapi.co/api/v2/type/11')
const GetGrassPokemons = axios.get('https://pokeapi.co/api/v2/type/12')
const GetElectricPokemons = axios.get('https://pokeapi.co/api/v2/type/13')
const GetPsychicPokemons = axios.get('https://pokeapi.co/api/v2/type/14')
const GetIcePokemons = axios.get('https://pokeapi.co/api/v2/type/15')
const GetDragonPokemons = axios.get('https://pokeapi.co/api/v2/type/16')
const GetDarkPokemons = axios.get('https://pokeapi.co/api/v2/type/17')
const GetFairyPokemons = axios.get('https://pokeapi.co/api/v2/type/18')
const GetUnknownPokemons = axios.get('https://pokeapi.co/api/v2/type/10001')
const GetShadowPokemons = axios.get('https://pokeapi.co/api/v2/type/10002')

const GetBallShapePokemons = axios.get(
  'https://pokeapi.co/api/v2/pokemon-shape/1'
)
const GetSquiggleShapePokemons = axios.get(
  'https://pokeapi.co/api/v2/pokemon-shape/2'
)
const GetFishShapePokemons = axios.get(
  'https://pokeapi.co/api/v2/pokemon-shape/3'
)
const GetArmsShapePokemons = axios.get(
  'https://pokeapi.co/api/v2/pokemon-shape/4'
)
const GetBlobShapePokemons = axios.get(
  'https://pokeapi.co/api/v2/pokemon-shape/5'
)
const GetUprightShapePokemons = axios.get(
  'https://pokeapi.co/api/v2/pokemon-shape/6'
)
const GetLegsShapePokemons = axios.get(
  'https://pokeapi.co/api/v2/pokemon-shape/7'
)
const GetQuadrupedShapePokemons = axios.get(
  'https://pokeapi.co/api/v2/pokemon-shape/8'
)
const GetWingsShapePokemons = axios.get(
  'https://pokeapi.co/api/v2/pokemon-shape/9'
)
const GetTentaclesShapePokemons = axios.get(
  'https://pokeapi.co/api/v2/pokemon-shape/10'
)
const GetHeadsShapePokemons = axios.get(
  'https://pokeapi.co/api/v2/pokemon-shape/11'
)
const GetHumanoidShapePokemons = axios.get(
  'https://pokeapi.co/api/v2/pokemon-shape/12'
)
const GetBugwingsShapePokemons = axios.get(
  'https://pokeapi.co/api/v2/pokemon-shape/13'
)
const GetArmorShapePokemons = axios.get(
  'https://pokeapi.co/api/v2/pokemon-shape/14'
)

export {
  GetAllPokemons,
  GetKantoPokemons,
  GetJohtoPokemons,
  GetHoennPokemons,
  GetSinnohPokemons,
  GetUnovaPokemons,
  GetNormalPokemons,
  GetFightingPokemons,
  GetFlyingPokemons,
  GetPoisonPokemons,
  GetGroundPokemons,
  GetRockPokemons,
  GetBugPokemons,
  GetGhostPokemons,
  GetSteelPokemons,
  GetFirePokemons,
  GetWaterPokemons,
  GetGrassPokemons,
  GetElectricPokemons,
  GetPsychicPokemons,
  GetIcePokemons,
  GetDragonPokemons,
  GetDarkPokemons,
  GetFairyPokemons,
  GetUnknownPokemons,
  GetShadowPokemons,
  GetArmorShapePokemons,
  GetArmsShapePokemons,
  GetBallShapePokemons,
  GetBlobShapePokemons,
  GetBugwingsShapePokemons,
  GetFishShapePokemons,
  GetHeadsShapePokemons,
  GetHumanoidShapePokemons,
  GetLegsShapePokemons,
  GetQuadrupedShapePokemons,
  GetSquiggleShapePokemons,
  GetTentaclesShapePokemons,
  GetUprightShapePokemons,
  GetWingsShapePokemons,
}
