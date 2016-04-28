angular.module("WidgetApp", [])
	.directive("secondDir", function () {

		return {
			priority: 20,
			controller: function () {
				console.log("second dir");
			}
		};


	})
	.directive("firstDir", function () {

		return {
			priority: 10,
			controller: function () {
				console.log("first dir");
			}
		};

	})
	.controller("HomeCtrl", function () {

	});
