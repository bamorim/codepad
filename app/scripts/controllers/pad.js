'use strict';

angular.module('codePadApp')
  .controller('PadCtrl', function ($scope, $routeParams, $q, Pad) {
    $scope.supportedLanguages = ["javascript","ruby","python","clojure"]

    $scope.removeBlock = function(index){
      $scope.pad.blocks.splice(index,1);
    };

    $scope.addBlock = function(type){
      $scope.pad.blocks.push({
        type: type,
        content: ''
      });
    };

    $scope.updatePad = function(){
      //We should add some "loading screen" here
      $scope.pad.$update();
    };

    $scope.evaluate = function(block){
      var deferred = $q.defer();

      deferred.resolve(eval(block.content));

      return deferred.promise;
    };

    Pad.get({id: $routeParams.id}, function(pad){
      $scope.pad = pad;
    });
  });
