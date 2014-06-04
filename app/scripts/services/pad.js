'use strict';

angular.module('codePadApp')
  .factory('Pad', function ($resource) {
    return $resource(
      '//192.168.0.7:9000/pads/:id.json',
      {id: "@id"},
      {update: {method: "PUT"}}
    );
  });
