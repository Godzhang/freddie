const http = require('http')
const fs = require('fs')
const superagent = require('superagent')

superagent.get('https://www.cnblogs.com/')
          .end((err, pres) => {
            console.log(pres.text)
            fs.writeFile('1.html', pres.text, err => {
              if (err) {
                console.log(err)
              }
            })
          })