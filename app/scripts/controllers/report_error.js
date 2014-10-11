'use strict';

angular.module('yapApp')
  .controller('ReportErrorCtrl', function ($scope, ErrorsService) {
    $scope.errors = [];
    ErrorsService.errors().forEach(function(e) {
      console.log('error', e);
      $scope.errors.push(JSON.stringify(e));
    });
    $scope.$on('$destroy', function() {
      ErrorsService.clear();
    });
  });
