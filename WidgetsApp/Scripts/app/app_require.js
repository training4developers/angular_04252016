angular.module("WidgetApp", [])
	.controller("firstDirCtrl", function ($scope, $element, $attrs) {
		this.doIt = function () {
			console.log("do it!");
		};
	})
	.directive("firstDir", function () {

		return {
			controller: "firstDirCtrl",
			link: function(scope, element, attrs) {
			}
		};
	})
	.directive("secondDir", function () {
		return {
			require: ["?firstDir", "^^thirdDir", "secondDir"],
			controller: function() {
				this.doIt3 = function() { };
			},
			link: function (scope, element, attrs, ctrl) {
				if (ctrl[0]) {
					ctrl[0].doIt();
				}

				ctrl[1].doIt2();
			}
		};
	})
	.directive("thirdDir", function () {

		return {
			controller: function () {
				this.doIt2 = function () { console.log("do it 2!"); }
			}
		}

	})
	.controller("HomeCtrl", function () {

	});
