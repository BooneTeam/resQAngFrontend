"use strict";

var app = angular.module('customer.services',[]);

app.factory("CustomerService",['$q','$http',function($q,$http){
  var service = {
    user: function(user){
      var d = $q.defer()
      $http.post('http://localhost:3004/users')
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
