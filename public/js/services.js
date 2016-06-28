var weatherApp = angular.module('weatherApp');

weatherApp.service('cityService', function () {
	var self = this;

	self.name = 'New York, NY';
});