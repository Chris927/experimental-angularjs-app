'use strict';

/* This may fix the navbar to hide once a menu item has been clicked.
   Thanks, @Hardcoredevs on https://github.com/twbs/bootstrap/issues/12852
*/
$(".navbar-nav li a").click(function (event) {
  // check if window is small enough so dropdown is created
  var toggle = $(".navbar-toggle").is(":visible");
  if (toggle) {
    $(".navbar-collapse").collapse('hide');
  }
});

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
      .state('profile', {
        url: '/profile',
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
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
