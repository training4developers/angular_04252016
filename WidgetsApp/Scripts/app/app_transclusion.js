angular.module("WidgetApp", [])
	.directive("myDir", function () {

		// directive definition object
		return {
			transclude: true,
			//template: "Template! <div ng-transclude></div> <div ng-transclude></div> <div ng-transclude></div> <div ng-transclude></div> <div ng-transclude></div> <div ng-transclude></div> <div ng-transclude></div>",
			link: function (scope, element, attrs, ctrl, transclude) {
				scope.message = "Ron Rocks in his Jeep in the flood at his estate!";

				transclude(function (clone) {
					element.append(clone);
				});

				transclude(function (clone) {
					element.append(clone);
				});

				transclude(function (clone) {
					element.append(clone);
				});

				transclude(function (clone) {
					element.append(clone);
				});

			}
		};


	});
