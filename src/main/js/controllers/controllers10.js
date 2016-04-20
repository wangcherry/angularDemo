angular.module('myApp', [])
    .controller('PeopleController', function($scope) {
        $scope.people = [
            { name: "Ari", city: "San Francisco" },
            { name: "Erik", city: "Seattle" }
        ];
    });
