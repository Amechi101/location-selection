"use strict";


angular.module('locationApp').config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'locationApp/components/home/home.html',
            controller  : 'HomeController',
            controllerAs: 'home'
        });
});