'use strict';

/**
 * @ngdoc function
 * @name yapApp.controller:DiaryCtrl
 * @description
 * # DiaryCtrl
 * Controller of the yapApp
 */
angular.module('yapApp')
  .controller('DiaryCtrl', function ($scope, $log) {
    var calendar = $('#diaryCalendar');
    $scope.selectViaMenu = function() {
      $log.log('selectViaMenu');
      var m = $.fullCalendar.moment('2014-11-11');
      $log.log('m', m);
      var e = m.add(120, 'minute');
      calendar.fullCalendar('select', m, e);
    }
  });
