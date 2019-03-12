var gulp = require('gulp')
var gutil = require('gulp-util')
var fs = require('fs')

gulp.task('watch', function () {
  var watcher = gulp.watch('src/js/*.js')
  watcher.remove('src/js/index.js')
  watcher.on('ready', function () {
    // console.log(watcher.files())
    console.log('ready')
  })
  watcher.on('end', function () { console.log('end') })
  watcher.on('nomatch', function () { console.log('nomatch') })
  watcher.on('error', function () { console.log('error') })
  watcher.on('change', function (event) {
    console.log(event.type)
    console.log(event.path)
  })
})







