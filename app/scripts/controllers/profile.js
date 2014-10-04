'use strict';

angular.module('yapApp')
  .controller('ProfileCtrl', function ($scope, $log, $state, ProfileService) {
    $scope.data = {
      name: ProfileService.getName()
    };
    $scope.update = function() {
      $log.log('update');
      ProfileService.setName($scope.data.name);
      $state.go('home');
    };
  });
