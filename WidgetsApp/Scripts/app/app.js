angular.module("WidgetApp", [])
	.filter("cchUpperCase", function () {

		return function (value) {
			return String(value).toLowerCase();
		};

	})
	.filter("cchAppend", function () {

		return function (value, strToAppend) {
			return String(value) + String(strToAppend);
		};

	}).controller("HomeCtrl", function ($scope) {

		$scope.message = "Hi Class!";

	});
