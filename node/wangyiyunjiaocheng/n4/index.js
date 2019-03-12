const express = require('express')
const Multer = require('multer')
const static = require('express-static')
const path = require('path')
const fs = require('fs')
const server = express()
server.listen(8001)
server.use(Multer({ dest: './www' }).any())

server.use('/setFiles', (req, res) => {
  console.log(req.files)
  let filename = req.files[0].path + path.parse(req.files[0].originalname).ext
  fs.rename(req.files[0].path, filename, err => {
    if (err) {
      console.log(err)
    } else {
      res.send(filename)
    }
  })
})

server.use(static('./www'))

console.log('server is running at port 8001')
