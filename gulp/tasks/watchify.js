var gulp           = require('gulp');
var browserifyTask = require('./browserify.js');

gulp.task('watchify', function () {
  // start browserify task in devMode === true
  return browserifyTask(true);
});
