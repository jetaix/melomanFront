'use strict';

angular.module('melomanApp')
  .controller('CategoryCtrl', function ($scope, $http, $routeParams) {

    $scope.categoryName = ($routeParams.categoryName);

    $scope.getIdCate = function(id){

      $http({
        method: 'GET',
        url: 'http://dev.api-meloman.com:8888/v1/category/' + id}).
        success(function(data, status, headers, config) {
          $scope.dataCategory = (data);
        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    };

    // A FAIRE DE MANIERE DYNAMIC
    if ($scope.categoryName == 'pop') {
      $scope.getIdCate(3);
    }
    else if ($scope.categoryName == 'soul') {
      $scope.getIdCate(2);
    }

    switch ($scope.categoryName) {
        case 'dub':
            $scope.getIdCate(5);
            break;
        case 'hiohop':
            $scope.getIdCate(5);
            break;
        case 'bo':
            $scope.getIdCate(17);
            break;
        case 'soft':
            $scope.getIdCate(7);
            break;
        case 'jazz':
            $scope.getIdCate(8);
            break;
        case 'minimal':
            $scope.getIdCate(9);
            break;
        case 'rap':
            $scope.getIdCate(10);
            break;
        case 'instrumental':
            $scope.getIdCate(11);
            break;
        case 'electro':
            $scope.getIdCate(12);
            break;
        case 'deephouse':
            $scope.getIdCate(13);
            break;
        case 'blues':
            $scope.getIdCate(14);
            break;
        case 'mix':
            $scope.getIdCate(15);
            break;
        case 'musique du monde':
            $scope.getIdCate(16);
            break;
    }

});
