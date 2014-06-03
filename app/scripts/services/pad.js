'use strict';

angular.module('codePadApp')
  .factory('Pad', function ($resource) {
    return $resource('data/pads/:id.json');
  });
