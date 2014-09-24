'use strict';

describe('Controller: StuffsCtrl', function () {

  // load the controller's module
  beforeEach(module('yapApp'));

  var StuffsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StuffsCtrl = $controller('StuffsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
