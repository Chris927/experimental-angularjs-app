'use strict';

angular.module('yapApp')
  .controller('ReportErrorCtrl', function ($scope, ErrorsService) {
    $scope.errors = [];
    $scope.emailLink = "mailto:chris@uber5.com?subject=Error%20Report&body=" + 'testing body';

    var errorEmailText = '';

    ErrorsService.errors().forEach(function(e) {
      $scope.errors.push(JSON.stringify(e));
      errorEmailText += 'Error: ' + e.message + '\n';
      if (e.error.stack) {
        errorEmailText += '  stack: ' + e.error.stack;
      }
      errorEmailText += '\n';
    });
    $scope.emailBody = encodeURIComponent(errorEmailText);
    $scope.$on('$destroy', function() {
      ErrorsService.clear();
    });
  });
