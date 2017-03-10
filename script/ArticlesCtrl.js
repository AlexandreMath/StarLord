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
