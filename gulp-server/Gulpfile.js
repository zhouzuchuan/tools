/*
 * @File Name:     Gulpfile.js
 * @Create By:     zhouzuchuan
 * @Create Time:   2016-02-23 09:50:27
 * @Modified By:   zhouzuchuan
 * @Modified Time: 2017-03-07 10:19:49
 */

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var serverPath = 'src/';

// 自刷新服务
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: serverPath /* 指定服务器目录 */
        }
    });
    // 监听目录下的文件
    gulp.watch(serverPath + '**/*').on('change', function() {
        browserSync.reload();
    });
});
