const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sync = require('browser-sync').create();


//Обрабатываем файл стилей
const style = (done) => {
    gulp.src('sass/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest('css'))
        .pipe(sync.stream()); 
        done();
}

exports.style = style;

//Поднимаем "сервер"
const server = () => {
    sync.init({
        notify: false,
        server: {
            baseDir: '.'
        }
    });
};

exports.server = server;

//Вотчим изменения в файле стилей и html
const watch = () => {
    gulp.watch(['sass/*.scss', 'sass/blocks/*.scss'], style );
    gulp.watch('*.html').on('change', sync.reload );
};

exports.watch = watch;

exports.default = gulp.parallel(
    style, 
    server,
    watch, 
    );