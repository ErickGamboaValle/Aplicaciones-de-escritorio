let gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
let ts = require('gulp-typescript');

gulp.task('styles', function() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/styles'))
});

gulp.task('styles:watch', gulp.series('styles', function(done) {
        gulp.watch('src/sass/**/*.scss', gulp.series('styles'));
        done();
    })
)

gulp.task('scripts', function() {
  let project = ts.createProject('tsconfig.json');
  return project.src()
    .pipe(project())
    .pipe(gulp.dest('public/sripts'));
});

gulp.task('scripts:watch', gulp.series('scripts', function(done) {
        gulp.watch('src/**/*.ts', gulp.series('scripts'));
        done();
    })
)

gulp.task('serve', function(done) {
        const allTasks = gulp.parallel('styles:watch', 'scripts:watch');
        allTasks();
        done();
    }
)

gulp.task('default', gulp.parallel('styles', 'scripts'), function(done) {
  done();
});
