var angular = require('angular');

var weatherApp = angular.module('weatherApp', [require('angular-route'), require('angular-resource')]);

weatherApp.config(function ($routeProvider) {
	$routeProvider
	.when ('/', {
		templateUrl:'pages/home.htm', 
		controller: 'homeController'
	})
	.when('/forecast', {
		templateUrl: 'pages/forecast.htm',
		controller: 'forecastController'
	})
	.when('/forecast/:days', {
		templateUrl: 'pages/forecast.htm',
		controller: 'forecastController'
	})
})

