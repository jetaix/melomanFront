'use strict';

angular.module('melomanApp')
  .controller('SongCtrl', function ($scope, $http, $location) {
    $scope.getAllSound = function (){
      $http({
        method: 'GET',
        url: 'http://dev.api-meloman.com:8888/v1/song'}).
        success(function(data, status, headers, config) {
          $scope.dataSound = (data);
        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    };

    $scope.getOneSound = function (id){
      $http({
        method: 'GET',
        url: 'http://dev.api-meloman.com:8888/v1/song/' + id}).
        success(function(data, status, headers, config) {
          $scope.dataSound = (data);
        }).
        error(function(data, status, headers, config) {
          console.log('http getOnSound error');
        });
    };


    $scope.streamSound = function(id, status){
      SC.stream('/tracks/' + id, {
        autoPlay: true,
      });
    };
    $scope.getAllSound();
    // $scope.getOneSound(id);
    $scope.pause = function(){
      SC.pause('157585750');
    };
    $scope.changeView = function(id_category){
      $location.path('category/'+id_category);
    }

});
