'use strict';

describe('Controller: Stuffs2Ctrl', function () {

  // load the controller's module
  beforeEach(module('yapApp'));

  var Stuffs2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Stuffs2Ctrl = $controller('Stuffs2Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
