import gulp from 'gulp';
import babelify from 'babelify';
import connect from 'gulp-connect';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import sass from 'gulp-sass';
import del from 'del';
import rename from 'gulp-rename';

let settings = {
  environment: process.env.SERVE_ENV || 'prod'
}


gulp.task('clean', function(cb) {
  return del([
    './build/**/*'
  ], cb);
});

gulp.task('config', ['clean'], function() {
  return gulp.src('./config/'+settings.environment+'.js')
             .pipe(rename('config.js'))
             .pipe(gulp.dest('./build'));
});

gulp.task('src', ['config'], function() {
  return gulp.src('./js/**/*')
             .pipe(gulp.dest('./build'));
});

gulp.task('babelify', ['src'], () => {
    return browserify({
        entries: './build/index.jsx',
        extensions: ['.jsx', '.js'],
        debug: true
    })
    .transform(babelify)
    .bundle()
    .on('error', function(error) {
      console.log(error.message)
      this.emit('end')
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public'));
});

gulp.task('connect', () => {

  connect.server({
    root: __dirname+'/public/',
    port: process.env.PORT || 8080,
    livereload: true,
    fallback:__dirname+'/public/index.html'
  });
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('reload-js', ['babelify'], () => {
    return gulp.src('./public/bundle.js').pipe(connect.reload());
});
gulp.task('reload-html', () => {
    console.log(gulp.src('./public/index.html'))
    return gulp.src('./public/index.html').pipe(connect.reload());
});
gulp.task('reload-css', ['sass'], () => {
    return gulp.src('./public/css/*.css').pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch(['./js/**/*.js'], ['reload-js']);
  gulp.watch(['./js/**/*.jsx'], ['reload-js']);
  gulp.watch(['./sass/**/*.scss'], ['reload-css']);
  gulp.watch(['./public/index.html'], ['reload-html'])
})

gulp.task('serve', ['babelify', 'watch', 'connect']);
gulp.task('build', ['babelify']);
