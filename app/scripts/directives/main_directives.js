'use strict';

angular.module("webstormProjectsApp.main_directives",[])
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
      scope:{
        userType:'@'
      },
      templateUrl:"./views/templates/home_become.html",
      link: function(scope){

        //what does this do? Learn!
      }
    };
  })
  .directive('homeLocate',function(){
    return {
      restrict: "AE",
      templateUrl:"./views/templates/home_locate.html"
    };
  })
  .directive('signIn',function(){
    return{
      restrict:"AE",
      scope:{
        userType:'@'
      },
      templateUrl:"./views/templates/sign_in_form.html"
    };
  })
;
