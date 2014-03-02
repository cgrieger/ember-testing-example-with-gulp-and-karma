var gulp = require('gulp');
var livereload = require('gulp-livereload');
var handlebars = require('gulp-ember-handlebars');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

var files = [
  'js/**/*.js'
];

gulp.task('compile-templates', function () {
  "use strict";
  gulp.src(['templates/*.handlebars'])
    .pipe(handlebars({
      outputType: 'browser'
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('watch-templates', function () {
  "use strict";
  gulp.watch('templates/*.handlebars', ['compile-templates']);
});

gulp.task('watch-sources', function () {
  "use strict";
  gulp.watch(files, ['livereload']);
});

gulp.task('livereload', function () {
  "use strict";
  var server = livereload();
  gulp.watch('js/*.js').on('change', function (file) {
    server.changed(file.path);
  });
  gulp.watch('build/js/*.js').on('change', function (file) {
    server.changed(file.path);
  });
});

gulp.task('dev', ['compile-templates', 'watch-templates', 'watch-sources', 'livereload'])


