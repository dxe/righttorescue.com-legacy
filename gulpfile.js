const gulp = require("gulp");
const minify = require("gulp-minify");
const csso = require("gulp-csso");
const fileinclude = require("gulp-file-include");

gulp.task("html", function () {
  return gulp
    .src(["*.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("./dist/"));
});

gulp.task("css", function () {
  return gulp.src(["css/**"]).pipe(csso()).pipe(gulp.dest("./dist/css"));
});

gulp.task("img", function () {
  return gulp.src(["img/**"]).pipe(gulp.dest("./dist/img"));
});

gulp.task("js", function () {
  return gulp
    .src(["js/**"])
    .pipe(
      minify({
        ext: {
          min: ".js",
        },
        noSource: true,
      })
    )
    .pipe(gulp.dest("./dist/js"));
});

gulp.task("vendor", function () {
  return gulp.src(["vendor/**"]).pipe(gulp.dest("./dist/vendor"));
});

gulp.task("docs", function () {
  return gulp.src(["docs/**"]).pipe(gulp.dest("./dist/docs"));
});

gulp.task(
  "default",
  gulp.parallel("html", "css", "img", "js", "vendor", "docs")
);
