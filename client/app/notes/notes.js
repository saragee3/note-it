angular.module('note.notes', [])

.controller('NotesController', function ($scope, $location, Auth, Notes) {
  $scope.firstname = Auth.firstname[0]
  $scope.locations = Notes.locations;

  $scope.check = function() {
    if ($scope.street.length > 0 && $scope.city.length > 0) {
      $scope.go();
    }
      $scope.street = '';
      $scope.city = '';
      $scope.date = '';
  }

  $scope.go = function() {
    Notes.location($scope.street, $scope.city, $scope.date)
  }

  $scope.locations = Notes.locations;

  $scope.delete = function(place) {
    var index = $scope.locations.indexOf(place)
    $scope.locations.splice(index, 1);
  }

  $scope.addTime = function () {
    console.log($scope.time)
    Notes.addTime($scope.time);
  }

  $scope.facts = function (city) {
    $location.path('/funfacts')
  }
})

.factory('Notes', function () {

  var locations = [];
  var locFact = [];
  var cityFact = [];

  var location = function(street, city, date) {
    var address = street + ',' + city;

    locations.push({ 

        location: "http://maps.googleapis.com/maps/api/streetview?size=500x250&location=" + address, 
        dest: street,
        city: city,
        date: date 

      });

    locFact.push(street);
    cityFact.push(city);
    console.log('locations', locations)
    console.log('loc', locFact)
    console.log('city', cityFact)

  }

  var addTime = function (time) {
    console.log(time)
  }


  return {
    locations: locations,
    location: location,
    addTime: addTime,
    cityFact: cityFact,
    locFact: locFact
  }
 })

.filter('capitalize', function() {
    return function(input, all) {
      var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
      return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    }
  })
