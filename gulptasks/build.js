const path = require('path');
const glob = require('glob');
const gulp = require('gulp');
const cleanCss = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');
const encapsulateCss = require('./encapsulateCss');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const webpack = require('gulp-webpack');
const webpackConfig = require('../webpack.config');

gulp.task('build-sass', () =>
    gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(encapsulateCss())
    .pipe(concatCss('app.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('dist/web'))
);

gulp.task('build-node', ['lint'], () =>
    gulp.src('src/index.js')
    .pipe(webpack(Object.assign({}, webpackConfig, {target: 'node'})))
    .pipe(gulp.dest('dist/node'))
);

gulp.task('build-web', ['lint'], () =>
    gulp.src('src/webentry.js')
    .pipe(webpack(Object.assign({}, webpackConfig)))
    .pipe(gulp.dest('dist/web'))
);

gulp.task('build', ['build-sass', 'build-web', 'build-node']);