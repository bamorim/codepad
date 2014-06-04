'use strict';

describe('Filter: newlines', function () {

  // load the filter's module
  beforeEach(module('codePadApp'));

  // initialize a new instance of the filter before each test
  var newlines;
  beforeEach(inject(function ($filter) {
    newlines = $filter('newlines');
  }));

  it('should return the input prefixed with "newlines filter:"', function () {
    var text = 'a\nb';
    expect(newlines(text)).toBe('a<br/>b');
  });

});
