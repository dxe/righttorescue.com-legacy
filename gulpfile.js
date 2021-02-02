const gulp = require('gulp');
const replace = require('gulp-replace');

gulp.task("html", function() {
  var appendString = new Date().getTime();
  return gulp
    .src(["*.html"])
    .pipe(
      replace('.html"', function() {
        return `.html?v=${appendString}"`;
      })
    )
    .pipe(
      replace('dxe-petitions/api.js', function() {
        return `dxe-petitions/api.js?v=${appendString}"`;
      })
    )
    .pipe(gulp.dest("./dist/"));
});

gulp.task("css", function() {
  return gulp
    .src(["css/**"])
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("img", function() {
  return gulp
    .src(["img/**"])
    .pipe(gulp.dest("./dist/img"));
});

gulp.task("js", function() {
  return gulp
    .src(["js/**"])
    .pipe(gulp.dest("./dist/js"));
});

gulp.task("vendor", function() {
  return gulp
    .src(["vendor/**"])
    .pipe(gulp.dest("./dist/vendor"));
});

gulp.task('default', gulp.parallel('html', 'css', 'img', 'js', 'vendor'));
