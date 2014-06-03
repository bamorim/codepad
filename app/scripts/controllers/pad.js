'use strict';

angular.module('codePadApp')
  .controller('PadCtrl', function ($scope, $routeParams, $q, Pad) {
    Pad.get({id: $routeParams.id}, function(pad){
      $scope.pad = pad;

      $scope.supportedLanguages = ["javascript","ruby","clojure","haskell"]

      $scope.removeBlock = function(index){
        $scope.pad.blocks.splice(index,1);
      }

      $scope.addBlock = function(type){
        $scope.pad.blocks.push({
          type: type,
          content: ''
        });
      }

      $scope.evaluate = function(block){
        var deferred = $q.defer();

        deferred.resolve(eval(block.content));

        return deferred.promise;
      };
    });
  });
