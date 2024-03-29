// initialize the app
angular.module('Exercise5', []);

// main controller
// $http as param needed for dependency
// injection.
angular.module('Exercise5').controller('MainController', function($scope, $http) {
    'use strict';

    $http.get('http://localhost:3000/titles').success(function(response) {
        $scope.titles = response;
    });
});
