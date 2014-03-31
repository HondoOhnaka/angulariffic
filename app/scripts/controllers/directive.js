'use strict';

app.controller('DirectiveCtrl', function ($scope) {
  $scope.jumbo = {
    'title': 'This Jumbo Title',
    'img': {
      'url': 'http://www.gravatar.com/avatar/a86d9e27a25c7a51674b7edb46560284.png',
      'alt': 'My Alt Text',
      'class': 'img-circle'
    },
    'text': 'This is a bunch of text inside a jumbotron'
  };
});
