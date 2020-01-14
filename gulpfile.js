//GulpFile
var gulp = require('gulp'),
    sass = require('gulp-sass'), //Компиляция
    csso = require('gulp-csso'), //Минификация Sass
    concat = require('gulp-concat'), //Склейка файлов в один
    uglify = require('gulp-uglify'), //Минификация Js
    imagemin = require('gulp-imagemin'), //Минификация Img
    browserSync = require('browser-sync').create(); //Авто презагрузка браузера

gulp.task('sass', function () {
    gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.min.css',
        './node_modules/swiper/css/swiper.min.css',
        // './node_modules/owl.carousel/dist/assets/owl.carousel.css',
        // './node_modules/owl.carousel/dist/assets/owl.theme.default.css',
        './app/style/main.scss'])
        .pipe(sass())
        // .pipe(csso())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist/style/'))
});

gulp.task('js', function () {
    gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/swiper/js/swiper.min.js',
        // './node_modules/bootstrap/dist/css/bootstrap.min.js',
        // './node_modules/owl.carousel/dist/owl.carousel.js',
        './app/js/*.js'])
        // .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/js/'))
});

gulp.task('img', function () {
    gulp.src('./app/img/**/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img/'))
});

gulp.task('serve', function() {
    browserSync.init({
        server: "./dist/",
        browser: 'chrome'
    });
});

gulp.task('watch', function () {
    gulp.watch('./app/style/**/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch('./app/js/**/*.js', ['js']).on('change', browserSync.reload);
    gulp.watch('./app/img/**/*', ['img']);
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
});


gulp.task('default', ['serve', 'sass', 'js', 'img', 'watch']);
