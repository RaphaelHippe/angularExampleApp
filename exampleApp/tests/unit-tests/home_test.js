describe('HomeCtrl', function() {
  beforeEach(angular.mock.module("homeModule"));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.sayWelcome', function() {
    it('sets the value of $scope.welcome to "Welcome World!"', function() {
      var $scope = {};
      var controller = $controller('HomeCtrl', { $scope: $scope });
      $scope.sayWelcome();
      expect($scope.welcome).toEqual('Welcome World!');
    });
  });

  describe('$scope.sayGoodbye', function() {
    it('sets the value of $scope.goodbye to "Goodbye World!"', function() {
      var $scope = {};
      var controller = $controller('HomeCtrl', { $scope: $scope });
      $scope.sayGoodbye();
      expect($scope.goodbye).toEqual('Goodbye World!');
    });
  });

});
