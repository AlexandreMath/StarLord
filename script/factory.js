app.factory('ArticleFactory', function($http, $q){
  var factory = {
    articles : false,
    getArticles : function(){
      var deferred = $q.defer();
       $http.get('articles.json').success(function(data, status){
         factory.articles = data;
         deferred.resolve(factory.articles);
       }).error(function(data, status){
         deferred.reject("Imposible d'ouvrie le fichier");
       });
      return deferred.promise;
    },
  };
  return factory;
});
