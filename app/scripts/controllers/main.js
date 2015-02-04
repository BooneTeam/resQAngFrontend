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
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []
    geolocation.getLocation().then(function(data){
      $scope.coords = {latitude:data.coords.latitude, longitude:data.coords.longitude};
    });
    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {
      $scope.map = {center:
      $scope.coords,
        zoom: 14,bounds: {},
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

    $scope.home = {
      smallHome: 'start'
    };
    $scope.update = function(user){
      UpdateService.user(user)
        .then(function(data) {
        $scope.user = data;
          //var updatedData = [];
          angular.forEach(data,function(value,key){
            data[key].latitude  = data[key].lat;
            data[key].longitude = data[key].long;
          });
          console.log(data);
        $scope.fulfillerMarkers = data;
        });
    };
  })
  .directive('heroSideLeft', function(){
    return {
      restrict: "AE",
      templateUrl: "../../views/templates/hero_side_left.html"
    };
  })
  .directive('heroSideRight', function(){
    return {
      restrict: "AE",
      templateUrl: "../../views/templates/hero_side_right.html"
    };
  })
  .directive('homeText',function(){
    return {
      restrict: "AE",
      templateUrl:"./views/templates/home_text.html"
    };
  })
  .directive('homeBecome',function(){
    return {
      restrict: "AE",
      templateUrl:"./views/templates/home_become.html"
    };
  })
  .directive('homeLocate',function(){
    return {
      restrict: "AE",
      templateUrl:"./views/templates/home_locate.html"
    };
  })
;
