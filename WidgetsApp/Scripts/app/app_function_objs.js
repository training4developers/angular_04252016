
var o = {
	firstName: "Bob",
	lastName: "Martin",
	getFullName: function () {
		return this.firstName + " " + this.lastName;
	}
};

var o2 = {
	firstName: "Jesse",
	lastName: "Marek",
	getFullName: function () {
		return this.firstName + this.lastName;
	}
};

o2.getFullName = o.getFullName;


console.log(o.getFullName());
console.log(o2.getFullName());
console.log(o2.getFullName === o.getFullName);








//var counter = 0;

//angular.module("WidgetApp", [])
//	.controller("HomeCtrl", function ($scope) {
//		console.log(counter++);

//		if ($scope.$id === 6) {
//			console.dir($scope);
//		}
//	})
//	.run(function($rootScope) {

//		$rootScope.message = "Mahesh Rocks!";

//	});