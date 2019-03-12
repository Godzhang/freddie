var gulp = require('gulp')
var browserify = require('browserify')
var sequence = require('run-sequence')
var watchify = require('watchify')
// var uglify = require('gulp-uglify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
// var gif = require('gulp-if')
// var babel = require('gulp-babel')
// var cleanCss = require('gulp-clean-css')
// var concat = require('gulp-concat')
// var sass = require('gulp-sass')
// var gutil = require('gulp-util')
var gulpLoadPlugins = require('gulp-load-plugins')
var plugins = gulpLoadPlugins();

var isProduction = process.env.ENV === 'prod'

gulp.task('default', function (done) {
  sequence('sass', 'sass-watch', 'minify', 'minify-watch', 'babel', 'babelWatch', 'minify', 'appjs')
  done()
})

gulp.task('appjs', function (done) {
  var b = browserify({
    entries: ['assets/js/index.js'],
    cache: {},
    packageCache: {},
    plugin: [watchify]
  })
  var bundle = function () {
    b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(plugins.if(isProduction, plugins.uglify()))
    .on('error', function (err) { plugins.util.log(plugins.util.colors.red('[Error]'), err.toString()); })
    .pipe(gulp.dest('./dist/js/'))
    .pipe(plugins.livereload())
  }
  bundle()
  b.on('update', bundle)
  done()
})

gulp.task('babel', function () {
  gulp.src('./assets/js/*.js')
      .pipe(plugins.babel({ presets: ['@babel/preset-env'] }))
      .pipe(gulp.dest('./build/js/'))
})

gulp.task('babelWatch', function () {
  gulp.watch('assets/js/*.js', function () {
    sequence('babel')
  })
})

gulp.task('minify', function () {
  gulp.src('./assets/css/*.css')
      .pipe(plugins.concat('app.css'))
      .pipe(plugins.cleanCss())
      .pipe(gulp.dest('./build/css/'))
})

gulp.task('minify-watch', function () {
  gulp.watch('./assets/css/*.css', ['minify'])
})

gulp.task('sass', function () {
  gulp.src('./assets/scss/*.scss')
      .pipe(plugins.sass())
      .pipe(plugins.concat('zhangqi.css'))
      .pipe(plugins.if(isProduction, plugins.cleanCss()))
      .pipe(gulp.dest('./build/css/'))
})

gulp.task('sass-watch', function () {
  gulp.watch('./assets/scss/*.scss', ['sass'])
})
