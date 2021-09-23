const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const tsc= require('gulp-typescript');


gulp.task('default', function(){
    return gulp.src('src/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/styles'))
});

gulp.task('styles:watch', gulp.parallel(['styles', function(){
    gulp.watch('src/sass/**/*.scss',gulp.series('styles'))
    done();
}]));

gulp.task('default', gulp.series('styles'), function (done) {
    console.log('will build teh project');
    done();
});

gulp.task('build',gulp.parallel('styles','scripts'));

gulp.task('serve',gulp.parallel('styles:watch','scripts:watch'));








