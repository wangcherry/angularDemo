angular.module('myApp', [])
    .controller('FormController', function($scope) {
        $scope.person = {
            name: null
        };
        $scope.people = [];
        $scope.submit = function() {
            if ($scope.person.name) {
                $scope.people.push({ name: $scope.person.name });
                $scope.person.name = '';
            }
        };
    });
