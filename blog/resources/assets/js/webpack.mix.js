const mix = require('laravel-mix');

mix.js('resources/assets/js/laravel-echo-setup.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');