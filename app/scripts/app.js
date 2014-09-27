'use strict';

/**
 * @ngdoc overview
 * @name yapApp
 * @description
 * # yapApp
 *
 * Main module of the application.
 */
angular
  .module('yapApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/stuffs', {
        templateUrl: 'views/stuffs.html',
        controller: 'StuffsCtrl'
      })
      .when('/stuffs2', {
        templateUrl: 'views/stuffs2.html',
        controller: 'Stuffs2Ctrl'
      })
      .when('/stuffs3', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
