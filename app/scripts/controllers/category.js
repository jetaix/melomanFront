'use strict';

angular.module('melomanApp')
  .controller('CategoryCtrl', function ($scope, $http, $routeParams) {

    $scope.idCategory = ($routeParams.categoryID);

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
    $scope.getIdCate($scope.idCategory);

});
