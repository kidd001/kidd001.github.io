var gulp = require('gulp'),
  watch = require('gulp-watch'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-minify-css');
  sass = require('gulp-sass');
  sourcemaps = require('gulp-sourcemaps');

gulp.task('compress', function() {
  gulp.src(['assets/vendor/jquery/dist/jquery.js', 'assets/vendor/lightslider/dist/js/lightslider.js', 'assets/js/scripts.js'])
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('static/js/'));
  gulp.src('assets/scss/base.scss')
    .pipe(sourcemaps.init())  // Process the original sources
      .pipe(sass())
    .pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(concat('base.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('static/css/'));  
});

gulp.task('watch', function() {
  gulp.watch('assets/scss/*.scss', ['compress']);
  gulp.watch('assets/js/*.js', ['compress']);
});

gulp.task('default', ['compress', 'watch']);