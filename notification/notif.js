angular.module('ionicApp', ['ionic'])

.controller('PlaylistsCtrl', function($scope, $ionicPopup, $timeout) {
  $scope.data = {}
  
  // Triggered on a button click, or some other target
  $scope.showPopup = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'You are now form part of the Black pink group!',
      template: 'Talk with elon for permission'
    });
    alertPopup.then(function(res) {
      console.log('Thank you have a nice day');
    });
  };
});