const http = require('http')
const url = require('url')
const fs = require('fs')
const superagent = require('superagent')
const cheerio = require('cheerio')
const async = require('async')
const eventproxy = require('eventproxy')

const ep = new eventproxy()
const pageUrl = 'https://soccer.hupu.com/'
const pageUrls = []
const images = {}

const getImages = (res) => {
  pageUrls.forEach(url => {
    superagent.get(url)
              .end((err, sres) => {
                let $ = cheerio.load(sres.text)
                let key = url.match(/\d+(?=\.html)/g)[0]
                images[key] = images[key] || { title: '', list: [] }
                images[key].title = $('#j_data').text()
                $('.quote-content img').each(function (i, img) {
                  images[key].list.push($(this).attr('src'))
                })
                ep.emit('getImages')
              })
  })
  ep.after('getImages', pageUrls.length, () => {
    res.end(JSON.stringify(images))
  })
}

http.createServer((req, res) => {
  if (req.url === '/index.html') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        console.error(err)
        return
      } else {
        res.write(data)
        res.end()
      }
    })
  } else if (req.url === '/getImages') {
    superagent.get(pageUrl)
              .end((err, sres) => {
                if (err) {
                  console.log(err)
                  return
                } else {
                  // res.writeHead(200, { 'Content-Type': 'text/html' })
                  // res.end(sres.text)
                  let $ = cheerio.load(sres.text)
                  let links = $('.fouce-news h3').find('a')
                  links.each(function (i, link) {
                    pageUrls.push($(this).attr('href'))
                  })
                  getImages(res)
                }
              })
  } else {
    res.end('404')
  }
}).listen(8001)
