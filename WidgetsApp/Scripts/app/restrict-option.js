angular.module("WidgetApp", [])
	.directive("myDir", function () {

		// directive definition object
		return {
			restrict: "A",
			link: function(scope, element) {
				element.after("Hello World!");
			}

		};


	});
