angular.module('note.services', [
  'note.facts',
  'note.notes'
  ])

.factory('Wiki', function ($http, Notes) {

  var city = Notes.cityFact[0];
  console.log(city);

  var articles = []

  var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' +
        city + '&format=json';

  var getWiki = function () {
    return $http({
      method: 'GET',
      url: wikiUrl, 
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(function (res) {
      var data = res.data[1];
      for (var i = 0; i < 4; i++) {
        articles.push({
          article: data[i], 
          url: 'http://en.wikipedia.org/wiki/' + data[i]
        });
        console.log(i + ' : ' + data[i])
      }
      console.log('articles', articles)
      return articles;
    })
  }

  getWiki();

  return {
    city: city,
    articles: articles,
    wikiUrl: wikiUrl,
    getWiki: getWiki
  }

})