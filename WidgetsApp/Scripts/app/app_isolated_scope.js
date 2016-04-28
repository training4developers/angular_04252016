angular.module("WidgetApp", [])
	.directive("myDir", function ($rootScope) {

		// ddo - directive definition object
		return {
			//template: "<div>MyDir Scope ID: {{$id}}, Message: {{message}}</div>",
			scope: {
				msg: "=",
				formattedMsg: "@oneWay",
				clickMe: "&"
			},
			template: "Dir: {{msg}}  <input ng-model='msg' type='text'> {{formattedMsg}}
				<button ng-click='clickMe()'>Click Me!</button>",
			link: function (scope) {
				//console.log(Object.getPrototypeOf(scope) === Object.getPrototypeOf($rootScope));

			}
		};

	})
	.controller("HomeCtrl", function($scope, $timeout) {

		$scope.message = "Hi Class!";

		$scope.doIt = function () {
			console.log("did it!");
		};

	});
