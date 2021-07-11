//Load Gulp
var gulp = require( 'gulp' );

//Javascript and SCSS Compilers
var sass = require( 'gulp-sass' )(require( 'sass' ) );

//Use Gulp Plugins
var babelify = require( 'babelify' );
var rename = require( 'gulp-rename' );
var sourcemaps = require( 'gulp-sourcemaps' );
var autoprefixer = require( 'gulp-autoprefixer' );
var source = require( 'vinyl-source-stream' );
var buffer = require( 'vinyl-buffer' );
var uglify = require( 'gulp-uglify' );
var browserify = require( 'browserify' );

//Gulp Configuration for SCSS Build
var styleSRC = 'src/scss/style.scss';
var styleDIST = './build/css/';
var styleWATCH = 'src/scss/**/*.scss';

//Gulp Configuration for JSX Build
var scriptsSRC = 'index.js';
var scriptsFOLDER = 'src/js/';
var scriptsDIST = './build/jsx/';
var scriptsWATCH = 'src/js/**/*.js';
var scriptsFILES = [scriptsSRC];

//Gulp Task for CSS Build
gulp.task('style', function() {
	return gulp.src( styleSRC )
		.pipe(sourcemaps.init() )
		.pipe( sass({
			errorLogToConsole: true,
			outputStyle: 'compressed'
		}))
		.on( 'error', console.error.bind( console ) )
		.pipe(autoprefixer( {cascade: false } ) )
		.pipe(rename( { suffix:'.min' } ) )
		.pipe(sourcemaps.write( './' ) )
		.pipe(gulp.dest( styleDIST ) );
});

//Gulp Task for JS Build 
gulp.task('scripts', function(done) {
	scriptsFILES.map(function( entry ){
		return browserify({
			entries: [scriptsFOLDER + entry]
		})
		.transform( babelify, { presets: ['env'] } )
		.bundle()
		.pipe( source ( entry ) )
		.pipe( rename({ extname: '.min.js' }) )
		.pipe( buffer() )
		.pipe( sourcemaps.init({ loadMaps: true }) )
		.pipe( uglify() )
		.pipe( sourcemaps.write( './' ) )
		.pipe( gulp.dest( scriptsDIST ) );
	} );
	done();
});

//The Default Gulp Task
gulp.task( 'default', gulp.series('style', 'scripts') );

//Gulp Watch Task
gulp.task( 'watch', gulp.series('default', function() {
	gulp.watch('styleWATCH', ['style'] );
	gulp.watch('scriptsWATCH', ['scripts'] );
} ) );