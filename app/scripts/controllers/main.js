'use strict';

/**
 * @ngdoc function
 * @name yapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yapApp
 */
angular.module('yapApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
