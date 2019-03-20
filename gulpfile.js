const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync');
const del = require('del');
const minifyCSS = require('gulp-clean-css');
const server = browserSync.create();

function reload(done) {
  server.reload();
  done();
}

function clean(done) {
    del(['dist']);
    done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './dist/'
    }
  });
  done();
}

function listen() {
    watch(['src/*.html', 'src/scss/*.scss', 'src/js/app.js'], series(parallel(html, scss, js), reload));
}

function html() {
    return src('src/*.html')
        .pipe(dest('dist/'));
}

function scss() {
    return src('src/scss/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(dest('dist/css'));
}

function img() {
    return src('src/img/*.png')
        .pipe(src('src/img/*.jpg'))
        .pipe(imagemin())
        .pipe(dest('dist/img/'));
}

function js() {
    return src('src/js/*.js')
        .pipe(dest('dist/js/'));
}
exports.dev = series(clean, parallel(html, scss, img, js), serve, listen);
exports.build = series(clean, parallel(html, scss, img, js));
