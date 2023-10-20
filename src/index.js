
const express = require('express')

require('dotenv').config()

const app = express()

app.use(express.json())

const knex = require('./conexao')

app.get('/', async (req, res) => {

   try {
      const retorno = await knex('familia').debug()
      return res.json(retorno)
   } catch (error) {
      console.log(error)
      return res.status(500).json(process.env.DATABASE_URL)
   }
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
   console.log(`Servidor na porta ${PORT}`)
})
