"use strict";var app=angular.module("angularifficApp",["ngCookies","ngResource","ngSanitize","ngRoute","ui.bootstrap","xeditable","ngJustGage"]);app.run(["editableOptions",function(a){a.theme="bs3"}]),app.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/weather",{templateUrl:"views/weather.html",controller:"WeatherCtrl"}).when("/todo",{templateUrl:"views/todo.html",controller:"TodoCtrl"}).otherwise({redirectTo:"/"})}]),app.controller("MainCtrl",["$scope",function(a){a.donothing=[{}]}]),app.controller("WeatherCtrl",["$scope","$http",function(a,b){a.city="boulder",a.state="co",a.value="99",a.currtime=(new Date).getTime(),a.getWeather=function(){a.url="http://api.openweathermap.org/data/2.5/weather?q="+a.city+","+a.state+"&units=imperial",b({method:"GET",url:a.url}).success(function(b,c){console.log("success: response status: "+c),a.data=b,a.status=c,a.currtime=(new Date).getTime()}).error(function(a,b){console.log("there was an error: "+b)})}}]),app.controller("TodoCtrl",["$scope",function(a){a.todos=[{id:1,name:"get milk",completed:!1},{id:2,name:"wash car",completed:!1},{id:3,name:"feed baby",completed:!1},{id:4,name:"go to sleep",completed:!1}],a.completed={},a.addItem=function(b){a.todos.push({id:a.todos.length,name:b,completed:!1}),a.item=""},a.markComplete=function(b){a.completed.push({id:b.id,name:b.name,completed:!0}),a.todos.splice(b,1)},a.removeItem=function(b){a.todos.splice(b,1)}}]);