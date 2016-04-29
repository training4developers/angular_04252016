angular.module("WidgetApp", [])
	.provider("widgetData", function () {

		console.log("running widget data provider");

		var widgets;
		var lastWidgetId;

		return {
			initialize: function(initialWidgets) {
				widgets = initialWidgets;
				lastWidgetId = initialWidgets.length;
			},
			// equivalent to the factory
			$get: function() {

				return {
					getAll: function () {
						return widgets;
					},
					insert: function (widget) {
						widget.id = ++lastWidgetId;
						widgets.push(widget);
					}
				};
			}
		};

	})
	.config(function (widgetDataProvider) {

		widgetDataProvider.initialize([{ id: 1, name: 'Widget 1' }]);

	})
	.controller("HomeCtrl", function ($scope, widgetData) {

		$scope.widgets = widgetData.getAll();

	})
	.controller("FooterCtrl", function ($scope, widgetData) {

		$scope.addWidget = function () {
			widgetData.insert({ name: $scope.newWidgetName });
		};

	});
