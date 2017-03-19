/*Controller qui gère les articles, une première fonctionnalité qui sert à aller chercher les articles dans le json
Une deuxième fonctionnalité qui sert à afficher les articles de qualités(mit à true)*/
app.controller('ArticlesCtrl', function($scope, $http, $filter){

  $scope.search = {};

  $http.get('json/articles.json').then(function(response){
    $scope.articles = response.data });

  /*$scope.searchFnct = function(value, index, array){
    if(value.qualite == true){
      return true;
    }
    return false;
  }*/

});
