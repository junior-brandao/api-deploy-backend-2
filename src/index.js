
const express = require('express')

require('dotenv').config({
   path: './.env',
})

const app = express()

app.use(express.json())

const familia = ['Junior', 'Keylla', 'Gabriel', 'Rute']

app.get('/', (req, res) => {
   return res.json(familia)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
   console.log(`Servidor na porta ${PORT}`)
})
