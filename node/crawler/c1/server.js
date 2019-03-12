const http = require('http')
const url = require('url')
const fs = require('fs')
const superagent = require('superagent')
const cheerio = require('cheerio')
const async = require('async')
const eventproxy = require('eventproxy')

const ep = new eventproxy()
const urlsArray = []
const pageUrls = ['https://www.cnblogs.com']
const catchData = []
const pageNum = 20
let endDate = false

for (let i = 2; i <= pageNum; i++) {
  pageUrls.push(`https://www.cnblogs.com/#p${i}`)
}

function personInfo (url) {
  let infoArray = {}
  superagent.get(url)
    .end((err, pres) => {
      if (err) {
        console.log(err)
        return
      }
      let $ = cheerio.load(pres.text)
      let info = $('#profile_block a')
      let len = info.length
      let age  = ''
      let flag = false
      let curDate = new Date()

      try {
        age = `20${info.eq(1).attr('title').split('20')[1]}`
      } catch (err) {
        console.log(err)
        age = '2019 - 2 - 22'
      }
      
      infoArray.name = info.eq(0).text()
      infoArray.age = parseInt((new Date() - new Date(age)) / 1000 / 3600 / 24)
      infoArray.fans = info.eq(len - 2).text()
      infoArray.focus = info.eq(len - 1).text()

      catchData.push(JSON.stringify(infoArray))
    })
}

function start () {
  function onRequest (req, res) {
    pageUrls.forEach((pageUrl, index) => {
      superagent.get(pageUrl)
                .end((err, pres) => {
                  let $ = cheerio.load(pres.text)
                  let curPageUrls = $('.titlelnk')

                  for (let i = 0; i < curPageUrls.length; i++) {
                    let articleUrl = curPageUrls.eq(i).attr('href')
                    urlsArray.push(articleUrl)
                    ep.emit('BlogArticleHtml', articleUrl)
                  }
                })
    })

    ep.after('BlogArticleHtml', pageUrls.length * 20, articleUrls => {
      let curCount = 0
      let reptileMove = (url, callback) => {
        let delay = parseInt((Math.random() * 30000000) % 1000, 10)
        curCount++
        console.log(`现在的并发数是${curCount},正在抓取的是${url}，耗时${delay}毫秒`)

        superagent.get(url)
          .end((err, pres) => {
            let $ = cheerio.load(pres.text)
            let currentBlogApp = url.split('/p/')[0].split('/')[3]
            res.write(`currentBlogApp is ${currentBlogApp}<br />`)
            let appUrl = `https://www.cnblogs.com/mvc/blog/news.aspx?blogApp=${currentBlogApp}`
            personInfo(appUrl)
          })

        setTimeout(() => {
          curCount--
          callback(null, `${url} Call back content`)
        }, delay)
      }

      async.mapLimit(articleUrls, 5, (url, callback) => {
        reptileMove(url, callback)
      }, (err, result) => {
        endDate = new Date()
        console.log('final')
        console.log(result)
        fs.writeFile('catchData.txt', JSON.stringify(catchData), err => {})
      })
    })
  }

  http.createServer(onRequest).listen(8001)
}

exports.start = start
