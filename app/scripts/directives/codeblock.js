'use strict';

angular.module('codePadApp')
  .directive('codeBlock', function () {
    return {
      templateUrl: 'views/code_block.html',
      restrict: 'E',
      scope: {
        block: '=',
        onEvaluate: '=',
        supportedLanguages: '='
      },
      link: function postLink(scope, element, attrs) {
        scope.evaluate = function(){
          var promise = scope.onEvaluate(scope.block);
          promise.then(function(val){
            scope.evaluation = val;
          });
        }

        scope.aceLoaded = function(editor){
          editor.session.setMode("ace/mode/"+scope.block.type);
          editor.setAutoScrollEditorIntoView(true);
          editor.setOption("minLines", 2);
          editor.setOption("maxLines", 30);
          editor.setOption("fontSize", 16);
        };
      }
    };
  });
