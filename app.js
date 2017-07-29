var app = angular.module("webApp", ['ui.router']);

app.controller('mainCtrl', function($scope) {
  $scope.test = "hello";
});

app.config(function($stateProvider, $urlProvider) {
 $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'home.html',
    controller: 'homeCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'about.html'
  });
  $urlRouterProvider.otherwise('/home');
});