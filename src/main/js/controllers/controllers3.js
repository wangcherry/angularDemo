'use strict';

angular.module('myApp', [])
	.controller('MyController', function($scope, $interpolate) {
		// 设置监听
		$scope.$watch('emailBody', function(body) {
		if (body) {
			var template = $interpolate(body);
			$scope.previewText = template({to: $scope.to});
		}
	});
});