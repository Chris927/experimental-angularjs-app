'use strict';

angular.module('yapApp')
  .controller('ItemsCtrl', function ($scope, $log, $state, ProfileService, ItemsResourceService) {
    $scope.profileName = ProfileService.getName() || '(no name)';
    $scope.items = ItemsResourceService.query();
    $scope.add = function() {
      var item = new ItemsResourceService();
      item.title = 'new item';
      item.uri = 'http://test.com';
      item.$save(function(savedItem) {
        $state.go($state.current, {}, { reload: true });
      });
    }
  });
