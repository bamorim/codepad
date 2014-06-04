'use strict';

angular
  .module('codePadApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'angular-blocks',
    'ui.ace',
    'angular-medium-editor',
    'cgBusy'
  ])
  .config(function ($routeProvider,$httpProvider) {
    $httpProvider.defaults.useXDomain = true; 
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/pads/:id', {
        templateUrl: 'views/pad.html',
        controller: 'PadCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('API_ENDPOINT', '//codepad-ufrj-2014-1.herokuapp.com')
