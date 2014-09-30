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
    var errors = [];
    return {
      add: function(err) {
        errors.push(err);
      },
      errors: function() {
        return errors;
      },
      clear: function() {
        errors = [];
      }
    };
  });
