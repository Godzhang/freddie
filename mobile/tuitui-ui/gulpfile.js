const gulp = require("gulp");
const cssmin = require("gulp-clean-css");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const cssImport = require("gulp-cssimport");

gulp.task("css", () => {
  return (
    gulp
      .src("./src/tuitui-ui.css")
      // .pipe(concat("tuitui-ui.css"))
      // .pipe(cssImport())
      .pipe(autoprefixer())
      .pipe(gulp.dest("./dist/"))
    // .pipe(
    //   rename({
    //     suffix: ".min"
    //   })
    // )
    // .pipe(cssmin())
    // .pipe(gulp.dest("./dist/"))
  );
});
