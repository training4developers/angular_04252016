angular.module("WidgetApp", [])
	.controller("HomeCtrl", function ($scope, $q) {

		var p1 = $q(function (resolve) {
			setTimeout(function () { console.log("p1 resolved."); resolve("a"); }, 2000);
		});
	
		var p2 = $q(function (resolve) {
			setTimeout(function () { console.log("p2 resolved."); resolve("b"); }, 4000);
		});

		var p3 = $q(function (resolve, reject) {
			setTimeout(function () { console.log("p3 rejected."); reject("c"); }, 6000);
		});

		var p4 = $q(function (resolve) {
			setTimeout(function () { console.log("p4 resolved."); resolve("d"); }, 8000);
		});

		var p5 = $q.all([p1, p2]).then(function () {
			console.log("all done");
			console.log(arguments);
		});

		$q.all([p5, p3, p4]).then(function () {
			console.log("all done");
			console.log(arguments);
		}).catch(function() {
			console.log("one rejected");
			console.log(arguments);
		});


	});
