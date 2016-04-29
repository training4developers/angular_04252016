angular.module("WidgetApp", [])
	//.service("widgetData", function () {

		
	//	this.getAll = function () {
	//		return [{ id: 1, name: "Widget 1" }];
	//	};

	//})
	.factory("widgetData", function () {

		console.log("running widget data factory");

		var widgets = [{ id: 1, name: "Widget 1" }];
		var lastWidgetId = 1;

		return {
			getAll: function () {
				return widgets;
			},
			insert: function (widget) {
				widget.id = ++lastWidgetId;
				widgets.push(widget);
			}
		};

	})
	.controller("HomeCtrl", function ($scope, widgetData) {

		$scope.widgets = widgetData.getAll();

	})
	.controller("FooterCtrl", function ($scope, widgetData) {

		$scope.addWidget = function () {
			widgetData.insert({ name: $scope.newWidgetName });
		};

	});
