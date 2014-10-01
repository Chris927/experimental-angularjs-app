'use strict';

angular.module('yapApp')
  .controller('ReportErrorCtrl', function ($scope, ErrorsService) {
    $scope.errors = ErrorsService.errors();
    $scope.$on('$destroy', function() {
      ErrorsService.clear();
    });
  });
