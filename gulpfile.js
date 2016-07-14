const gulp = require('gulp'),
	babel = require('gulp-babel'),
	livereload = require('gulp-livereload');

gulp.task('babel', () => {
    gulp.src('src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', () => {
	livereload.listen();
	gulp.watch('src/*.js', ['babel']);
});
