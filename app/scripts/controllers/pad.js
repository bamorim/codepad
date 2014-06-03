'use strict';

angular.module('codePadApp')
  .controller('PadCtrl', function ($scope, $routeParams, Pad) {
    $scope.aceLoaded = function(block){
      return function(editor) {
        editor.session.setMode("ace/mode/"+block.type);
        editor.setAutoScrollEditorIntoView(true);
        editor.setOption("minLines", 2);
        editor.setOption("maxLines", 30);
      };
    };

    Pad.get({id: $routeParams.id}, function(pad){
      $scope.pad = pad;
    });
  });
