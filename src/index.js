require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const { join } = require('path')
const mongoose = require('./database/conexao')
const rotasUsuario = require('./routes/rotasUsuario')
const rotasCupom = require('./routes/rotasCupom')

app.use(express.json()) //Habilitando o uso de arquivos no formato JSON

app.use(cors()) //Permitindo o acesso externo a API

app.use('/uploads', express.static(join(__dirname, '../uploads')))

app.use('/usuario', rotasUsuario) // -> Usuário é o prefixo da rota
app.use('/cupom', rotasCupom)


app.listen(
    3000,
    () => console.log('Server is running on URL http://localhost:3000')
)
