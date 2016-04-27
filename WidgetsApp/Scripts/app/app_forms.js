angular.module("WidgetApp", [])
	.controller("HomeCtrl", function ($scope) {

		$scope.contact = {
			kindOfLegend: "superhero"
		};

		$scope.countries = [
			{ code: "DE", name: "Germany", continent: "Europe" },
			{ code: "FR", name: "France", continent: "Europe" },
			{ code: "TR", name: "Turkey", continent: "Europe" },
			{ code: "RU", name: "Russia", continent: "Asia" },
			{ code: "CN", name: "China", continent: "Asia" },
			{ code: "IN", name: "India", continent: "Asia" },
			{ code: "US", name: "United States", continent: "North America" },
			{ code: "CA", name: "Canada", continent: "North America" },
			{ code: "MX", name: "Mexico", continent: "North America" }
		];

		$scope.submitContact = function (contactForm, contact) {

			if (contactForm.$valid) {
				console.log("send the contact info...");
			} else {
				console.log("error with the form");
			}

		};

	});