'use strict';

/**
 * @ngdoc function
 * @name yapApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Supports the navigation header
 */
angular.module('yapApp')
  .controller('NavigationCtrl', function ($scope, $location) {
    $scope.isActive = function(loc) {
      return loc === $location.path();
    }
  });
