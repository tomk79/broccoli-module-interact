let gulp = require('gulp');
let plumber = require("gulp-plumber");//コンパイルエラーが起きても watch を抜けないようになる
let concat  = require('gulp-concat');
let browserify = require("gulp-browserify");//NodeJSのコードをブラウザ向けコードに変換

// src 中の *.js を処理
gulp.task('carousel:js', function(){
	return gulp.src(["./src_gulp/interactives/carousel/module.js", "./node_modules/tiny-slider/dist/min/tiny-slider.js"])
		.pipe(plumber())
		.pipe(concat('module.js'))
		.pipe(gulp.dest( './modules/interactives/carousel/' ))
	;
});
// src 中の *.css を処理
gulp.task('carousel:css', function(){
	return gulp.src(["./src_gulp/interactives/carousel/module.css.scss","./node_modules/tiny-slider/dist/tiny-slider.css"])
		.pipe(plumber())
		.pipe(concat('module.css.scss'))
		.pipe(gulp.dest( './modules/interactives/carousel/' ))
	;
});

let _tasks = gulp.parallel(
	'carousel:js',
	'carousel:css'
);

// src 中のすべての拡張子を監視して処理
gulp.task("watch", function() {
	return gulp.watch(["src_gulp/**/*"], _tasks);
});


// src 中のすべての拡張子を処理(default)
gulp.task("default", _tasks);
