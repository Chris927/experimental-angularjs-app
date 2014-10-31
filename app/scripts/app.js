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
  .config(function($httpProvider) {
    // $httpProvider.defaults.useXDomain = true;
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.interceptors.push(function(AccessToken) {
      return {
        request: function(config) {
          if (config.url.indexOf(window.Config.itemsUrl) != -1) {
            var token = AccessToken.get();
            if (token) {
              config.headers.Authorization = 'Bearer ' + token.access_token;
            }
          }
          console.log('config.headers', config);
          return config;
        }
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
      .state('diary', {
        url: '/diary',
        templateUrl: 'views/diary.html'
      })
      .state('diary.index', {
        url: '/',
        templateUrl: 'views/diary-index.html',
        controller: 'DiaryIndexCtrl'
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
