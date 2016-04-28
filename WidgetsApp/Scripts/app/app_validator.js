angular.module("WidgetApp", [])
	.directive("cchMinLength", function () {

		return {
			require: "ngModel",
			link: function (scope, element, attrs, ngModelCtrl) {

				function validate(value) {
					if (value != null && String(value).length >= parseInt(attrs.cchMinLength, 10)) {
						ngModelCtrl.$setValidity("cch-min-length", true);
						return value;
					} else {
						ngModelCtrl.$setValidity("cch-min-length", false);
						return;
					}
				}

				ngModelCtrl.$formatters.push(validate);
				ngModelCtrl.$parsers.push(validate);

			}

		};

	})
	.controller("HomeCtrl", function () {

	});
