var app = angular.module("webApp", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html'
    });
    $urlRouterProvider.otherwise('/home');
});

app.controller('NavCtrl', function($scope, $state) {
    $scope.continue = function() {
        $scope.showLandingPage = false;
        $state.go('home');
    }
    $scope.showLandingPage = true;
});
