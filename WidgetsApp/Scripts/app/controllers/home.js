// IIFE
(function (angular) {

	function homeController($scope) {
		$scope.message = "Welcome Home!";
	}

	homeController.$inject = ["$scope"];

	angular.module("MyApp.Controllers")
		.controller("HomeCtrl", homeController);

})(angular);