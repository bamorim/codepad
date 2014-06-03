'use strict';

angular.module('codePadApp')
  .controller('MainCtrl', function ($scope, Pad) {
    Pad.query(function(data){
      $scope.pads = data;
    });

    $scope.createPad = function(padTitle){
      var pad = new Pad({title: padTitle});
      pad.$save(function(p, headers){
        $location.path("#/pads/"+p.id);
      });
    };
  });
