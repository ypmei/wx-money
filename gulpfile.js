const gulp = require('gulp');
const clean = require('gulp-clean');
const less = require('gulp-less');
const rename = require("gulp-rename");
const runSequence = require('run-sequence');

const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

gulp.task('clean', () => {
  return gulp.src('dist', { read: false })
    .pipe(clean());
});

gulp.task('less', () => {
  return gulp.src('src/**/*.less')
    // .pipe(less({
    //   plugins: [autoprefix]
    // }))
    .pipe(less())
    .pipe(rename(function (path) {
      path.extname = ".wxss"
    }))
    .pipe(gulp.dest('dist'));
})

gulp.task('copy', () => {
  return gulp.src(['src/**/*.js', 'src/**/*.json', 'src/**/*.wxml'])
    .pipe(gulp.dest('dist'));
});

gulp.task('build', runSequence('clean', 'copy', 'less'));

gulp.task('watch', ['build'], function () {
  gulp.watch(['src/**/*.js', 'src/**/*.json', 'src/**/*.wxml', 'src/**/*.less'], function () {
    runSequence('copy', 'less');
  });
})