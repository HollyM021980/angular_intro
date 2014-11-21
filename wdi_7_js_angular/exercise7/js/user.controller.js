// user controller
angular.module('StaffingUI').controller('UserController', function($scope, $http, UserFactory, TitleFactory, SkillFactory) {
    'use strict';


    $scope.users = UserFactory.users;
    $scope.titles = TitleFactory.titles;
    $scope.skills = SkillFactory.skills;

    var updateSkills = function(user_id) {
        var promises = [];

        _.forEach($scope.skills, function(item) {
            var isChecked = item.checked;
            var wasChecked = typeof _.find($scope.user.skills, {id: item.id}) !== 'undefined';

            // add skill
            if (isChecked && !wasChecked) {
                promises.push($http.put(ServerUrl + 'users/' + user_id + '/skills/' + item.id));
            }

            // remove skill
            if (!isChecked && wasChecked) {
                promises.push($http.delete(ServerUrl + 'users/' + user_id + '/skills/' + item.id));
            }
        });

        return promises;
    };

    var clearForm = function() {
        $scope.user = {};

        UserFactory.fetch();
        SkillFactory.resetChecked();
    };

    $scope.upsertUser = function(user) {
      var params = {
        user: user
      };

      if (user.id) {
        $http.put('http://localhost:3000/users/' + user.id, params).success(function(response) {
          $q.all(updateSkills(user.id)).then(function() {
            clearForm();
          });
        });
      } else {
        $http.post('http://localhost:3000/users', params)
          .success(function(response) {
                $q.all(updateSkills(response.id)).then(function() {
                    clearForm();
                });
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

         // update skills based on this user
        _.forEach($scope.skills, function(item) {
            if ($scope.userHasSkill(item)) {
                item.checked = true;
            }
        });
   };

    $scope.removeUser = function(id) {
      for (var i=0; i < $scope.users.length; i++) {
        if ($scope.users[i].id === user.id) {
          $scope.users.splice(i, 1);
        };
      };
    };

    $scope.userHasSkill = function(skill) {
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
