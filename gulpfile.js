const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const csso = require('gulp-csso');

gulp.task('sass', () => {
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(sourcemaps.init())
    .pipe(csso())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'))
});

gulp.task('reload', (done) => {
  browserSync.reload();
  done();
});

gulp.task('serve', () => {
  browserSync.init({
    proxy: 'ianda.dr809.test'
  });
});

gulp.task('watch', () => {
  gulp.watch('./scss/*.scss', gulp.series('sass', 'reload'));
});

gulp.task('default', gulp.series('serve', 'watch'));
