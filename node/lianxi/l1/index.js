const fs = require('fs')
const through = require('through2')

fs.createReadStream('input.txt')
  .pipe(through.obj((contents, enc, done) => {
    contents = contents.toString('utf-8')
    done(null, contents, enc)
  }))
  .pipe(through.obj((contents, enc, done) => {
    done(null, contents.toUpperCase(), enc)
  }))
  .pipe(through.obj((contents, enc, done) => {
    contents = contents.split('').reverse().join('')
    done(null, contents, enc)
  }))
  .pipe(fs.createWriteStream('output.txt'))


