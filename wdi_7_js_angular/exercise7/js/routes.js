angular.module('StaffingUI').config(function($routeProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
        })
        .when('/users', {
            templateUrl: 'templates/users.html',
            controller: 'UserCtrl'
        })
        .when('/titles', {
            templateUrl: 'templates/titles.html',
            controller: 'TitleCtrl'
        })
        .when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })
        .when('/about', {
            templateUrl: 'templates/about.html',
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html',
        })
        .otherwise({
            redirectTo: '/'
        });
});
