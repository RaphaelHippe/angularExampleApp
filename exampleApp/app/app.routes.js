/*
  Here we will declare all the routes. Routes are part of the baseModule.
*/
angular.module('baseModule')
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/home/homeView.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
