import gulp from 'gulp';
import babelify from 'babelify';
import connect from 'gulp-connect';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import sass from 'gulp-sass'

gulp.task('babelify', () => {
    return browserify({
        entries: './js/app.jsx',
        extensions: ['.jsx'],
        debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public'));
});

gulp.task('connect', () => {
  connect.server({
    root: 'public/',
    port: process.env.PORT || 8080,
    livereload: true
  });
});

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('reload-js', ['babelify'], () => {
    return gulp.src('public/bundle.js').pipe(connect.reload());
});
gulp.task('reload-html', () => {
    return gulp.src('public/index.html').pipe(connect.reload());
});
gulp.task('reload-css', ['sass'], () => {
    return gulp.src('public/css/*.css').pipe(connect.reload());
});

gulp.task('watch', () => {
    gulp.watch(['./js/**/*.jsx'], ['babelify']);
    gulp.watch(['./sass/**/*.scss'], ['sass']);
    gulp.watch('public/', function() {
      return gulp.src(distPaths).pipe(connect.reload());
    });
})

gulp.task('serve', ['babelify', 'connect', 'watch']);
gulp.task('build', ['babelify']);
