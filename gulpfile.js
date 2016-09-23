var gulp = require('gulp');
var notify =  require('gulp-notify');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var run = require('gulp-run');
var del = require('del');
var size = require('gulp-size');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

function showJekyllBuildNotification() {
    browserSync.notify("<span style='color: grey'>Running:</span> $ jekyll build");
}

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (cb) {
	showJekyllBuildNotification();
	var runJekyll = new run.Command('bundle exec jekyll serve --incremental');
	return run(runJekyll)
    .pipe(gulp.dest('output'))
	// cb();
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Launch the BrowserSync Server
 */
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: '_site'
        }
    });
});

// Clean Output Directory
gulp.task('clean', del.bind(null, '_includes/', {dot: true}));

gulp.task('minify-css', function() {
  return gulp.src('css/index.css')
    .pipe(cleanCSS())
    .pipe(size({title: 'styles'}))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('_includes/css/'));
});

/**
 * Watch scss files for changes & recompile
 * Watch liquid files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(['_layouts/*.liquid', '_posts/*', '*.html'], ['jekyll-rebuild']);
    gulp.watch(['css/*.css', '_sass/*.scss'], ['minify-css', 'jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */

gulp.task('default', ['clean'], function (cb) {
  runSequence('browser-sync', ['minify-css', 'jekyll-build', 'watch'], cb);
});


module.exports = gulp;
