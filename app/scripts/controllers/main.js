'use strict';

angular.module('codePadApp')
  .controller('MainCtrl', function ($scope, $location, Pad) {
    $scope.fetch = function(){
      $scope.busyPromise = Pad.query(function(data){
        $scope.pads = data;
      }).$promise;
    };

    $scope.fetch();

    $scope.createPad = function(padTitle){
      var pad = new Pad({title: $scope.newPadTitle});
      $scope.newPadTitle = "";
      $scope.busyPromise = pad.$save(function(p, headers){
        $scope.fetch();
      });
    };

    $scope.removePad = function(pad){
      $scope.busyPromise = pad.$delete().then(function(){
        $scope.fetch();
      });
    }
  });
