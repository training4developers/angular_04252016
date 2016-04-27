angular.module("WidgetApp", [])
	.directive("cchRepeat", function () {

		return {
			transclude: true,
			compile: function (tElement, tAttrs) {

				var tokens = tAttrs.cchRepeat.split(" ");
				var collectionName = tokens[2];
				var itemName = tokens[0];
				var collectionExpr = tokens.slice(2).join(" ");

				console.log(collectionExpr);

				return function (scope, element, attrs, ctrl, transclude) {

					var childScopes = [];

					scope.$watchCollection(collectionName, function () {

						element.empty();
						childScopes.forEach(function (childScope) {
							childScope.$destroy();
						});
						childScopes = [];

						scope.$eval(collectionExpr).forEach(function (item) {

							var childScope = scope.$new();

							transclude(childScope, function (clone, scope) {

								scope[itemName] = item;
								element.append(clone);
								childScopes.push(scope);

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
