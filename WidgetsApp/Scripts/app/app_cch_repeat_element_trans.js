angular.module("WidgetApp", [])
	.directive("cchRepeat", function () {

		return {
			transclude: 'element',
			compile: function (tElement, tAttrs) {

				var tokens = tAttrs.cchRepeat.split(" ");
				var collectionName = tokens[2];
				var itemName = tokens[0];
				var collectionExpr = tokens.slice(2).join(" ");

				console.log(collectionExpr);

				return function (scope, element, attrs, ctrl, transclude) {

					var childScopes = [];
					var itemElements = [];

					scope.$watchCollection(collectionName, function () {

						var lastElement = element;

						itemElements.forEach(function (itemElement) {
							angular.element(itemElement).scope().$destroy();
							itemElement.remove();
						});
						itemElements = [];

						scope.$eval(collectionExpr).forEach(function (item) {

							var childScope = scope.$new();

							transclude(childScope, function (clone, scope) {

								scope[itemName] = item;
								lastElement.after(clone);
								childScopes.push(scope);

								lastElement = clone;
								itemElements.push(clone);

							});

						});

					});


				};
			}

		};


	})
	.controller("HomeCtrl", function($scope, $timeout) {

		$scope.colors = ["red", "blue", "green", "orange"];

		$timeout(function () {
			console.log("added purple");
			$scope.colors.push("purple");
		}, 5000);

	});
