// grab our gulp packages
var gulp  = require('gulp');
var gutil = require('gulp-util');

var path = require('path');
var del = require('del');

var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');

var browserSync = require('browser-sync').create();

var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat     = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

var imagemin = require('gulp-imagemin');


// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
  return 'hello'
});

//Browsersync
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

//Less tasks
gulp.task('less', function () {
  return gulp.src('./assets/css/*.less')
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    
    .pipe(autoprefixer({
        browsers: [
        'last 2 versions',
        'android 4',
        'opera 12'
      ]
    }))

    
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
});

//Script tasks
gulp.task('jshint', function() {
  console.log('Building scripts..');
  return gulp.src(['bower.json', './assets/scripts/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-js', ['jshint'], function() {
  return gulp.src(['bower.json', './assets/scripts/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('main.js'))
      .pipe(uglify()) 
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/scripts/'));
});

//Image tasks
gulp.task('images', function() {
  console.log('Building images..');
  gulp.src('assets/images/*')
    .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
});

//Watch task
gulp.task('watch', ['browserSync', 'less', 'jshint', 'build-js'], function (){
  gulp.watch('assets/css/*.less', ['less']);
  gulp.watch('assets/images/*', ['images']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('*.html', browserSync.reload); 
  gulp.watch('assets/scripts/*.js', ['jshint', 'build-js', browserSync.reload]); 
});

//Cleaner task
gulp.task('cleaner', function() {
  return del.sync('dist');
});

//Build
gulp.task('build', ['cleaner', 'images', 'less', 'jshint', 'build-js'], function() {
  console.log('Building files..');
});





