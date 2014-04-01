'use strict';

app.directive('myJumbotron', function factory() {

  var directiveDefinitionObject = {
    restrict: 'E',
    templateUrl: 'views/partials/_myjumbotron.html',
    replace: true
  };
  return directiveDefinitionObject;
});
