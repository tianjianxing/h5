var gulp = require("gulp");
// var less = require("gulp-less");
// var cssmin = require("gulp-minify-css");
// var uglify = require("gulp-uglify");
// var rename = require("gulp-rename");
var $ =require("gulp-load-plugins")();

gulp.task("css",function(){
	return gulp.src(["less/**/*.less","less/no/yes.less"])
			   .pipe($.less())
			   .pipe($.cssmin())
			   .pipe(gulp.dest("./css/"));
})

gulp.task("jsmin",function(){
	return gulp.src("less/*.js")
			   .pipe($.uglify())
			   .pipe(gulp.dest("./css/"));
})

gulp.task("watchs",function(){
	gulp.watch("./less/**/*.less",gulp.series("css"));
	gulp.watch("./less/*.js",gulp.series("jsmin"));
})				
 gulp.task("default",gulp.series("watchs"));