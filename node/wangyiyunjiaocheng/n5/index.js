const express = require('express')
const static = require('express-static')
const mysql = require('mysql')
const jade = require('jade')

const server = express()
server.listen(8001)

let Pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'cr7zhang',
  database: 'test'
})

server.use('/news', (req, res) => {
  if (!req.query.id) {
    res.send('404')
  }
  Pool.getConnection((err, connection) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      let { id } = req.query
      connection.query("SELECT * FROM `article` WHERE ID='"+ id +"';", (err, data) => {
        connection.end()
        if (err) {
          console.log(err)
          res.send('查找失败')
        } else {
          if (data.length) {
            let str = jade.renderFile('./www/jade/2.jade', { pretty: true, arr: data })
            res.send(str)  
          } else {
            res.send('未找到文章')
          }
        }
      })
    }
  })
})

server.use('/list.html', (req, res) => {
  Pool.getConnection((err, connection) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      connection.query("SELECT ID,user,textName,time FROM `article`;", (err, data) => {
        connection.end()
        if (err) {
          console.log(err)
          res.send('查找失败')
        } else {
          let str = jade.renderFile('./www/jade/1.jade', { pretty: true, arr: data })
          res.send(str)
        }
      })
    }
  })
})

server.use('/setText', (req, res) => {
  Pool.getConnection((err, connection) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      connection.query("INSERT INTO `article` (`user`, `textName`, `time`, `inner`) VALUES ('"+ req.query.user +"', '"+ req.query.textName +"', '"+ req.query.time +"', '"+ req.query.inner +"');", err => {
        connection.end()
        if (err) {
          console.log(err)
          res.send('发布失败')
        } else {
          res.send('发布成功')
        }
      })
    }
  })
})



server.use(static('./www'))
console.log('server is running at port 8001')