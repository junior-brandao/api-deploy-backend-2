
const express = require('express')

require('dotenv').config()

const app = express()

app.use(express.json())

const conexao = require('./conexao')

app.get('/', async (req, res) => {

   try {
      //  const retorno = await conexao.query('familia').debug()
      return res.json('Junior brandao')
   } catch (error) {
      console.log(error)
      return res.status(500).json('Erro interno')
   }
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
   console.log(`Servidor na porta ${PORT}`)
})
