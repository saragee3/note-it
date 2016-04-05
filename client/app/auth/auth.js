angular.module('note.auth', [])

.controller('AuthController', function ($scope, $location, Auth) {

  $scope.signup = function() {
    Auth.currentUser($scope.first);
    $location.path('/notes')
  }

  
})

 .factory('Auth', function () {
  var firstname = [];

  var currentUser = function (user) {
    firstname.push(user);
    console.log(firstname)
  }

  return {
    firstname: firstname,
    currentUser: currentUser
  }  
})
