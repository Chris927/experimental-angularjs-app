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
    'oauth',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'schemaForm'
  ])
  .config(function($provide) {
    $provide.decorator('$exceptionHandler', function($delegate, ErrorsService) {
      return function(exception, cause) {
        ErrorsService.add(exception, cause);
        $delegate(exception, cause);
      }
    });
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state('access_token', {
        template: '',
        url: '/access_token=:token',
        controller: function($scope, $rootScope, $location, $state, $timeout, AccessToken) {
          var hash = $location.path().substr(1);
          console.log('hash', hash);
          AccessToken.setTokenFromString(hash);
          $timeout(function() {
            $rootScope.$broadcast('$routeChangeSuccess');
            $state.go('home');
          }, 10);
        }
      })
      .state('feedback', {
        url: '/feedback',
        templateUrl: 'views/feedback.html',
        controller: 'FeedbackCtrl',
        resolve: {
          config: function() {
            return window.Config;
          }
        }
      })
      .state('items', {
        url: '/items',
        templateUrl: 'views/items.html',
        controller: 'ItemsCtrl'
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
