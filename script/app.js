var app = angular.module('starlord', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {templateUrl : 'home.html'})
  .when('/galaxie', {templateUrl : 'galaxie.html'})
  .when('/systemeSolaire', {templateUrl : 'systemeSolaire.html'})
  .when('/planete', {templateUrl : 'planete.html'})
  .otherwise({redirctTo:'/'});
});
