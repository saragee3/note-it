angular.module('note', [
  'note.auth',
  'note.notes',
  'ngRoute'
  ])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/auth/signup.html',
    controller: 'AuthController'
  })
  .when('/notes', {
    templateUrl: 'app/notes/notes.html',
    controller: 'NotesController'
  })
})