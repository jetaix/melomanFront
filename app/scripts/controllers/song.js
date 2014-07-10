'use strict';

angular.module('melomanApp')
  .controller('SongCtrl', function ($scope, $http, $location, $timeout) {
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

    $scope.getAllArtistSound = function ($name_artist){
      if($name_artist) {
        $http({
          method: 'GET',
          url: 'http://dev.api-meloman.com:8888/v1/artistSongs/' + $name_artist}).
          success(function(data, status, headers, config) {
            console.log(data);
            $scope.dataArtistSound = (data);
          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });
        }
    };

    // for a general player (header)
    $scope.getFirst = function() {
      $scope.firstSoundUrl = $('.innerbox:first').data('scurl');
      $('#player-header').data('src', $scope.firstSoundUrl);
      return $scope.firstSoundUrl;
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
    $scope.changeView = function(id_category, title_category){
      $location.path('category/'+title_category);
    }
    $scope.goSearch = function(){
      $location.path('search');
    }

    $scope.getAllSound();


    $timeout(function() {
      $('.isotope').isotope({
        layoutMode: 'masonryHorizontal',
        itemSelector: '.sound-wrapper',
        masonryHorizontal: {
          rowHeight: 220
        }
      });
    },2000);


});