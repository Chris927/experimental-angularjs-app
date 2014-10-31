'use strict';

describe('Controller: DiaryIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('yapApp'));

  var DiaryIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DiaryIndexCtrl = $controller('DiaryIndexCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
