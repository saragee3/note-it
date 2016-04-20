angular.module('note', [
  'note.auth',
  'note.notes',
  'note.services',
  'ngRoute'
  ])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/auth/signup.html',
    controller: 'AuthController'
  })
  .when('/signin', {
    templateUrl: 'app/auth/signin.html',
    controller: 'AuthController'
  })
  .when('/signup', {
    templateUrl: 'app/auth/signup.html',
    controller: 'AuthController'
  })
  .when('/notes', {
    templateUrl: 'app/notes/notes.html',
    controller: 'NotesController'
  })

  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.withCredentials = true;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
})