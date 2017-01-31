var gulp = require('gulp'),
		clean = require('gulp-clean'),
		concat = require('gulp-concat'),
		replace = require('gulp-html-replace'),
		uglify = require('gulp-uglify'),
		usemin = require('gulp-usemin'),
		cssmin = require('gulp-cssmin'),
		sass = require('gulp-sass'),
		plumber = require('gulp-plumber'),
		browserSync = require('browser-sync');


gulp.task('default',['copy'],function(){
	gulp.start('usemin');
});

gulp.task('copy',['clean'],function(){
	return gulp.src('src/**/*')
			.pipe(gulp.dest('dist'));
});

gulp.task('clean',function(){
	return gulp.src('dist')
			.pipe(clean());
});

gulp.task('usemin',function(){
	gulp.src('src/**/*.html')
			.pipe(usemin({
				'js' : [uglify],
				'css' : [cssmin]
			}))
			.pipe(gulp.dest('dist'));
});


gulp.task('play',function(){
	browserSync.init({
		server: {
			baseDir: 'src'
		}
	});

	// SASS WORKFLOW

	gulp.watch('src/styles/**/*.sass').on('change', function(event){
		gulp.src('src/styles/style.sass')
				.pipe(plumber({
            handleError: function(error) {
              console.log(error);
              this.emit('end');
        		}
        }))
				.pipe(sass())
				.pipe(gulp.dest('src/css'));
	});

	gulp.watch('src/*.html').on('change', browserSync.reload);
	gulp.watch('src/**/*').on('change', browserSync.reload);

});


