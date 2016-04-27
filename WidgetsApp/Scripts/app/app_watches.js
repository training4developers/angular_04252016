angular.module("WidgetApp", [])
	.controller("FirstCtrl", function ($scope) {

		document.querySelector("[name='message']").addEventListener("keyup", function () {
			$scope.message = document.querySelector("[name='message']").value;
			$scope.$digest();
		});

		$scope.$watch("message", function (newValue, oldValue, scope) {
			console.log("newValue:", newValue);
			console.log("oldValue:", oldValue);

			document.getElementById("message").textContent = newValue;
		});

	});