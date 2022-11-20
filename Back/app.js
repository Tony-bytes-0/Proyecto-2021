//const express = require('express') //ya no lo necesito por el import  

import express from 'express'
import router  from './src/routes/crud.js'
const app = express()

app.use( router )

//const routes = require('./src/routes/crud')

app.listen(3000, () => {
    console.log(`aplicacion de ejemplo on port 3000`)
})

app.get('/', (req, res) => {
    res.send('accediendo a la ruta raiz')
})
