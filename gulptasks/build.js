const path = require('path');
const glob = require('glob');
const gulp = require('gulp');
const rename = require('gulp-rename');
const webpack = require('gulp-webpack');
const webpackConfig = require('../webpack.config');

gulp.task('build-node', ['lint'], () =>
    gulp.src('src/index.js')
    .pipe(webpack(Object.assign({}, webpackConfig, {target: 'node'})))
    .pipe(gulp.dest('dist/node'))
);

gulp.task('build-web', ['lint'], () =>
    gulp.src('src/index.js')
    .pipe(webpack(Object.assign({}, webpackConfig)))
    .pipe(gulp.dest('dist/web'))
);

gulp.task('build', ['build-web', 'build-node']);