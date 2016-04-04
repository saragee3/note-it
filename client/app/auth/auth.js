angular.module('note.auth', [])

.controller('AuthController', function ($scope, $location) {

  $scope.signup = function() {
    console.log($scope.first)
    //$location.path('/notes')
  }
  
})