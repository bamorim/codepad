'use strict';

angular.module('codePadApp')
  .controller('PadCtrl', function ($scope, $routeParams, Pad, Evaluator) {
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
      $scope.busyPromise = $scope.pad.$update();
    };

    $scope.evaluate = function(block){
      return Evaluator.evaluate(block.type, block.content);
    };

    $scope.getPad = function(){
      $scope.busyPromise = Pad.get({id: $routeParams.id}, function(pad){
        $scope.pad = pad;
      }).$promise;
    }
    $scope.getPad();
  });
