let gulp = require('gulp');
let paths = require('../paths');
let del = require('del');
let vinylPaths = require('vinyl-paths');

// deletes all files in the output path
gulp.task('clean', function() {
    return gulp.src([paths.output])
        .pipe(vinylPaths(del));
});
