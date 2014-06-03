'use strict';

angular.module('codePadApp')
  .directive('codeBlock', function () {
    return {
      template: '<div>'+
        '<div ui-ace="{onLoad: aceLoaded}" ng-model="block.content" ></div>'+
        '<button ng-click="evaluate()">Evaluate</button>'+
        '<div>{{evaluation}}</div>'+
        '<select ng-model="block.type" ng-options="lang for lang in supportedLanguages"></select>'+
        '</div>',
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
        };
      }
    };
  });
