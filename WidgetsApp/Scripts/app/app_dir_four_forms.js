angular.module("WidgetApp", [])
	.directive("myDir", function($compile) {

		// directive definition object
		return {
			compile: function (tElement, tAttrs) {
				// post-link function

				tElement.append("<div>Compile: {{message}}</div>");

				return {
					pre: function() {

					},
					post: function (scope, element) {
						var linkingFn = $compile("<div>PostLink: {{message}}</div>");
						var domElements = linkingFn(scope);
						element.append(domElements);

						scope.message = "Goodbye World!";

					}
				};
			}
		};

	});

	
	//.directive("myDir", function($compile) {

	//	// directive definition object
	//	return {
	//		compile: function (tElement, tAttrs) {
	//			// post-link function

	//			tElement.append("<div>Compile: {{message}}</div>");

	//			return function (scope, element) {

	//				var linkingFn = $compile("<div>PostLink: {{message}}</div>");
	//				var domElements = linkingFn(scope);
	//				element.append(domElements);

	//				scope.message = "Goodbye World!";

	//			};
	//		}
	//	};

	//});

	// Second Form - Directive Definition Object - Link Option
	//.directive("myDir", function() {

	//	// directive definition object
	//	return {
	//		// post-link function
	//		link: function (scope, element) {
	//			element.html("Hello World!");
	//		}
	//	};

	//});
	// First Form - PostLink Only
	//.directive("myDir", function () {

	//	// post-link function
	//	return function (scope, element) {
	//		element.html("Hello World!");
	//	};

	//});