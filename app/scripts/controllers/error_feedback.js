'use strict';

/**
 * @ngdoc function
 * @name yapApp.controller:ErrorFeedbackCtrl
 * @description
 * # ErrorFeedbackCtrl
 * Provide errors and error related interaction.
 */
angular.module('yapApp')
  .controller('ErrorFeedbackCtrl', function ($scope, ErrorsService) {
    // $scope.errors = [ { message: 'first error' }, { message: 'next error' } ];
    $scope.errors = ErrorsService.errors();
  });
