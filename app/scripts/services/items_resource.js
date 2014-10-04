'use strict';

angular.module('yapApp')
  .factory('ItemsResourceService', function($resource, ProfileService) {
    var itemsEndpoint = 'http://salty-springs-6226.herokuapp.com';
    return $resource(itemsEndpoint + '/items/' + ProfileService.getName());
  });
