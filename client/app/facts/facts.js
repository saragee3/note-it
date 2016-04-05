angular.module('note.facts', [])

.controller('FactsController', function ($scope, Notes, Wiki) {

  $scope.currentLoc = Notes.locFact[0];
  $scope.currentCity = Notes.cityFact[0];

  $scope.articles = Wiki.articles;

});