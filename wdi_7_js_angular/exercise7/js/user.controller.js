// user controller
angular.module('StaffingUI').controller('UserController', function($scope, $http, UserFactory, TitleFactory, SkillFactory) {
    'use strict';


    $scope.users = UserFactory.users;
    $scope.titles = TitleFactory.titles;
    $scope.skills = SkillFactory.skills;

    $scope.upsertUser = function(user) {
      var params = {
        user: user
      };

      if (user.id) {
        $http.put('http://localhost:3000/users/' + user.id, params);
      } else {
        $http.post('http://localhost:3000/users', params)
          .success(function(response) {
            $scope.users.push(response);
        });
      };
      $scope.user = {};
      UserFactory.fetch();

    };

    $scope.deleteUser = function(user) {
      $http.delete('http://localhost:3000/users/' + user.id)
        .success(function(response) {
          for (var i=0; i < $scope.users.length; i++) {
            if ($scope.users[i].id == user.id) {
              $scope.users.splice(i, 1);
            };
          };
        });
      $scope.users = UserFactory.users;
    };

    $scope.updateUser = function(user) {
      $scope.user = user;
    };

    $scope.hasSkill = function(skill) {
      var isSkill = false;
      // Look at filter for checking if it is in the list
      if (typeof $scope.user !== 'undefined' && typeof $scope.user.skills !== 'undefined') {
        for (var i=0; i < $scope.user.skills.length; i ++) {
          if (skill.id === $scope.user.skills[i].id) {
            isSkill = true;
            break;
          }
        };
      };
      return isSkill;
    };

});
