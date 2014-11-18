'use strict';

angular.module('yapApp')
  .factory('ProfileService', function() {
    if (!localStorage) {
      throw new Error('local storage not available');
    }
    return {
      getName: function() {
        return localStorage.getItem('name');
      },
      setName: function(name) {
        localStorage.setItem('name', name);
      },
      getSessionTitle: function() {
        return localStorage.getItem('sessionTitle');
      },
      setSessionTitle: function(title) {
        localStorage.setItem('sessionTitle', title);
      },
      getSessionDuration: function() {
        return +localStorage.getItem('sessionDuration');
      },
      setSessionDuration: function(duration) {
        localStorage.setItem('sessionDuration', duration);
      }
    };
  });
