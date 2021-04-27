//Importar Dependencia/pacote
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//Iniciando o express
const server = express()
server
.use(express.static('Public'))

// Configurar Template engine - hbs
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//Criar um caminho ou todas as rotas
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)

// Ligar o Servidor
server.listen(5500)