'use strict';

/**
 * @ngdoc function
 * @name yapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yapApp
 */
angular.module('yapApp')
  .controller('TestCtrl', function ($scope) {
    $scope.test = 'hi, 42';
  });
