angular.module("WidgetApp", [])
	.controller("HomeCtrl", function ($scope, $q) {

		$.ajax({
				// option
				success: function (result) {
						$.ajax({
								// option
								success: function (result) {
										$.ajax({
											// option
											success: function (result) {
													$.ajax({
														// option
														success: function (result) {

														}
													});
											}
										});
								}
						});
				}
		});



		//var youngLady = $q.defer();
		//var youngMan = youngLady.promise;

		//youngMan.then(function () {
		//	console.log("yay!!!! she is marrying me!");
		//});

		//setTimeout(function () {
		//	youngLady.resolve();
		//}, 2000);
		//console.log("young man is waiting...");

		var youngMan = $q(function (resolve, reject) {

			setTimeout(function () {
				resolve("her mom and dad are making her say yes...");
				//reject("she is in love with his best friend...");
			}, 2000);

		});

		youngMan.then(function (result) {
			console.log(result);
			console.log("yay!!!! she is marrying me!");

			return $q(function (resolve, reject) {

				console.log("pick a date...")
				setTimeout(function () {
					resolve("date has been selected...");
					//reject("she is in love with his best friend...");
				}, 2000);

			});

		}).then(function (result) {

			console.log(result);
			console.log("reserve the facility on July 4th!");
			
		}).catch(function(result) {
			console.log(result);
			console.log("he is going to sign up eHarmony");
		});

		console.log("young man is waiting...");

	

	});
