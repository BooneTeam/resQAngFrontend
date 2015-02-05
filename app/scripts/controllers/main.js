'use strict';
/**
 * @ngdoc function
 * @name webstormProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webstormProjectsApp
 */
angular
  .module('webstormProjectsApp')
  .controller('MainController', function ($scope,uiGmapGoogleMapApi,UpdateService, geolocation) {
    $scope.home = {
      smallHome: 'start'
    };
    $scope.fulfillerMarkers=[];

    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []
    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    $scope.coords = {latitude: 0, longitude: 0};
    uiGmapGoogleMapApi.then(function(maps) {
      $scope.map = {center:
      $scope.coords,
        zoom: 14,
        bounds: {}
      };
      $scope.options = {scrollwheel: false};
      $scope.marker = {
        id: 0,
        coords: {
          latitude: 0,
          longitude: 0
        },
        options: { draggable: false }
      };
    });

    //Update Geo Center on User Find Me
    $scope.geo = function(user) {
      geolocation.getLocation().then(function (data) {
        $scope.map = {center:
          $scope.coords = {latitude: data.coords.latitude, longitude: data.coords.longitude},
          zoom: 14,
            bounds: {}
        };
        $scope.marker = {
          id: 0,
          coords: $scope.coords,
          options: { draggable: false }
        };
      });
    }

    $scope.update = function(item){
      switch(item){
        case item:
              console.log(item);
      }
      UpdateService.user(item)
        .then(function(data) {
        $scope.user = data;
          angular.forEach(data,function(value,key){
            data[key].latitude  = data[key].lat;
            data[key].longitude = data[key].long;
          });
        $scope.fulfillerMarkers = data;
        });
    };
  })
;
