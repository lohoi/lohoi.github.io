	var app = angular.module("webApp", ['ui.router']);

  app.controller('mainCtrl', function($scope) {
    $scope.test = "hello";
  });

	app.config(function($stateProvider) {
	  var home = {
	    name: 'home',
	    url: '/home',
	    templateUrl: 'index.html',
      controller: 'mainCtrl'
	  }

	  $stateProvider.state(home);
	});