const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('lint-js', () =>
    gulp.src(['src/**/*.js', 'server/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
);

gulp.task('lint', ['lint-js']);