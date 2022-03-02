const axios = require('axios')
const https = require('https')

const BASE_URL_API_POKEMONS = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 30000,
  httpsAgent: new https.Agent({ keepAlive: true })
})

module.exports = BASE_URL_API_POKEMONS
