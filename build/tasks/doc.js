let gulp = require('gulp');
let tools = require('aurelia-tools');
let paths = require('../paths');
let yuidoc = require('gulp-yuidoc');

gulp.task('doc-generate', function() {
    return gulp.src(paths.source)
        .pipe(yuidoc.parser(null, 'api.json'))
        .pipe(gulp.dest(paths.doc));
});

gulp.task('doc', ['doc-generate'], function() {
    tools.transformAPIModel(paths.doc);
});
