angular.module('note.notes', [])

.controller('NotesController', function ($scope, Auth, Notes) {
  $scope.firstname = Auth.firstname[0]

  $scope.go = function() {
    Notes.location($scope.street, $scope.city, $scope.date)
  }

  $scope.check = function() {
    if ($scope.street.length > 0 || $scope.city.length > 0) {
      $scope.go();
    }
      $scope.street = '';
      $scope.city = '';
      $scope.date = '';
  }

  $scope.locations = Notes.locations;
  $scope.dest = Notes.dest;

  $scope.delete = function(index) {
    Notes.locations.splice(index, 1);
  }

})

.factory('Notes', function () {

  var locations = [];

  var location = function(street, city, date) {
    var address = street + ',' + city;

    locations.push({ 

        location: "http://maps.googleapis.com/maps/api/streetview?size=500x250&location=" + address, 
        dest: street,
        date: date 

      });


    console.log('locations', locations)
  }

  return {
    locations: locations,
    location: location
  }
 })

.filter('capitalize', function() {
    return function(input, all) {
      var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
      return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    }
  })
