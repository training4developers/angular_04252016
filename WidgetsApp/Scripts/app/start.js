(function (angular) {

	document.addEventListener("DOMContentLoaded", function () {

		// run other code before Angular runs

		angular.bootstrap(document.querySelector("main"), ["MyApp"]);

	});

})(angular)