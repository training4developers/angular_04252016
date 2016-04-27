angular.module("WidgetApp", [])
	.directive("myDir", function ($compile) {

		// directive definition object
		return {
			compile: function (tElement, tAttrs) {

				var tpl = tElement.html();
				tElement.empty();

				return function (scope, element) {

					function transclude(cloneFn) {

						var linkingFn = $compile(tpl);
						var domElements = linkingFn(scope);
						cloneFn(domElements);

					}

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

				}

			}
		};


	});
