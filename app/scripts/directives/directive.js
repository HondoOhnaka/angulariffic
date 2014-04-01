'use strict';

app.directive('myJumbotron', function factory() {
  return {
    restrict: 'E',
    templateUrl: 'views/partials/_myjumbotron.html',
    replace: true
  };
});

var dataGenSvc = angular.module('DataGen', []);

app.directive('testDirective', function factory() {
  return {
    restrict: 'E',
    templateUrl: 'views/partials/_foo.html',
    replace: true
  };
});
