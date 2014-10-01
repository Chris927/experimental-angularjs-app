'use strict';

/**
 * @ngdoc function
 * @name yapApp.controller:ErrorFeedbackCtrl
 * @description
 * # ErrorFeedbackCtrl
 * Provide errors and error related interaction.
 */
angular.module('yapApp')
  .controller('ErrorFeedbackCtrl', function ($scope, $location, ErrorsService) {
    $scope.errors = ErrorsService.errors();
    $scope.$watch('errors.length', function(newValue) {
      $scope.hasErrors = newValue && newValue > 0;
    });
    $scope.dismiss = function() {
      ErrorsService.clear();
    };
    $scope.showAlert = function() {
      return $location.path() != '/error';
    };
  });
