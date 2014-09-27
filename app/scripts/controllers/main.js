'use strict';

/**
 * @ngdoc function
 * @name yapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yapApp
 */
angular.module('yapApp')
  .controller('MainCtrl', function ($scope, $cookieStore) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Other Stuff'
    ];
    $scope.areCookiesEnabled = false;
    $cookieStore.put('_testCookies', '123');
    var cookieValue = $cookieStore.get('_testCookies');
    if (cookieValue) {
      $cookieStore.remove('_testCookies');
      $scope.areCookiesEnabled = true;
    }
  });
