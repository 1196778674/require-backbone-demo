({
    appDir: './js',
    baseUrl: './',
    dir: './dist',
    modules: [
        {
            name: "index"
        },
    ],
    fileExclusionRegExp: /^(r|build)\.js$/,
    optimizeCss: 'standard',
    removeCombined: true,
    optimize: "uglify",

    paths: {
        jquery: 'lib/jquery.min',
        store: 'lib/store.min',
        backbone: 'backbone/backbone',
        underscore: 'backbone/underscore',
    },
    shim: {
        jquery:{
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore'],
            exports: 'Backbone'
        }
    },
})