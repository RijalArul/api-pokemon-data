const BASE_URL_API_POKEMONS = require('../axios')

class PokemonController {
  static async all (req, res) {
    try {
      const response = await BASE_URL_API_POKEMONS.get('/pokemon?limit=30')
      const { results } = response.data
      res.status(200).json({
        data: results,
        status: true
      })
    } catch (err) {
      res.status(500).json({
        message: 'Internal Server Error',
        status: false
      })
    }
  }

  static async detail (req, res) {
    try {
      const { name } = req.params

      const response = await BASE_URL_API_POKEMONS.get(`pokemon/${name}`)
      const { data } = response
      res.status(200).json({
        data: data,
        status: true
      })
    } catch (err) {
      if (err.response.status === 404) {
        res.status(404).json({
          message: 'Pokemon Not Found',
          status: false
        })
      } else {
        res.status(500).json({
          message: 'Internal Server Error',
          status: true
        })
      }
    }
  }
}

module.exports = PokemonController
