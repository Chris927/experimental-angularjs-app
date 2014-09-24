'use strict';

/**
 * @ngdoc function
 * @name yapApp.controller:StuffsCtrl
 * @description
 * # StuffsCtrl
 * Controller of the yapApp
 */
angular.module('yapApp')
  .controller('StuffsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
