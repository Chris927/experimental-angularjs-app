'use strict';

angular.module('yapApp')
  .controller('ProfileCtrl', function ($scope, $log, $state, ProfileService) {
    $scope.data = {
      name: ProfileService.getName(),
      sessionTitle: ProfileService.getSessionTitle(),
      sessionDuration: ProfileService.getSessionDuration()
    };
    $scope.update = function() {
      $log.log('update');
      ProfileService.setName($scope.data.name);
      ProfileService.setSessionTitle($scope.data.sessionTitle);
      ProfileService.setSessionDuration($scope.data.sessionDuration);
      $state.go('home');
    };
  });
