angular.module('myApp', [])
	.directive('myDirective', function() {
		return {
			restrict: 'A',
			replace: true,
			scope: {
				myUrl: '=someAttr', // 经过了修改
				myLinkText: '@'
			},
			template: '\
			<div>\
			<label>My Url Field:</label>\
			<input type="text"\
			ng-model="myUrl" />\
			<a href="{{myUrl}}">{{myLinkText}}</a>\
			</div>'
	};
});