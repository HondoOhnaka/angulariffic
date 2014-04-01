/* global app:true */
'use strict';

var app = angular.module('angularifficApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'xeditable',
  'ngJustGage'
]);

// required by angular-xeditable
app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/weather', {
        templateUrl: 'views/weather.html',
        controller: 'WeatherCtrl'
      })
      .when('/todo', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl'
      })
      .when('/directives', {
        templateUrl: 'views/directives.html',
        controller: 'DirectiveCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
