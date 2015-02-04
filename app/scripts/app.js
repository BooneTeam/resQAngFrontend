'use strict';

/**
 * @ngdoc overview
 * @name webstormProjectsApp
 * @description
 * # webstormProjectsApp
 *
 * Main module of the application.
 */
angular
  .module('webstormProjectsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps',
    'webstormProjectsAppWieners',
    'geolocation'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyDzvzjY4T170-QGnzHt0VpNQQ79C6hCrS4',
      v: '3.17',
      libraries: 'weather,geometry,visualization'
    });
  });
