
const express = require('express')

require('dotenv').config({
   path: './.env',
})

const app = express()

app.use(express.json())

const knex = require('./conexao')

app.get('/', async (req, res) => {

   try {
      const retorno = await knex('familia')
      return res.json(retorno)
   } catch (error) {
      return res.status(500).json('Erro interno')
   }
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
   console.log(`Servidor na porta ${PORT}`)
})
