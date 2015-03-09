var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var minifyHTML = require('gulp-minify-html');
var sass = require('gulp-sass');

gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(minifyHTML({
      comments: true,
      spare: true
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('styles', function() {
  return gulp.src('styles/styles.scss')
    .pipe(sass({
      outputStyle: 'compressed',
      precision: 5
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('build/styles'));
});

gulp.task('watch', function() {
  gulp.watch('*.html', ['html']);
  gulp.watch('styles/**/*.scss', ['styles']);
});

gulp.task('default', ['html', 'styles']);