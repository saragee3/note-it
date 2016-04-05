angular.module('note', [
  'note.auth',
  'note.notes',
  'note.facts',
  'note.services',
  'ngRoute'
  ])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/auth/signup.html',
    controller: 'AuthController'
  })
  .when('/notes', {
    templateUrl: 'app/notes/notes.html',
    controller: 'NotesController'
  })
  .when('/funfacts', {
  templateUrl: 'app/facts/facts.html',
  controller: 'FactsController'

  })

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
})