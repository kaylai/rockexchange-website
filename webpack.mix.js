let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.autoload({
    jquery: ['$', 'window.jQuery',"jQuery","window.$","jquery","window.jquery"]
});

/**
 * Frontend Javascript Compile Script
 */
mix.sass('resources/scss/app.scss', 'public')
    .browserSync({
        proxy: 'http://localhost',
        files: ["public/app.scss", "public/app.js", "public/*.html"],
        ui: false,
        notify: false
    });
