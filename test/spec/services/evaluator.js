'use strict';

describe('Service: Evaluator', function () {

  // load the service's module
  beforeEach(module('codePadApp'));

  // instantiate service
  var Evaluator;
  beforeEach(inject(function (_Evaluator_) {
    Evaluator = _Evaluator_;
  }));

  it('should do something', function () {
    expect(!!Evaluator).toBe(true);
  });

});
