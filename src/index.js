
const express = require('express')

require('dotenv').config({
   path: './.env',
})

const app = express()

app.use(express.json())


app.get('/', (req, res) => {
   return res.json("API HEROKU CLI")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
   console.log(`Servidor na porta ${PORT}`)
})
