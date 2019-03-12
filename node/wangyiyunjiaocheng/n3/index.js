const express = require('express')
const static = require('express-static')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const server = express()
server.listen(8001)

server.use(bodyParser.urlencoded({}))

const pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'cr7zhang',
  database : 'test'
})

server.use('/user/register', (req, res) => {
  let { username, password } = req.body
  pool.getConnection((err,connection) => {
    if (err) throw err
    connection.query('SELECT username FROM `auth` WHERE username="'+ username + '"', (err, data) => {
      if (err) throw err
      if (data.length) {
        res.send('用户已存在')
      } else {
        let  addSql = 'INSERT INTO `auth` (`username`, `password`) VALUES(?,?)'
        let  addSqlParams = [username, password]
        connection.query(addSql, addSqlParams, (err, addData) => {
          if (err) throw err
          res.send('注册成功')
        })
      }
      connection.end()
    })
  })
})

server.use('/user/login', (req, res) => {
  let { username, password } = req.body
  pool.getConnection((err,connection) => {
    if (err) throw err
    connection.query('SELECT username,password FROM `auth` WHERE username="'+ username +'" AND password="'+ password +'"', (err, data) => {
      if (err) throw err
      if (!data.length) {
        res.send('用户或密码错误')
      } else {
        res.send('登录成功')
      }
      connection.end()
    })
  })
})

server.use('/user/replace', (req, res) => {
  let { username, password } = req.body
  pool.getConnection((err, connection) => {
    if (err) throw err
    connection.query('UPDATE `auth` SET password="'+ password +'" WHERE username="'+ username +'"', (err, data) => {
      if (err) throw err
      res.send('替换成功')
      connection.end()
    })
  })
})

server.use(static('./lib'))

console.log('server running at port 8001')
