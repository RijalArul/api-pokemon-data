const express = require('express')
const cors = require('cors')
require('dotenv').config()
const indexRoutes = require('./routes')
const app = express()

const port = process.env.PORT
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/pokemons', indexRoutes)

app.listen(port, () => {
  console.log(`App is listen on port ${port}`)
})
