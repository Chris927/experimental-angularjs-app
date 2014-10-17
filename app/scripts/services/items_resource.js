'use strict';

angular.module('yapApp')
  .factory('ItemsResourceService', function($resource, ProfileService) {
    var itemsEndpoint = window.Config.itemsUrl;
    return $resource(itemsEndpoint + '/items', {}, {
      query: {
        method: 'GET',
        isArray: true,
        transformResponse: function(data, headers) {
          var payload = angular.fromJson(data);
          return payload.items;
        }
      }
    });
  });
