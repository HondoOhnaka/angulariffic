'use strict';

describe('Service: Datagenerator', function () {

  // load the service's module
  beforeEach(module('angularifficApp'));

  // instantiate service
  var Datagenerator;
  beforeEach(inject(function (_Datagenerator_) {
    Datagenerator = _Datagenerator_;
  }));

  it('should do something', function () {
    expect(!!Datagenerator).toBe(true);
  });

});
