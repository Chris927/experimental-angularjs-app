'use strict';

/**
 * @ngdoc function
 * @name yapApp.controller:CookieCheckCtrl
 * @description
 * # CookieCheckCtrl
 * Check if cookies are enabled, so that warning can be displayed
 */
angular.module('yapApp')
  .controller('CookieCheckCtrl', function ($scope) {
    $scope.areCookiesEnabled = false;
    document.cookie = '__testCookies=x';
    var oldLength = document.cookie.length;
    document.cookie = '__testCookies=xx';
    var newLength = document.cookie.length;
    if (newLength === oldLength + 1) {
      $scope.areCookiesEnabled = true;
    }
  });
