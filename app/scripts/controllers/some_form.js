'use strict';

/**
 * @ngdoc function
 * @name yapApp.controller:SomeFormCtrl
 * @description
 * # SomeFormCtrl
 * Controller of the yapApp
 */
angular.module('yapApp')
  .controller('SomeFormCtrl', function ($scope) {
    $scope.model = {};
    $scope.stuff = { // this is the schema
      type: 'object',
      properties: {
        name: { type: 'string', title: 'Your name', minLength: 2, description: 'How you would like to be referred to in this app' },
        title: { type: 'string', enum: [ 'Mr', 'Mrs', 'Dr', 'NaN' ] },
        email: {
          type: 'string',
          title: 'Your email',
          pattern: /^[a-zA-Z0-9+._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
          validationMessage: 'Please provide a valid email address' }
      },
      required: [ 'name', 'title', 'email' ]
    };
    $scope.stuffy = [
      'name',
      'title',
      'email'
    ];
    $scope.update = function(form) {
      console.log('update in SomeFormCtrl, form:', form);
      $scope.$broadcast('schemaFormValidate');
      if (form.$valid) {
        console.log('form is valid');
      }
    };
  });
