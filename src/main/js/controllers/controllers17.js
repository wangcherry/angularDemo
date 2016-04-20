'use strict';
angular.module('myApp', [])
    .controller('SomeController',['$scope',
    	function($scope) {
	    	$scope.title = '点击展开';
	    	$scope.text = '这里是内部的内容。';
		}
	]);