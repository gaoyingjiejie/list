var gulp = require('gulp');
var sass = require('gulp-sass'); //编译sass
var webserver = require('gulp-webserver'); //起服务
var path = require('path');
var url = require('url');
var fs = require('fs');

var clean = require('gulp-clean-css');
var 
gulp.task('minsass', function() {
        return gulp.src('./src/scss/index.scss')
            .pipe(sass())
            .pipe(gulp.dest('./src/css/'))
    })
    //监听sass
gulp.task('watch', function() {
        return gulp.watch('./src/scss/index.scss', gulp.series('minsass'))
    })
    //起服务
gulp.task('webserver', function() {
        return gulp.src('src')
            .pipe(webserver({
                port: 2780,
                open: true,
                livereload: true,
                middleware: function(req, res, next) {
                    var pathname = url.parse(req.url).pathname
                    if (pathname === '/favicon.ico') {
                        res.end('')
                        return
                    } else {
                        pathname = pathname === '/' ? 'index.html' : pathname
                        res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
                    }

                }
            }))
    })
    //开发环境
gulp.task('dev', gulp.series('webserver', 'watch'))