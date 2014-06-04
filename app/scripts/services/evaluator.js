'use strict';

angular.module('codePadApp')
  .factory('Evaluator', function (API_ENDPOINT, $q, $http) {
    return {
      evaluate: function (type, content) {
        var deferred = $q.defer();
        
        $http.post( API_ENDPOINT + '/pads/evaluate', {type: type, content: content}).
          success(function(data, status, headers, config){
            deferred.resolve(data);
          }).
          error(function(data, status, headers, config){
            deferred.resolve({
              error: data
            });
          });

        return deferred.promise;
      }
    };
  });
