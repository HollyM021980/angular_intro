// title controller
angular.module('StaffingUI').controller('TitleController', function($scope, $http, TitleFactory) {
    'use strict';

    $scope.titles = TitleFactory.titles;

    $scope.upsertTitle = function(title) {
      var params = {
        title: title
      };

      if (title.id) {
        $http.put('http://localhost:3000/titles/' + title.id, params);
      } else {
        $http.post('http://localhost:3000/titles', params)
          .success(function(response) {
            $scope.titles.push(response);
        });
      };
      $scope.title = {};
    };

    $scope.deleteTitle = function(title) {
      $http.delete('http://localhost:3000/titles/' + title.id)
        .success(function(response) {
          for (var i=0; i < $scope.titles.length; i++) {
            if ($scope.titles[i].id == title.id) {
              $scope.titles.splice(i, 1);
            };
          };
        });
    };

    $scope.updateTitle = function(title) {
      $scope.title = title;
    };

});
