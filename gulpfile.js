var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-ruby-sass');
var prefix      = require('gulp-autoprefixer');
var mincss      = require('gulp-minify-css');
var uncss       = require('gulp-uncss-task');
var rename      = require('gulp-rename');
var notify      = require('gulp-notify');
var cp          = require('child_process');

function showJekyllBuildNotification () {
    browserSync.notify("<span style='color: grey'>Running:</span> $ jekyll build");
}

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (cb) {
	showJekyllBuildNotification();
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', function () {
            cb();
		    gulp.run('styles');
        });
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['jekyll-build', 'styles'], function() {
    browserSync.init(null, {
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Compile files from _sass into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('styles', function() {
	return gulp.src('_sass/index.scss')
		.pipe(sass({ style: 'compressed' }))
		.pipe(prefix('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('_site/css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(mincss())
		.pipe(gulp.dest('_site/css'))
		.pipe(notify({ message: 'Styles task complete' }));
});

/**
 * Watch scss files for changes & recompile
 * Watch liquid/md/ files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('_sass/*.scss', ['styles']);
    gulp.watch(['_layouts/*.liquid', '_posts/*', '*.html'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);

module.exports = gulp;