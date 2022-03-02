import Pokedex from 'pokedex-promise-v2'
const config = {
  cacheLimit: 100, // 100s
  timeout: 5 * 1000 // 5s
}
const P = new Pokedex(config)

export default P
