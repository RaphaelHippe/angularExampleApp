// gulp
var gulp = require('gulp'),
  connect = require('gulp-connect'),
  connectphp = require('gulp-connect-php'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  minifyCSS = require('gulp-minify-css'),
  del = require('del');

// tasks

gulp.task('lint', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('clean', function(cb) {
  del(['dist/*', '!dist/API'], ['force=true'], cb);
});

//Build API
gulp.task('api', function() {
  gulp.src(['../../API/**/*'], {
      dot: true
    })
    .pipe(gulp.dest('./dist/API'));
});

gulp.task('minify-css', function() {
  var opts = {
    comments: true,
    spare: true
  };
  gulp.src(['./app/**/*.css', '!./app/bower_components/**'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/'));
});
gulp.task('minify-js', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(uglify({
      // inSourceMap:
      // outSourceMap: "app.js.map"
    }))
    .pipe(gulp.dest('./dist/'));
});
gulp.task('copy-bower-components', function() {
  gulp.src('./app/bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
});
gulp.task('copy-html-files', function() {
  gulp.src('./app/**/*.html')
    .pipe(gulp.dest('./dist/'));
});
gulp.task('copy-image-files', function() {
  gulp.src('./app/**/*.+(jpg|png)')
    .pipe(gulp.dest('./dist/'));
});
gulp.task('serve', function() {
  connect.server({
    root: 'app/',
    port: 8888
  });
});

gulp.task('serveDist', function() {
  connectphp.server({
    base: 'dist/',
    port: 9999
  });
});

// default task
gulp.task('default', ['lint', 'connect']);
// build task
gulp.task('build', ['clean'], function() {
  gulp.start('lint', 'minify-css', 'minify-js', 'copy-html-files', 'copy-bower-components', 'copy-image-files');
});

function errorHandler(error) {
  console.log(error.toString());
  this.emit('end');
}
