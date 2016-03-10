'use strict';

angular.module("myApp",[])
.controller('ParentController', function($scope) {
	$scope.person = {greeted: false};
})
.controller('ChildController', function($scope) {
	$scope.sayHello = function() {
		$scope.person.name = 'Ari Lerner';
	};
});
