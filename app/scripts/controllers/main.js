'use strict';

angular.module('melomanApp')
  .controller('MainCtrl', function ($scope, $timeout) {
    
    $scope.init = true;

    $timeout(function() {
      $scope.init = false;
    },2000);

  	SC.initialize({
  		client_id: "f944e2e1605cbe1de67e7b3c54b3a808",
  		redirect_uri: "http://127.0.0.1:9000/#/",
  	});


  });
