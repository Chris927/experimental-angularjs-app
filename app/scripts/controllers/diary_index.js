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
    var calendar = $('#diaryCalendar');
    $log.log('DiaryIndexCtrl');
    calendar.fullCalendar({
      defaultView: 'agendaDay',
      header: false,
      height: 'auto',
      columnFormat: 'ddd, MMM D',
      allDaySlot: false,
      selectable: true,
      selectHelper: true,
      select: function(start, end) {
        var title = prompt('product and/or location and/or customer');
        var eventData;
        if (title) {
          eventData = {
            title: title,
            start: start,
            end: end
          }
          calendar.fullCalendar('renderEvent', eventData, true);
        }
        calendar.fullCalendar('unselect');
      }
    });
    $('#myModal').modal();
  });
