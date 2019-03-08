var gulp = require("gulp");
//加载gulp-load-plugins插件，并马上运行它
var plugins = require("gulp-load-plugins")();
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var minifyCss = require("gulp-clean-css");
var minifyHtml = require("gulp-minify-html");
const babel = require('gulp-babel');
var del = require("del");
gulp.task("minify-js", done => {
  gulp
    .src(['src/js/*.js', '!src/js/j*.js', '!src/js/a*.js', '!src/js/layui.js']) // 要压缩的js文件
    .pipe(babel())
    .pipe(uglify()) //使用uglify进行压缩,更多配置请参考：
    .pipe(gulp.dest("dist/js")); //压缩后的路径
  gulp
    .src(['src/js/j*.js', 'src/js/a*.js', 'src/js/layui.js']) // 要压缩的js文件
    .pipe(gulp.dest("dist/js")); //压缩后的路径
  done();
});
gulp.task("minify-css", done => {
  gulp
    .src("src/css/*.css") // 要压缩的css文件
    .pipe(minifyCss()) //压缩css
    .pipe(gulp.dest("dist/css"));
  gulp
    .src("src/css/**") // 要压缩的css文件
    .pipe(gulp.dest("dist/css"));
  done();
});
gulp.task("minify-html", done => {
  gulp
    .src("src/*.html")
    .pipe(gulp.dest("dist"));
  done();
});
gulp.task("font", done => {
  gulp.src("src/font/**").pipe(gulp.dest("dist/font"));
  done();
});
gulp.task("clean", done => {
  del("dist");
  done();
});
gulp.task("images", (done) => {
  gulp.src("src/images/*")
    .pipe(gulp.dest("dist/images"));
  done();
});
gulp.task(
  "default",
  gulp.series(
    "minify-js",
    "minify-css",
    "minify-html",
    "images",
    "font",
    done => {
      console.log("starting build");
      done();
    }
  )
);