var gulp        = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var cp          = require('child_process');
var reload = browserSync.reload;

var AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

function showJekyllBuildNotification() {
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
        });
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
gulp.task('clean', del.bind(null, ['.tmp', 'dist/*', '!dist/.git'], {dot: true}));

// Compile and Automatically Prefix Stylesheets
gulp.task('styles', function () {
  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src([
    '_sass/index.scss'
  ])
    .pipe($.sass({
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe($.size({title: 'styles'}))
    .pipe(gulp.dest('css/'))
    .pipe($.csso('css/*.css'))
});
/**
 * Watch scss files for changes & recompile
 * Watch liquid/md/ files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(['_layouts/*.liquid', '_posts/*', '*.html'], ['jekyll-rebuild']);
    gulp.watch('_sass/*.scss', ['styles', 'jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
//gulp.task('default', ['browser-sync', 'watch']);

// Build Production Files, the Default Task
gulp.task('default', ['clean'], function (cb) {
  runSequence('browser-sync', ['styles', 'jekyll-build', 'watch'], cb);
});


module.exports = gulp;
