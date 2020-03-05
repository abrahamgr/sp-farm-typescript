const gulp = require('gulp');
const sass = require('gulp-sass');
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass({ outputStyle: "compressed" }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task("typescript", function() {
    return new Promise((resolve, reject) => {
        webpack(webpackConfig, (err, stats) => {
            if (err) {
                return reject(err);
            }
            if (stats.hasErrors()) {
                return reject(new Error(stats.compilation.errors.join('\n')));
            }
            resolve();
        });
    });
});

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', gulp.series("sass"));
  gulp.watch('./src/**/*.ts', gulp.series("typescript"));
});

gulp.task("build", gulp.series("sass", "typescript"));