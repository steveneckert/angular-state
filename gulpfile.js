var gulp = require('gulp');
var wiredep = require('wiredep').stream;

gulp.task('bower', function () {
  gulp.src('./src/public/index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./src/public/'));
});

gulp.task('default', function() {
  // place code for your default task here
});
