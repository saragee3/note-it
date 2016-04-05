angular.module('note.services', [
  'note.notes'
  ])

.factory('Wiki', function ($http, Notes) {

  var city = Notes.cityFact[0];
  console.log(city);

  var articles = []

  var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' +
        city + '&format=json&callback=wikiCallback';

  var fb = 'http://graph.facebook.com/';

  var getWiki = function () {
    return $http({
      method: 'GET',
      url: wikiUrl, 
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(function mySuccess(res) {
      console.log(res.data)
      articles.push(res.data)
    })
  }

  getWiki();

  return {
    city: city,
    articles: articles,
    wikiUrl: wikiUrl,
    getWiki: getWiki,
    fb: fb
  }

})