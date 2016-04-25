angular.module("WidgetApp", [])
	.controller("HomeCtrl", function ($scope) {
		//$scope.message = "WidgetApp!";

		$scope.colors = [
			"red", "gold", "black", "green",
			"white", "saffron", "blue", "brown",
			"hot pink", "yellow", "orange"
		];

		$scope.countries = [
			{ code: "DE", name: "Germany", continent: "Europe" },
			{ code: "CN", name: "China", continent: "Asia" },
			{ code: "IN", name: "India", continent: "Asia" },
			{ code: "US", name: "United States", continent: "North America" }
		];

		$scope.addColor = function () {
			$scope.colors.push($scope.newColor);
		};

	});