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
    var oldLength = document.cookies.length;
    console.log('oldLength', oldLength);
    document.cookie = '__testCookies=xx';
    var newLength = document.cookie.length;
    console.log('newLength', newLength);
    if (newLength === oldLength + 1) {
      $scope.areCookiesEnabled = true;
    }
  });
