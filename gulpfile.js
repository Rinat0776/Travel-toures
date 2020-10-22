const { src, dest, watch, series } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Save a reference to the `reload` method

// Watch scss AND html files, doing different things with each.

function bs() {
  serveSass();
  browserSync.init({
    server: {
      baseDir: "./src"
    }
  });
  watch("./src/*.html").on("change", browserSync.reload);
  watch("./src/sass/**/*.sass", serveSass);
  watch("./src/scss/**/*.scss", serveSass);
  watch("./src/js/*.js").on("change", browserSync.reload);
};
function serveSass() {
  return src("./src/sass/*.sass")
    .pipe(sass())
    .pipe(dest("src/css"))
    .pipe(browserSync.stream());
};
exports.serve = bs;
