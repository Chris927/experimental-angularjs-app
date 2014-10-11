'use strict';

/**
 * @ngdoc function
 * @name yapApp.service:ErrorsService
 * @description
 * # AboutCtrl
 * Controller of the yapApp
 */
angular.module('yapApp')
  .factory('ErrorsService', function() {
    var lastErrorNumber = 0;
    var errors = [];
    return {
      add: function(err, cause) {
        errors.push({ error: err, message: err.message, id: ++lastErrorNumber, cause: cause });
      },
      errors: function() {
        return errors;
      },
      clear: function() {
        errors.length = 0;
      }
    };
  });
