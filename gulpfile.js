var gulp 					= require('gulp');
		sass 					= require('gulp-sass');
		browsersync 	= require('browser-sync');
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify'),
		cleancss			= require('gulp-clean-css');
		rename				= require('gulp-rename');
		autoprefixer	= require('gulp-autoprefixer');
		notify        = require("gulp-notify"),

gulp.task('browser-sync', function() {
	browsersync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// open: false,
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});
		
gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass({ outputStyle: 'expand' }).on("error", notify.onError()))
	.pipe(rename({ suffix: '.min', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	.pipe(gulp.dest('app/css'))
	.pipe(browsersync.reload( {stream: true} ))
});

gulp.task('js', function() {
	return gulp.src([
		'app/js/preloader.js',
		'app/libs/jquery/jquery.min.js',
		'app/libs/aos/aos.js',
		'app/libs/magnific-popup/magnific-popup.js',
		//'app/libs/owl-carousel-2/owl.carousel.min.js',
		//'app/libs/bootstrap/js/bootstrap.min.js',
		'app/js/common.js', // Always at the end
		])
	.pipe(concat('scripts.min.js'))
	.pipe(uglify()) // Mifify js (opt.)
	.pipe(gulp.dest('app/js'))
	.pipe(browsersync.reload({ stream: true }))
});

gulp.task('watch', ['sass', 'js', 'browser-sync'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);
	gulp.watch('app/*.html', browsersync.reload);
	gulp.watch('app/*.php', browsersync.reload);
});

gulp.task('default', ['watch']);
