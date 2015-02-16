"use strict";

var app = angular.module('webstormProjectsApp.services',[]);

app.factory('UpdateService', ['$q','$http',function($q,$http){
    var service = {
      user: function(user){
        var d = $q.defer()
        $http.get('http://localhost:3005/fulfillers.json')
          .success(function(data){
            d.resolve(data);
          }).error(function(data){
            d.reject(data);
          })
        return d.promise;
      }
    }
    return service;
  }]);


