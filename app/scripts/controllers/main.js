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
    .service('navLink', function Greeting() {
      var greeting = this;
      greeting.home = {userNav:'start',smallHome: 'start'}
    })

    .controller('NavController', function navCtrl($scope,navLink) {
      var nav = this;
      nav.home = navLink.home;
    })
  .controller('SignInController',function signInCtrl($scope, FulfillerService, CustomerService){
    $scope.logIn = function(user){
      console.log(user);
    }
  })
  .controller('FormCtrl',function($scope,FulfillerService){
    $scope.createFulfiller = function(user){
      console.log(user);
      console.log(this);
      FulfillerService.createUser(user)
        .then(function(data){
          console.log(data);
        });
    }

  })
  .controller('MainController', function mainCtrl($scope,uiGmapGoogleMapApi,UpdateService, geolocation, CustomerService,FulfillerService, navLink) {
    var main = this;

    main.home = navLink.home;
    $scope.home = {
      smallHome: 'start'
    }

    $scope.fulfillerMarkers=[];

    //TODO call fulfiller API to get list of these. Cache it
    $scope.fulfillmentTypes = [{id:0,label:'I Need Gas'},{id:1,label:'I Need A Tire'},{id:2,label:'I Need A Jump'}]
    $scope.selectedFulfillment = {id:0,label:'I Need Gas'};

    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []
    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    $scope.coords = {latitude: 30.2747, longitude: -97.7406};
    uiGmapGoogleMapApi.then(function(maps) {
      $scope.map = {center:
      $scope.coords,
        zoom: 14,
        bounds: {}
      };
      $scope.options = {scrollwheel: false};
      $scope.marker = {
        id: 'user',
        icon:{
          url: 'http://cdn.flaticon.com/png/256/27054.png',
          scaledSize: new google.maps.Size(34, 44)
        },
        coords: $scope.coords,
        options: { draggable: false }
      };
    });

    //Update Geo Center on User Find Me
    $scope.geo = function() {
      geolocation.getLocation().then(function (data) {
        $scope.map = {center:
          $scope.coords = {latitude: data.coords.latitude, longitude: data.coords.longitude},
          zoom: 14,
            bounds: {}
        };
        $scope.marker.coords = $scope.coords;
      });
    }

    $scope.createFulfiller = function(user){
      FulfillerService.createUser(user)
        .then(function(data){
          console.log(data);
        });
    }

    $scope.update = function(item){
      switch(item){
        case item:
              console.log(item);
      }
      FulfillerService.activeFulfillers(item)
        .then(function(data) {
          console.log(data);
        //$scope.user = data;
          angular.forEach(data,function(value,key){
            data[key].latitude  = data[key].current_location.lat;
            data[key].longitude = data[key].current_location.long;
          });
        $scope.fulfillerMarkers = data;
          $scope.fullfillers = {
            icon: {
              url: "https://cdn3.iconfinder.com/data/icons/flat-icons-medium-sized/64/life-buoy-512.png",
              scaledSize: new google.maps.Size(34, 44)
            }
          };
        });
    };
  })
;
