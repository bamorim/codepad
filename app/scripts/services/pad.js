'use strict';

angular.module('codePadApp')
  .factory('Pad', function (API_ENDPOINT, $resource) {
    return $resource(
      API_ENDPOINT + '/pads/:id.json',
      {id: "@id"},
      {update: {method: "PUT"}}
    );
  });
