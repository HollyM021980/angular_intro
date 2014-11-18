// initialize the app
angular.module('Exercise2', []);

// main controller
angular.module('Exercise2').controller('E2Controller', function($scope) {
  'use strict';

  $scope.result = 0;
  $scope.addIt = {
    firstNum: 0,
    secondNum: 0
  };

  // Remember to make reusable functions -- easier to test!!
  var calc = function(newValue, oldValue) {
    if (!isNaN($scope.addIt.firstNum) && !isNaN($scope.addIt.secondNum)) {
      $scope.result = $scope.addIt.firstNum + $scope.addIt.secondNum;
    };
  };

  $scope.$watchGroup(['addIt.firstNum','addIt.secondNum'], calc);

});
