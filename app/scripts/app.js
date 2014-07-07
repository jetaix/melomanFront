'use strict';

angular
  .module('melomanApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/category/:categoryID', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

