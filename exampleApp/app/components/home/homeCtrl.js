var module = angular.module('homeModule');

module.controller('HomeCtrl', ['$scope',
  function($scope) {
    $scope.sayWelcome = function () {
      $scope.welcome = 'Welcome World!';
    };
    $scope.sayGoodbye = function () {
      $scope.goodbye = 'Goodbye World!';
    };


  }
]);
