angular.module('myApp', [])
    .controller('EquationController', function($scope) {
        $scope.equation = {};
        $scope.change = function() {
            $scope.equation.output = parseInt($scope.equation.x) + 2;
        };
    });
