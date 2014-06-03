'use strict';

angular.module('codePadApp')
  .controller('PadCtrl', function ($scope, $routeParams, Pad) {
    $scope.aceLoaded = function(block){
      return function(editor) {
        editor.session.setMode("ace/mode/"+block.type);
      };
    };

    Pad.get({id: $routeParams.id}, function(pad){
      $scope.pad = pad;
    });
  });
