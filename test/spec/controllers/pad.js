'use strict';

describe('Controller: PadCtrl', function () {

  // load the controller's module
  beforeEach(module('codePadApp'));

  var PadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PadCtrl = $controller('PadCtrl', {
      $scope: scope
    });
  }));
});
