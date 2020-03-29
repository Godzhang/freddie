const gulp = require("gulp");
const sass = require("gulp-sass");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const connect = require("gulp-connect");

gulp.task("hello", () => {
  console.log("hello world");
});

// html
gulp.task("copy-html", () => {
  gulp
    .src("index.html")
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
});

// image
gulp.task("images", () => {
  gulp
    .src("images/**/*")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
});
// gulp.task("images", () => {
//   gulp.src("images/**/*.{jpg,png}").pipe(gulp.dest("dist/images"));
// });

// 拷贝多个文件到一个目录中
gulp.task("copy-multi", () => {
  gulp
    .src(["json/*.json", "!json/no.json", "css/index.css"])
    .pipe(gulp.dest("dist/json"))
    .pipe(connect.reload());
});

gulp.task("build", ["copy-html", "images", "copy-multi"], () => {
  console.log("task done");
});

gulp.task("sass", () => {
  gulp
    .src("scss/*")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/scss"))
    .pipe(minifyCSS())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/scss"))
    .pipe(connect.reload());
});

gulp.task("js-concat", () => {
  gulp
    .src("math/*.js")
    .pipe(concat("math.js"))
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(gulp.dest("dist/libs/"))
    .pipe(uglify())
    .pipe(rename("math.min.js"))
    .pipe(gulp.dest("dist/libs/"))
    .pipe(connect.reload());
});

gulp.task("server", () => {
  connect.server({
    root: "dist", // 设置根目录
    port: 8080,
    livereload: true
  });
});

gulp.task("watch", () => {
  gulp.watch("index.html", ["copy-html"]);
  gulp.watch("images/**/*", ["images"]);
  gulp.watch(["json/*.json", "!json/no.json", "css/index.css"], ["copy-multi"]);
  gulp.watch("scss/*", ["sass"]);
  gulp.watch("math/*.js", ["js-concat"]);
});

gulp.task("default", ["watch", "server"]);
