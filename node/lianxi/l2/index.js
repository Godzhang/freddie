const http = require('http')
const url = require('url')

http.createServer((req, res) => {
  let { callback } = url.parse(req.url, true).query
  let data = {name: 'zhangqi', age: 30}
  callback && res.end(`${callback}('${JSON.stringify(data)}')`)
}).listen(8001)

console.log('server is running at port 8001')
