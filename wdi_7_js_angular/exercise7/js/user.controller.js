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
          $scope.removeUser(user.id);
        });
      $scope.users = UserFactory.users;
    };

    $scope.updateUser = function(user) {
      $scope.user = user;
    };

    $scope.removeUser = function(id) {
      for (var i=0; i < $scope.users.length; i++) {
        if ($scope.users[i].id === user.id) {
          $scope.users.splice(i, 1);
        };
      };
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

  $scope.toggleSkillSelection = function(skill) {
    debugger;
    // toggle selection for a given skill
     var idx = $scope.user.skills.indexOf(skill);

     // remove if skill is currently selected
     if (idx > -1) {
       $scope.user.skills.splice(idx, 1);
     }
     // add if skill is newly selected
     else {
       $scope.user.skills.push(skill);
     }
  };

});
