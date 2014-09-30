'use strict';

angular.module('yapApp')
  .controller('FeedbackCtrl', function ($scope, ErrorsService) {
    $scope.generateError = function() {
      console.log('generating an error...');
      ErrorsService.add({ message: 'this is a new error...' });
      // throw new Error('oops, this is for testing');
    }
  });
