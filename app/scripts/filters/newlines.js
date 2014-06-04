'use strict';

angular.module('codePadApp')
  .filter('newlines', function () {
    return function (input) {
      if(input)
        return input.replace(/\n/g, '<br/>');
    };
  });
