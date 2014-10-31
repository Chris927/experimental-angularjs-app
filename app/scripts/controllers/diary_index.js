'use strict';

/**
 * @ngdoc function
 * @name yapApp.controller:DiaryIndexCtrl
 * @description
 * # DiaryIndexCtrl
 * Controller of the yapApp
 */
angular.module('yapApp')
  .controller('DiaryIndexCtrl', function ($scope, $log) {
    $log.log('DiaryIndexCtrl');
    $('#diaryCalendar').fullCalendar({
      defaultView: 'agendaDay',
      header: false,
      height: 'auto',
      columnFormat: 'ddd, MMM D',
      allDaySlot: false
    });
  });
