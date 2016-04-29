(function (angular) {

	function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {

		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state("home", {
				url: "/",
				template: "<h1>Home</h1><nav><ul><li><a ui-sref='about.detail'>About</a></li></ul></nav><div>{{message}}</div>",
				controller: "HomeCtrl"
			})
			.state("about", {
				template: "<h1>About</h1><div ui-view='mission'></div><div ui-view='history'></div><div ui-view='team'></div>",
				controller: "AboutCtrl"
			})
			.state("about.detail", {
				url: "/about",
				views: {
					mission: {
						controller: function ($scope) { $scope.title = "Mission"; },
						template: "<h2>{{title}}</h2>"
					},
					history: {
						controller: function ($scope) { $scope.title = "History"; },
						template: "<h2>{{title}}</h2>"
					},
					team: {
						controller: function ($scope) { $scope.title = "Team"; },
						template: "<h2>{{title}}</h2>"
					}
				}
			});

	}

	routerConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];


	angular.module("MyApp.Services").config(routerConfig);


})(angular)