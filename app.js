var app = angular.module("webApp", ['ui.router', 'ui.bootstrap']);

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

$(document).ready(function(){
	// hide .navbar first
    $(".navbar").hide();


	$(".greetings").fadeIn(2000);

    // fade in .navbar
    $(function () {
        $( window ).scroll(function() {
            $('.navbar').fadeOut();
            clearTimeout( $.data( this, "scrollCheck" ) );
            $.data( this, "scrollCheck", setTimeout(function() {
                $('.navbar').fadeIn();
            }, 250) );

        });
    });

});
