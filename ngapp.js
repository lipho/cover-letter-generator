require('angular');
require('angular-animate')

var app = angular.module('clg', ['ngAnimate']);

app.filter('capitalize', function() {
	return function(input, all) {
		var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
		return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
	}
});

app.controller('formCtrl', ['$scope', function($scope){
	
	$scope.date = new Date();
	
	$scope.person = {};

	$scope.job = {}

	$scope.currentJob = {}

	$scope.resetUser = function() {
		$scope.person = {};
	};

	$scope.resetCurrent = function() {
		$scope.currentJob = {};
	}

	$scope.resetJob = function() {
		$scope.job = {};
	}

	$scope.reset = function() {
		this.resetUser();
		this.resetJob()
		this.resetCurrent();
	};

}]);

