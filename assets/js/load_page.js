var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider,$locationProvider) {
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
  $locationProvider.html5Mode(true);
});

app.controller("myCtrl", function ($scope, $route) {
  var vm = this;
  vm.$route = $route;
});
