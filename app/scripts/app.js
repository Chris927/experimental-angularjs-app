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
      .state('feedback', {
        url: '/feedback',
        templateUrl: 'views/feedback.html'
      })
      .state('reportError', {
        url: '/error',
        templateUrl: 'views/report_error.html',
        controller: 'ReportErrorCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      });
  });
