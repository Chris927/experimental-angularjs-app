'use strict';

angular.module('yapApp')
  .controller('ItemsCtrl', function ($scope, $log, ProfileService, ItemsResourceService) {
    $scope.profileName = ProfileService.getName() || '(no name)';
    $scope.items = ItemsResourceService.query();
  });
