const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const pngquant = require('imagemin-pngquant')
const imageResize = require('gulp-image-resize')

const type = 'bacon'

gulp.task('resizeImg', function () {
  return gulp.src(`images/${type}/*`)
    .pipe()
    .pipe(gulp.dest(`build/${type}`));
})

gulp.task('default', ['resizeImg']);