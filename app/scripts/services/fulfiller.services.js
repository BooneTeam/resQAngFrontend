"use strict";

var app = angular.module('fulfiller.services',[]);

app.factory("FulfillerService",['$q','$http',function($q,$http){
  var service = {
    activeFulfillers: function(user){
      var d = $q.defer()
      $http.get('http://localhost:3003/api/fulfillers/active')
        .success(function(data){
          d.resolve(data);
        }).error(function(data){
          d.reject(data);
        })
      return d.promise;
    },

    createUser: function(user){
      user.name = user.first_name +" "+ user.last_name;
      user.active = false;
      user.password = 'password';
      console.log(user);
      var d = $q.defer()
      $http.post('http://localhost:3003/api/fulfillers/',user)
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
