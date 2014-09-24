'use strict';

/**
 * @ngdoc function
 * @name yapApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yapApp
 */
angular.module('yapApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
