var weatherApp = angular.module('weatherApp');

var APPID = 'a4ac9d7c00bc24bb82973a1bda01ec85';

weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {
	$scope.cityName = cityService.name;

	$scope.$watch('cityName', function () {
		cityService.name = $scope.cityName;
	});
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function ($scope, $resource, $routeParams, cityService) {
	$scope.cityName = cityService.name;

	$scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', 
		{callback: "JSON_CALLBACK"}, {get: { method: "JSONP"}});

	$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.cityName, cnt: $routeParams.days || 2, APPID: APPID });

	console.log($scope.weatherResult);

	$scope.convertDate = function (inputDate) {
		return new Date(inputDate * 1000);
	}

	$scope.convertToFahrenheit = function (degK) {
		return Math.round((1.8 * (degK - 273)) + 32);
	}

}]);