var gulp = require('gulp');

require('./sub-gulpfile.js');

gulp.task('one', function () {
  console.log('running one');
});

gulp.task('default', ['one']);