const express = require('express')
const static = require('express-static')
const server = express()
server.listen(8000)

const talks = []

server.use('/sendMsg', (req, res) => {
  console.log(req.query)
  talks.push(req.query)
  res.send(talks)
})

server.use('/getMsg', (req, res) => {
  res.send(talks)
})

server.use(static('./lib'))
