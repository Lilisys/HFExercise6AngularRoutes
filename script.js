var app = angular.module('catdog', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/cat',
		{
			controller: 'mainCtrl',
			templateUrl: 'partials/cat.html'

		})
		.when('/dog',
		{
			controller: 'dogCtrl',
			templateUrl: 'partials/dog.html'
		})
		.otherwise({redirectTo: '/'});
});

app.controller('mainCtrl', function($scope){
	$scope.print = 'AHHHHHH';
});

app.controller('dogCtrl', function($scope){
	$scope.print = 'beep';
});