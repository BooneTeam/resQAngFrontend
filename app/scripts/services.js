"use strict";
angular
  .module('webstormProjectsAppWieners',[])
.factory('UpdateService', ['$q','$http',function($q,$http){
    var service = {
      user: function(user){
        var d = $q.defer()
        $http.get('http://localhost:3005/fulfillers.json')
          .success(function(data){
            d.resolve(data);
          }).error(function(data){
            d.reject(data);
          })
        //user.saved = true;
        //var poo = $q.defer(),
        //  returnUser = user;

        return d.promise;
      }
    }
    return service;
  }]);
