'use strict';

angular
  .module('codePadApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'angular-blocks',
    'ui.ace'
  ])
  .config(function ($routeProvider) {
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
  });
