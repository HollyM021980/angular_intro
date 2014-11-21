// initialize the app
angular.module('StaffingUI', [
    'ngRoute'
]);

angular.module('StaffingUI').run(function(UserFactory, TitleFactory, SkillFactory) {
    UserFactory.fetch();
    TitleFactory.fetch();
    SkillFactory.fetch();
});


angular.module('StaffingUI').config(function($routeProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html'
        })
        .when('/users', {
            templateUrl: 'templates/users.html'
        })
        .when('/titles', {
            templateUrl: 'templates/titles.html'
        })
        .when('/about', {
            templateUrl: 'templates/about.html'
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angular.module('StaffingUI').directive('hmModal', function() {
    return {
        restrict: 'E',

        transclude: true,

        templateUrl: 'templates/partials/modal.html',

        scope: {
            title: '@',
            uid: '@'
        }
    };
});



