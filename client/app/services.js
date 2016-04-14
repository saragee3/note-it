angular.module('note.services', [
  'note.notes',
  'note.auth'
  ])

.factory('Http', function ($http, Notes) {

  var articles = []

  var config = {
    params: {
        format: "json",
        action: "query",
        prop: "extracts",
        exchars: "140",
        exlimit: "10",
        exintro: "",
        explaintext: "",
        rawcontinue: "",
        generator: "search",
        gsrlimit: "4",
        callback: "JSON_CALLBACK"
    }
  };

  var url = "https://en.wikipedia.org/w/api.php?";

  var getWiki = function(data) {
    console.log(data)
    config.params.gsrsearch = data;
    return $http.jsonp(url,config).then(function(req) {
      var wiki = req.data.query.pages;
      if (articles.length) {
        articles = [];
      } 
      for (var key in wiki) {
        articles.push(wiki[key]);
      }
      console.log(articles);
    });
  }


  var signUpToDB = function(data) {
    $http({
      method: 'POST',
      url: '/users',
      data: data
    })
    .then(function(res) {
      console.log('line 45', res)
      return res;
    });
  };

  return {
    articles: articles,
    getWiki: getWiki,
    signUpToDB: signUpToDB
  }

});
