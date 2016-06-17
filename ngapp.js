require('angular');
require('angular-animate')

var app = angular.module('clg', ['ngAnimate']);

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

