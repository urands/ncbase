//var elixir = require('laravel-elixir');
var gulp = require('gulp');
var bower = require('gulp-bower');






gulp.task('bower', function() {
  return bower( { directory: './bower_components', cwd: './' })
    .pipe(gulp.dest('lib/'))
});

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

/*
elixir(function(mix) {
    mix.less('app.less');
});
*/