'use strict';

angular.module('codePadApp')
  .controller('MainCtrl', function ($scope, Pad) {
    Pad.query(function(data){
      $scope.pads = data;
    });
  });
