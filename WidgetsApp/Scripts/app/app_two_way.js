angular.module("WidgetApp", [])
	.controller("HomeCtrl", function ($scope) {
		$scope.message = "WidgetApp!";

		$scope.$watch(function () {
			console.log("$digest loop ran");
			var f;
			for (var t = 0; t < 1000000000; t++) {
				f = t;
			}
		});

	});