angular.module('Demo', []);

angular.module('Demo').directive('gaLorem', function() {
    return {
        restrict: 'EA',

        templateUrl: 'templates/lorem.html'
        // template: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
    };
});

angular.module('Demo').directive('hmNibbler', function() {
  return {
    restrict: 'EA',

    templateUrl: 'templates/hm-nibbler.html',

    scope: {
      repetitions: '@',  // one way, outside in

    }
  };
});

angular.module('Demo').filter('numRange', function(){
  return function(param){
    var arr = [1];
    if(param){
      var num = Number(param);
      if (num != NaN) {
        for (i=0; i<num -1; i++) {
          arr.push(i);
        };
      };
    };
    return arr;
  };
});


