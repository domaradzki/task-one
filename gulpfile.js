const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('reload', function() {
    browserSync.reload();
})

gulp.task('serve', function() {
    browserSync({
        server: 'src'
    });
    gulp.watch('src/*', ['reload']);
})

gulp.task('default', ['serve']);