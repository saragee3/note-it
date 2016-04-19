angular.module('note.notes', ['smoothScroll'])

.controller('NotesController', function ($scope, $location, Auth, Notes, Http) {
  $scope.firstname = Auth.firstname[0];
  $scope.locations = Notes.locations;
  $scope.locations.articles = Http.articles;

  $scope.check = function() {
    if ($scope.street.length > 0 && $scope.city.length > 0) {
      $scope.go();
    }
      $scope.street = '';
      $scope.city = '';
      $scope.date = '';
  };

  $scope.go = function() {
    Notes.location($scope.street, $scope.city, $scope.date);
    Http.getWiki($scope.city);
  };


  $scope.delete = function(place) {
    var index = $scope.locations.indexOf(place);
    $scope.locations.splice(index, 1);
  };

  $scope.addTime = function () {
    console.log($scope.time)
    Notes.addTime($scope.time);
  }
})


.factory('Notes', function () {

  var locations = [];

  var location = function(street, city, date) {
    var address = street + ',' + city;

    locations.push({ 

        location: "http://maps.googleapis.com/maps/api/streetview?size=800x400&location=" + address, 
        dest: street,
        city: city,
        date: date 
        
      });
    currentCity = city;
  };


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
});
