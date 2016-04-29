angular.module("WidgetApp", [])
	.factory("events", function () {

		var events = {};

		return {
			trigger: function (eventName, eventArgs) {

				if (!events[eventName]) {
					return;
				}

				events[eventName].forEach(function (eventHandler) {
					try {
						eventHandler(eventArgs);
					} catch (err) {
						console.error(err);
					}
				});

			},
			on: function (eventName, eventHandler) {

				if (!events[eventName]) {
					events[eventName] = [];
				}

				events[eventName].push(eventHandler);

			},
			once: function (eventName, eventHandler) {

			},
			off: function (eventName, eventHandler) {

			}
		};

	})
	.factory("widgetData", function ($http) {

		return {
			getAll: function () {
				return $http.get("/api/widgets");
			},
			get: function(widgetId) {
				return $http.get("/api/widgets/" + encodeURIComponent(widgetId));
			},
			insert: function (widget) {
				return $http.post("/api/widgets", widget);
			},
			update: function (widget) {
				return $http.put("/api/widgets/" + encodeURIComponent(widget.id), widget);
			},
			delete: function (widgetId) {
				return $http.delete("/api/widgets/" + encodeURIComponent(widgetId));
			}

		};

	})
	.controller("ListCtrl", function ($scope, widgetData, events) {

		function refreshWidgets() {
			widgetData.getAll().then(function (results) {
				console.log("widgets downloaded");
				$scope.widgets = results.data;
			});
			console.log("downloading widgets");
		}

		events.on("new-widget", function () {
			refreshWidgets();
		});

		refreshWidgets();

		//setInterval(function () {
		//	refreshWidgets();
		//}, 2000);
	})
	.controller("CreateCtrl", function ($scope, widgetData, events) {

		$scope.addWidget = function () {
			widgetData.insert($scope.newWidget).then(function (results) {
				$scope.newWidget = {};
				events.trigger("new-widget", results.data);
			});
			
		};


	});
