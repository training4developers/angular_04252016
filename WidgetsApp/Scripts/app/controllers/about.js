// IIFE
(function (angular) {

	function controller($scope) {
		$scope.message = "Welcome to About!";
	}

	controller.$inject = ["$scope"];

	angular.module("MyApp.Controllers")
		.controller("AboutCtrl", controller);

})(angular);