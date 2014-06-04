'use strict';

angular.module('codePadApp')
  .controller('MainCtrl', function ($scope, $location, Pad) {
    $scope.fetch = function(){
      Pad.query(function(data){
        $scope.pads = data;
      });
    };

    $scope.fetch();

    $scope.createPad = function(padTitle){
      var pad = new Pad({title: padTitle});
      pad.$save(function(p, headers){
        $scope.fetch();
      });
    };
  });
