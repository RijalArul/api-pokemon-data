const PokemonController = require('../controllers/pokemons')
const router = require('express').Router()

router.get('/', PokemonController.all)
router.get('/:name', PokemonController.detail)

module.exports = router
