angular.module("WidgetApp", [])
	.directive("myDir", function () {

		return {

			link: function (scope, element, attrs) {

				console.dir(attrs);

				attrs.$addClass("jonathan");
				attrs.$removeClass("jonathan");

				console.log(attrs.$normalize("steve-kavitha"));

				attrs.$observe("cool", function (value) {
					console.log("cool: " + value);
				})


			}

		}

	})
	.controller("HomeCtrl", function ($scope) {
		$scope.coolMessage = "Hi Class!";
	});
