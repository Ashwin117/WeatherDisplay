var weatherApp = angular.module('weatherApp');

weatherApp.directive('weatherSearchResult', function () {
	return {
		restrict: 'E',
		templateUrl: '../pages/directives/weatherSearchResult.htm',
		scope: {
			weatherDay: '=',
			convertToStandard: "&",
			convertToDate: "&",
			dateFormat: "@"
		}
	}
});