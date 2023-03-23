var project = require('./_project.js');
const gulp  = require('gulp');

// Copy js files to dist
gulp.task('js-copy', function() {
  return gulp.src("./src/site/js/**/*.js")
    .pipe(gulp.dest(project.buildDest+ '/js'))
});
