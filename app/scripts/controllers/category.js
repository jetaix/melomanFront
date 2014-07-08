'use strict';

angular.module('melomanApp')
  .controller('CategoryCtrl', function ($scope, $http, $routeParams) {

    $scope.categoryName = ($routeParams.categoryName);

    $scope.getIdCate = function(id){
      console.log(id);
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

});
