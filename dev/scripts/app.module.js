var app = angular.module('minionModule', ['ngRoute']);
    'use strict';
    app.directive("globalHeader", function() {
        return {
            restrict: "E",
            templateUrl: "views/globalHeader.html"
        };
    })
    .directive("incomeList", function() {
        return {
            restrict: "E",
            templateUrl: "views/incomeList.html",
            controller: 'formsController'
        };
    })
    .directive("ngReturn", function() {
        return {
            restrict: "E",
            templateUrl: "views/return.html"
        };
    })
    .config(function($routeProvider) {
        $routeProvider
            .when('/ingresos', {
                templateUrl: 'views/income.html',
                controller: 'incomeController',
            })
            .when('/gastos', {
                templateUrl: 'views/spendings.html',
                controller: 'spendingsController'
            })
            .when('/tarjetas', {
                templateUrl: 'views/tarjetas.html'
            })
            .otherwise({
                redirectTo: '/',
                controller: 'mainController'
            });
    });