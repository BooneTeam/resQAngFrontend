/*! angularjs-geolocation 11-09-2013 */
"use strict";
angular.module("geolocation", []).constant("geolocation_msgs", {
  "errors.location.unsupportedBrowser": "Browser does not support location services",
  "errors.location.notFound": "Unable to determine your location"
}), angular.module("geolocation").factory("geolocation", ["$q", "$rootScope", "$window", "geolocation_msgs", function(a, b, c, d) {
  return {
    getLocation: function() {
      var e = a.defer();
      return c.navigator && c.navigator.geolocation ? c.navigator.geolocation.getCurrentPosition(function(a) {
        b.$apply(function() {
          e.resolve(a)
        })
      }, function() {
        b.$broadcast("error", d["errors.location.notFound"]), b.$apply(function() {
          e.reject(d["errors.location.notFound"])
        })
      }) : (b.$broadcast("error", d["errors.location.unsupportedBrowser"]), b.$apply(function() {
        e.reject(d["errors.location.unsupportedBrowser"])
      })), e.promise
    }
  }
}]);
