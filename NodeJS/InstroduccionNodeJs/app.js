const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/hola-mundo', function (req, res) {
    res.send('Hola desde el otro mundo')
  })

app.listen(8081)