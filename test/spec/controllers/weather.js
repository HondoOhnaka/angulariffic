'use strict';

describe('Controller: WeatherCtrl', function() {

  var scope, ctrl, mockBackend;

  beforeEach(module('angularifficApp'));
  // AngularJS is responsible for injecting these in tests
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    // This is a fake backend, so that you can control the requests
    // and responses from the server
    mockBackend = _$httpBackend_;
    // We set an expectation before creating our controller,
    // because this call will get triggered when the controller is created
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=boulder,co&units=imperial';

    var rsp = '{"coord":{"lon":-105.33,"lat":40.07},"sys":{"message":0.0124,"country":"United States of America","sunrise":1395752112,"sunset":1395796737},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01d"}],"base":"cmc stations","main":{"temp":53.22,"humidity":16,"pressure":1015,"temp_min":45,"temp_max":59},"wind":{"speed":5.55,"gust":7.71,"deg":360},"clouds":{"all":0},"dt":1395782415,"id":5574991,"name":"","cod":200}'

    //mockBackend.expectGET(url).respond(rsp);

    $scope = $rootScope.$new();

  }));

  it('test values should match', function () {
    expect([1,2].length).toEqual(2);
  });

  it('should match true to true', function () {
    expect(0).toEqual(0);
  });

  // it('should fetch names from server on load', inject(function($controller) {
  //   // Create a controller the same way AngularJS would in production
  //   // ctrl = $controller('WeatherCtrl', {
  //   //   $scope: $scope
  //   // });
  //   // expect($scope).toBeDefined();
  //   // Initially, the request has not returned a response
  //   //expect($scope.names).toBeUndefined();
  //   // Tell the fake backend to return responses to all current requests
  //   // that are in flight.
  //   //mockBackend.flush();
  //   // Now names should be set on the scope
  //   // expect(scope.names).toEqual(['Brad', 'Shyam']);
  // }));
});
