var app = angular.module('catdog', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			controller: 'SimpleController',
			templateUrl: 'partials/cat.html'

		})
		.when('/dog',
		{
			controller: 'DogController',
			templateUrl: 'partials/dog.html'
		})
		.otherwise({redirectTo: '/'});
});