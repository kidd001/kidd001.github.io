var gulp = require('gulp'),
  watch = require('gulp-watch'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-minify-css');

gulp.task('compress', function() {
  gulp.src(['assets/vendor/jquery/dist/jquery.js', 'assets/vendor/lightslider/dist/js/lightslider.js', 'assets/js/scripts.js'])
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('static/js/'));
  gulp.src(['assets/css/poole.css', 'assets/css/hyde.css', 'assets/css/syntax.css'])
    .pipe(concat('style.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('static/css/'));
});

gulp.task('watch', function() {
  gulp.watch('assets/css/*.css', ['compress']);
  gulp.watch('assets/js/*.js', ['compress']);
});

gulp.task('default', ['compress', 'watch']);