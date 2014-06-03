'use strict';

describe('Service: Pad', function () {

  // load the service's module
  beforeEach(module('codePadApp'));

  // instantiate service
  var Pad;
  beforeEach(inject(function (_Pad_) {
    Pad = _Pad_;
  }));

  it('should do something', function () {
    expect(!!Pad).toBe(true);
  });

});
