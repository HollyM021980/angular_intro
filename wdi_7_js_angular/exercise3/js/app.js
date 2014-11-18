// initialize the app
angular.module('Exercise3', []);

// main controller
angular.module('Exercise3').controller('ShoppingCart', function($scope) {
  'use strict';

  $scope.cart =  [{
    name: 'orange',
    quantity: 2,
    price: 2.50
  },{
    name: 'apple',
    quantity: 4,
    price: 2.50
  },{
    name: 'banana',
    quantity: 3,
    price: 2.50
  },{
    name: 'mango',
    quantity: 1,
    price: 2.50
  }];

});
