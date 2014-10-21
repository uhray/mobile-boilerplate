var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    child = require('child_process');

// Top Level Commands ----------------------------------------------------------

gulp.task('default', ['info']);
gulp.task('launch', ['install', 'scss_to_css', 'phonegap-ios']);
gulp.task('serve', ['install', 'scss_to_css', 'http-server', 'scss_watch']);
gulp.task('static', ['install', 'scss_to_css', 'serve-static', 'scss_watch']);
gulp.task('install', ['npm_install', 'bower_clean', 'bower_install']);
gulp.task('lint', ['dolint']);

// Helper Tasks ----------------------------------------------------------------

gulp.task('info', function() {
  console.log('\nUsage:\t gulp [ launch | serve | static | lint ]\n');
});

gulp.task('npm_install', function(cb) {
  child.spawn('npm', ['install'], { stdio: 'inherit' })
       .on('close', cb);
});

gulp.task('bower_clean', ['npm_install'], function(cb) {
  child.spawn('./node_modules/bower/bin/bower', ['cache', 'clean'],
              { stdio: 'inherit' })
       .on('close', cb);
});

gulp.task('bower_install', ['bower_clean'], function(cb) {
  child.spawn('./node_modules/bower/bin/bower', ['install'],
              { stdio: 'inherit' })
       .on('close', cb);
});

gulp.task('scss_to_css', ['bower_install'], function() {
  return gulp.src('www/styles/*.scss')
             .pipe(sass({
               sourcemap: true,
               sourcemapPath: '..'
             }))
             .on('error', function(err) { console.log(err.message); })
             .pipe(autoprefixer())
             .pipe(gulp.dest('www/styles/css'));
});

gulp.task('scss_watch', ['scss_to_css'], function() {
  gulp.watch('www/styles/*.scss', ['scss_to_css']);
});

gulp.task('http-server', ['scss_to_css'], function(cb) {
  child.spawn('./node_modules/.bin/http-server', ['www'], { stdio: 'inherit' })
       .on('close', cb);
});

gulp.task('serve-static', ['scss_to_css'], function(cb) {
  child.spawn('node', ['static/'], { stdio: 'inherit' })
       .on('close', cb);
});

gulp.task('dolint', function() {
  child.spawn('./node_modules/.bin/jscs', ['./'], { stdio: 'inherit' });
});

gulp.task('phonegap-ios', ['install', 'scss_to_css'], function() {
  child.spawn('phonegap', ['run', 'ios'], { stdio: 'inherit' });
});
