app.controller('ThemesCtrl', function($scope, $http){
  $http.get('json/themes.json').then(function(response){
    $scope.Themes = response.data;
  });
});
