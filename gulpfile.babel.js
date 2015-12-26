import gulp from 'gulp';
import babelify from 'babelify';
import connect from 'gulp-connect';
import browserify from 'browserify';
import source from 'vinyl-source-stream';

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

gulp.task('reload-js', ['babelify'], () => {
    gulp.src('./js/app.jsx').pipe(connect.reload());
});
gulp.task('reload-html', () => {
    gulp.src('./public/index.html').pipe(connect.reload());
});
gulp.task('reload-css', () => {
    gulp.src('./css/*.css').pipe(connect.reload());
});

gulp.task('watch', () => {
    gulp.watch(['./js/**/*.jsx'], ['reload-js']);
    gulp.watch(['./public/index.html'], ['reload-html']);
    gulp.watch(['./css/*.css'], ['reload-css']);
})

gulp.task('serve', ['babelify', 'connect', 'watch']);
gulp.task('build', ['babelify']);
