var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/about", {
      templateUrl: "/pages/about.html?v=1",
      activetab:"about"
    })
    .when("/resume", {
      templateUrl: "/pages/resume.html",
      activetab:"resume"
    })
    .when("/green", {
      templateUrl: "green.htm",
    })
    .when("/blue", {
      templateUrl: "blue.htm",
    })
    .otherwise({
      redirectTo: '/about'
  });
});

app.controller("myCtrl", function ($scope, $route) {
  var vm = this;
  vm.$route = $route;
  debugger
});
