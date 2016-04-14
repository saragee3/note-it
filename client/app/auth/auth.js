angular.module('note.auth', ['note.services'])

.controller('AuthController', function ($scope, $location, Auth, Http) {


  $scope.signup = function() {
    $scope.user = {};
    Auth.currentUser($scope.first);
    $scope.user = {username: $scope.newuser, 
                    password: $scope.pass};
    Http.signUpToDB($scope.user);
    $location.path('/notes');
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
});
