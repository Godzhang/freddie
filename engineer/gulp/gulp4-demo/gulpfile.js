const gulp = require("gulp");
const sass = require("gulp-sass");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const connect = require("gulp-connect");
const del = require("del");

const { series, parallel } = require("gulp");

// html
gulp.task("copy-html", async () => {
  await gulp
    .src("index.html")
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
});

// image
gulp.task("images", async () => {
  await gulp
    .src("images/**/*")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
});

// 拷贝多个文件到一个目录中
gulp.task("copy-multi", async () => {
  await gulp
    .src(["json/*.json", "!json/no.json", "css/index.css"])
    .pipe(gulp.dest("dist/json"))
    .pipe(connect.reload());
});

gulp.task("sass", async () => {
  await gulp
    .src("scss/*")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/scss"))
    .pipe(minifyCSS())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/scss"))
    .pipe(connect.reload());
});

gulp.task("js-concat", async () => {
  await gulp
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

gulp.task("clean", async () => {
  await del(["dist"]);
});

gulp.task(
  "build",
  series("clean", "copy-html", "images", "copy-multi", "sass", "js-concat")
);

gulp.task("server", async () => {
  await connect.server({
    root: "dist", // 设置根目录
    port: 8080,
    livereload: true
  });
});

gulp.task("watch", async () => {
  await gulp.watch("index.html", series("copy-html"));
  await gulp.watch("images/**/*", series("images"));
  await gulp.watch(
    ["json/*.json", "!json/no.json", "css/index.css"],
    series("copy-multi")
  );
  await gulp.watch("scss/*", series("sass"));
  await gulp.watch("math/*.js", series("js-concat"));
});

// gulp.task("default", parallel("watch", "server"));
exports.default = parallel("watch", "server");
