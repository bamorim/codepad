module.exports = function(config) {
  config.set({
    autoWatch: true,
    basePath: '../',

    frameworks: ['jasmine'],

    files: [
      'app/bower_components/ace-builds/src-min-noconflict/ace.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js',
      'app/bower_components/angular-blocks/dist/angular-blocks.js',
      'app/bower_components/angular-ui-ace/ui-ace.js',
      'app/scripts/**/*.js',
      'test/spec/**/*.js'
    ],

    exclude: [],

    browsers: [
      'PhantomJS',
      'Chrome'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-jasmine'
    ],

    colors: true,
  });
};
