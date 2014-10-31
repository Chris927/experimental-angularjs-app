'use strict';

/**
 * @ngdoc function
 * @name yapApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Supports the navigation header
 */
angular.module('yapApp')
  .controller('NavigationCtrl', function ($scope, $rootScope, $log, $location) {
    $scope.isActive = function(loc) {
      return loc === $location.path();
    };
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      $log.log('toState', toState, toParams);
      if (toState.name.match(/^diary/)) {
        $scope.hideNavigation = true;
      } else {
        $scope.hideNavigation = false;
      }
    });
  });
