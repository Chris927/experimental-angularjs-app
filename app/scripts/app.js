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
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      });
  });
