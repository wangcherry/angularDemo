angular.module('myApp', [])
    .directive('mySharedScope', function() {
        return {
            restrict: 'A',
            priority: 100,
            template: 'Name: {{customer.name}}<br /> Street: {{customer.street}}'
        };
    })
    .directive('myDomDirective', function () {
	    return {
	        link: function ($scope, element, attrs) {
	            element.bind('click', function () {
	                element.html('You clicked me!');
	            });
	            element.bind('mouseenter', function () {
	                element.css('background-color', 'yellow');
	            });
	            element.bind('mouseleave', function () {
	                element.css('background-color', 'white');
	            });
	        }
    	};
	});