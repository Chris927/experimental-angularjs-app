'use strict';

var addBookableSessionsToCalendar = function(calendar, ProfileService) {
  var events = [];
  var startTime = moment().startOf('day').add(6, 'hours');
  for (var i = 0; i < 7; i++) {
    events.push({
      title: ProfileService.getSessionTitle(),
      start: moment(startTime),
      end: moment(startTime).add(ProfileService.getSessionDuration(), 'minutes')
    });
    startTime.add(15, 'minutes');
  }
  calendar.fullCalendar('addEventSource', events);
};

/**
 * @ngdoc function
 * @name yapApp.controller:DiaryIndexCtrl
 * @description
 * # DiaryIndexCtrl
 * Controller of the yapApp
 */
angular.module('yapApp')
  .controller('DiaryIndexCtrl', function ($scope, $log, ProfileService) {
    var calendar = $('#diaryCalendar');
    $log.log('DiaryIndexCtrl');
    calendar.fullCalendar({
      defaultView: 'agendaDay',
      header: false,
      height: $(window).height() - 50,
      columnFormat: 'ddd, MMM D',
      allDaySlot: false,
      editable: true,
      selectable: true,
      selectHelper: true,
      select: function(eventStart, eventEnd) {
        var title = prompt('product and/or location and/or customer');
        var eventData;
        var start = calendar.fullCalendar('getCalendar').moment(eventStart);
        var end = moment(start).add(45, 'minutes');
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
    addBookableSessionsToCalendar(calendar, ProfileService);
    $('#myModal').modal();
  });
